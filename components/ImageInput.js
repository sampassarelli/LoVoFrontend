import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

// import ErrorMessage from "./ErrorMessage";


function ImageInput({name}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name]
  // const [imageUri, setImageUri] = useState(image)

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => setFieldValue(name, null) },
        { text: "No" },
      ]);
  };  

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      console.log(result.uri)
      if (!result.cancelled) setFieldValue(name, result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;