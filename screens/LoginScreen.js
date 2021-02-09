import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm"
import AppFormField from "../components/forms/AppFormField"
import SubmitButton from "../components/forms/SubmitButton"
import UserContext from "../components/contexts/UserContext";
import ErrorMessage from "../components/forms/ErrorMessage";



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

function LoginScreen(props) {
  // const userContext = useContext(UserContext)
  const [user, setUser] = useContext(UserContext)
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = (loginData) => {
    const reqObj = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(loginData)
      }

      fetch('http://localhost:3000/api/v1/auth', reqObj)
      .then(resp => resp.json())
      .then(userData =>{
        if (userData.error){
          return setLoginFailed(true)
        } else {
          AsyncStorage.setItem('jwt_token', userData.jwt_token)
          setUser(userData)
          // console.log(user);
        }
      })
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/signUpLogo.png")} />
      <ErrorMessage />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={loginData => handleSubmit(loginData)}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid Email and/or Password" visible={loginFailed }/>
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
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 120,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;