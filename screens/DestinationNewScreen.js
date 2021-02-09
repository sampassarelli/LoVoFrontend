import React, { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import * as Yup from "yup";

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

const validationSchema = Yup.object().shape({
  // longitude: Yup.string().required().label("Google Search"),
  // latitude: Yup.string().required().label("Google Search"),
  // google: Yup.string().required().label("Google Search")
  // name: Yup.string().required().label("Name of Destination"),
  // address: Yup.string().required().label("Address"),
  // visited: Yup.string().required().label("Name of Destination"),

});

function DestinationNewScreen({navigation}) {
  const [visited, setVisited] = useState(false)
  const [destinations, setDestinations] = useContext(DestinationContext)
  const [user, setUser] = useContext(UserContext)
  const [submitFailed, setSubmitFailed] = useState(false)
  
  {/* This const below is So that the Longitude and Latitude fields are always hidden */}
  const hiddenFields = false

  handleSubmit = async (formData) => {
    // console.log(formData);
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

  return (
    <Screen style={styles.container}>
      <Text>{!destinations ? "Add Your First Destination" : null }</Text>
      <ScrollView>
        <Text style={styles.header}>Where to Next?</Text>
        <AppForm
          initialValues={{ 
            user_id: user.user.id,
            address: "", 
            name: "", 
            category: "", 
            visited: visited,
            date_visited: "",
            cost: null,
            attendees: "",
            latitude: 0,
            longitude: 0,
            }}
          onSubmit={(formData) => handleSubmit(formData)}
          validationSchema={validationSchema}
        >
        <ErrorMessage error="The shit wasn't submitted" visible={submitFailed }/>
          <AppFormField
            autoCorrect={false}
            icon="magnify"
            name="google"
            placeholder="GOOGLE SEARCH"
          />
          <AppFormField
            autoCorrect
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCorrect
            name="address"
            placeholder="Address"
          />
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
          <AppForm
            name="visited"
          >
            <Switch 
              name="visited"
              style={styles.switch} 
              value={visited}
              onValueChange={newValue => setVisited(newValue)}
              />
          </AppForm>
          <View>
            {
            visited ?
            <View>
              <Text style={styles.optional}>
              Optional Fields Below
              </Text>
              <AppFormField
                autoCorrect
                name="date"
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
                  name="longitude"
                />
                <AppFormField
                  autoCorrect
                  name="latitude"
                />
              </View>
              :
              null
            }
          </View>
          <SubmitButton title="Add Destination" onPress={() => resetForm()}/>
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

export default DestinationNewScreen;
