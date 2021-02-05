import React from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm"
import AppFormField from "../components/forms/AppFormField"
import SubmitButton from "../components/forms/SubmitButton"
import colors from "../config/colors"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      {/* <Text style={styles.header}>Create Your Account</Text> */}
      <AppForm
        initialValues={{ name: "", username: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Username"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Create Account" />
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

export default RegisterScreen;
