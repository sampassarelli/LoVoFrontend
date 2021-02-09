import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ 
  name, 
  address, 
  image,
  category,
  visited,
  dateVisited,
  comment,
  cost,
  attendees,
  onPress,
  renderRightActions,  
}) {
  return (
        <View style={styles.card}>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            {name && <AppText style={styles.title} numberOfLines={1}>{name}</AppText>}
            {address && <AppText style={styles.subTitle} numberOfLines={1}>{address}</AppText>}
            {category && <AppText style={styles.subTitle} numberOfLines={1}>{category}</AppText>}
            {dateVisited && <AppText style={styles.subTitle} numberOfLines={1}>{dateVisited}</AppText>}
            {comment && <AppText style={styles.subTitle} numberOfLines={3}>{comment}</AppText>}
            {cost && <AppText style={styles.subTitle} numberOfLines={1}>{cost}</AppText>}
            {attendees && <AppText style={styles.subTitle} numberOfLines={1}>{attendees}</AppText>}
          </View>
        </View>
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
