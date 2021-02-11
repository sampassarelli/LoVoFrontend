import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Switch } from 'react-native';
import * as Yup from "yup";


import AppButton from '../components/AppButton';
import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppText from '../components/AppText'
import colors from '../config/colors'
import DestinationContext from '../components/contexts/DestinationContext'
import ErrorMessage from '../components/forms/ErrorMessage'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import SubmitButton from '../components/forms/SubmitButton'
import UserContext from '../components/contexts/UserContext';

function DestinationEditScreen({route, navigation}) {
  const destination = route.params
  const [user, setUser] = useContext(UserContext)
  const [destinations, setDestinations] = useContext(DestinationContext)
  const [submitFailed, setSubmitFailed] = useState(false)
  const hiddenFields = false
  
  ////////// These Individual States Are So I can Edit My Form //////////
  const [name, setName] = useState(destination.name)
  const [visited, setVisited] = useState(destination.visited)
  const [address, setAddress] = useState(destination.address)
  const [category, setCategory] = useState(destination.category)
  const [comment, setComment] = useState(destination.comment)
  const [dateVisited, setDateVisited] = useState(destination.date_visited)
  const [cost, setCost] = useState(destination.cost)
  const [attendees, setAttendees] = useState(destination.attendees)

  const validationSchema = Yup.object().shape({
    // longitude: Yup.string().required().label("Google Search"),
    // latitude: Yup.string().required().label("Google Search"),
    // google: Yup.string().required().label("Google Search")
    // name: Yup.string().required().label("Name of Destination"),
    // address: Yup.string().required().label("Address"),
    // visited: Yup.string().required().label("Name of Destination"),
  
  });

  // useEffect(() => {
  //   setDestin(destination)
  // },[])

  handleSubmit = async (formData) => {
    formData.visited = visited

    const reqObj = {
      method: 'Patch',
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(formData)
      }

    await fetch(`http://localhost:3000/api/v1/destinations/${destination.id}`, reqObj)
    .then(resp => resp.json())
    .then(updatedDestination =>{
      if (updatedDestination.error){
        return setSubmitFailed(true)
      } else {
        setDestinations(destinations.map(d => d.id === destination.id ? updatedDestination : d))
        console.log(updatedDestination)
        navigation.navigate(routes.DESTINATION_LIST)
      }
    })
  }


  return (
    <Screen>
      <ScrollView>
        <AppForm
          initialValues={{ 
            user_id: user.user.id,
            // address: destination.address, 
            // name: destination.name, 
            // category: destination.category, 
            // visited: destination.visited,
            // date_visited: destination.date_visited,
            // // cost: destination.cost.toString(),
            // attendees: destination.attendees,
            // latitude: destination.latitude,
            // longitude: destination.longitude,
          }}
          onSubmit={(formData) => handleSubmit(formData)}
          validationSchema={validationSchema}
        >
          <ErrorMessage error="The shit wasn't submitted" visible={submitFailed }/>
          
          <AppFormField
            autoCorrect
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <AppFormField
            autoCorrect
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <AppFormField
            autoCorrect
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <AppFormField
            autoCorrect
            name="comment"
            placeholder="Comment"
            value={comment}  
            onChange={(e) => setComment(e.target.value)}
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
                placeholder="Date Visited"
                value={dateVisited}
                onChange={(e) => setDateVisited(e.target.value)}
              />
              <AppFormField
                autoCorrect
                name="cost"
                placeholder="Money Spent"
                value={cost ? cost.toString() : null }
                onChange={(e) => setCost(e.target.value)}
              />
              <AppFormField
                autoCorrect
                name="attendees"
                placeholder="Attendees"
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
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
                  name="longitude"
                  value={destination.longitude}
                />
                <AppFormField
                  autoCorrect
                  name="latitude"
                  value={destination.latitude}
                />
              </View>
              :
              null
            }
          </View>
          <SubmitButton title="Update Destination"/>
          <AppButton title="Cancel"/>
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

  const styles = StyleSheet.create({
    container: {
      padding: 10,
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

export default DestinationEditScreen;