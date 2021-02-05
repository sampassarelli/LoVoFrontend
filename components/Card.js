import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ 
  title, 
  subTitle, 
  image,
  onPress,
  renderRightActions,  
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}> 
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
