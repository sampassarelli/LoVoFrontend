import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
    blurRadius={2}
      style={styles.background}
      source={require("../assets/welcome-background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/LovoLogo2.png")}/>
        <Text style={styles.tagline}>Where To Next?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton 
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
          />
        <AppButton 
          title="Create Account" 
          color="secondary" 
          onPress={() => navigation.navigate(routes.REGISTER)}
          />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 223,
    height: 275,
    opacity: .8,
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "900",
    paddingVertical: 20,
    color: colors.primary,
  },
});

export default WelcomeScreen;
