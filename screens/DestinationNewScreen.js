import React, { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, LogBox, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import * as Yup from "yup";
import {YellowBox} from 'react-native';

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm"
import AppFormField from "../components/forms/AppFormField"
import SubmitButton from "../components/forms/SubmitButton"
import colors from "../config/colors"
import AppText from "../components/AppText";
import DestinationContext from "../components/contexts/DestinationContext";
import ErrorMessage from "../components/forms/ErrorMessage";
import UserContext from '../components/contexts/UserContext'
import routes from '../navigation/routes'
import AppTextInput from "../components/AppTextInput";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import defaultStyles from "../config/styles";


const validationSchema = Yup.object().shape({
  // longitude: Yup.string().required().label("Google Search"),
  // latitude: Yup.string().required().label("Google Search"),
  // google: Yup.string().required().label("Google Search")
  // name: Yup.string().required().label("Name of Destination"),
  // address: Yup.string().required().label("Address"),
  // visited: Yup.string().required().label("Name of Destination"),

});

function DestinationNewScreen({navigation}) {
  LogBox.ignoreLogs(['VirtualizedLists'])
  const [visited, setVisited] = useState(false)
  const [destinations, setDestinations] = useContext(DestinationContext)
  const [user, setUser] = useContext(UserContext)
  const [submitFailed, setSubmitFailed] = useState(false)

  ////////// local state to hold google places details and set values to the fields //////////
  const [name, setName] = useState(null)
  const [address, setAddress] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [latitude, setLatitude] = useState(null)

  
  {/* This const below is So that the Longitude and Latitude fields are always hidden */}
  const hiddenFields = false

  handleSubmit = async (formData) => {
    ////////// I have to set these values again because they aren't being updated by the time I submit the form. This forces them to update //////////
      formData.visited = visited
      formData.name = name
      formData.address = address
      formData.longitude = longitude
      formData.latitude = latitude
      const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
        }
  
      await fetch('http://localhost:3000/api/v1/destinations', reqObj)
      .then(resp => resp.json())
      .then(newDestination =>{
        if (newDestination.error){
          return setSubmitFailed(true)
        } else {
          setDestinations([...destinations, newDestination])
          navigation.navigate(routes.DESTINATION_LIST)
        }
      })
   
  }
    const key = "AIzaSyAKojKBIz_9aWqfmTtQphlSlmoOk-ujYFs"


  return (
    <Screen style={styles.container}>

      <ScrollView keyboardShouldPersistTaps={"handled"}>

        <Text style={styles.header}>Where to Next?</Text>

          <GooglePlacesAutocomplete
            styles={
              styles.google
            }
            placeholder="GOOGLE SEARCH"
            minLength={2} 
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed="auto"
            fetchDetails={true}
            renderDescription={row => row.description} // description is the name of the key in the object that will render when you search
            onPress={(data, details) => {
              setName(details.name)
              setAddress(details.formatted_address)
              setLongitude(details.geometry.location.lng)
              setLatitude(details.geometry.location.lat)
            }}
            getDefaultValue={() => {
              return ''; // text input default value
            }}
            query={{
              key: key,
              language: 'en',
            }}
            nearbyPlacesAPI="GooglePlacesSearch" 
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
            }}
            debounce={200}
          />

          <ErrorMessage error="Please Use Google Search to Find Your Destination!" visible={submitFailed }/>

          {/* <AppTextInput
              autoCorrect={false}
              icon="magnify"
              placeholder="GOOGLE SEARCH"
          />
         */}

        <AppForm
          initialValues={{ 
            user_id: user.user.id,
            address: address, 
            name: name, 
            // category: null, 
            // visited: visited,
            // date_visited: null,
            // cost: null,
            // attendees: null,
            latitude: latitude,
            longitude: longitude,
            }}
          onSubmit={(formData, {resetForm}) => {
            handleSubmit(formData)
            resetForm({formData: ""})
            }
          }
          validationSchema={validationSchema}
        >
          
        
          <AppFormField
            autoCorrect
            name="category"
            placeholder="Category"
          />
          <AppFormField
            autoCorrect
            name="comment"
            placeholder="Memories, Comments, Notes, etc. "
          />
          <AppText style={styles.visited}>
            Have You Visited Here Yet?
          </AppText>
            <Switch 
              name="visited"
              style={styles.switch} 
              value={visited}
              onValueChange={newValue => setVisited(newValue)}
              />
          <View>
            {
            visited ?
            <View>
              <Text style={styles.optional}>
              Optional Fields Below
              </Text>
              <AppFormField
                autoCorrect
                name="date_visited"
                placeholder="Date Visited - MM/DD/YYYY"
              />
              <AppFormField
                autoCorrect
                name="cost"
                placeholder="Money Spent"
              />
              <AppFormField
                autoCorrect
                name="attendees"
                placeholder="Attendees"
              />
              </View>
              :
              null
            }
          </View>
          {/* This View Below is So that the Longitude and Latitude fields are always hidden */}
          <View>
            {
              hiddenFields 
              ? 
              <View>
                <AppFormField
                  autoCorrect
                  name="name"
                  placeholder="Name"
                  value={name}
                />
                <AppFormField
                  autoCorrect
                  name="address"
                  placeholder="Address"
                  value={address}
                />
                <AppFormField
                  autoCorrect
                  name="longitude"
                  value={longitude}
                />
                <AppFormField
                  autoCorrect
                  name="latitude"
                  value={latitude}
                />
              </View>
              :
              null
            }
          </View>
          <SubmitButton title="Add Destination" onSubmit={() => resetForm()}/>
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  google:{
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "500",
    paddingVertical: 20,
    color: colors.primary,
  },
  optional: {
    paddingLeft: 10
  },
  switch:{
    alignSelf: "center",
    paddingVertical: 30
  },
  visited: {
    alignSelf: "center"
  },
});

export default DestinationNewScreen;
