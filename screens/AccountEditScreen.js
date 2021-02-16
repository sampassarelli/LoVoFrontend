import React, { useContext, useState } from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm"
import AppFormField from "../components/forms/AppFormField"
import SubmitButton from "../components/forms/SubmitButton"
import colors from "../config/colors"
import UserContext from '../components/contexts/UserContext'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  // password: Yup.string().required().min(4).label("Password"),
});

function AccountEditScreen() {
  const [user, setUser] = useContext(UserContext)
  const [submitFailed, setSubmitFailed] = useState(false)

  const [name, setName] = useState(user.user.first_name)
  const [username, setUsername] = useState(user.user.username)
  const [email, setEmail] = useState(user.user.email)

  


  return (
    <Screen style={styles.container}>
      {/* <Text style={styles.header}>Create Your Account</Text> */}
      <AppForm
        initialValues={{ 
          // name: "", 
          // username: "", 
          // email: "", 
          password: user.user.password }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <SubmitButton title="Update Account" />
      </AppForm>
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
});

export default AccountEditScreen;
