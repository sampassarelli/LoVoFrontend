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
          {image && <Image style={styles.image} source={{uri : image}} />}
          <View style={styles.detailsContainer}>
            {name && <AppText style={styles.title} numberOfLines={4}>{name}</AppText>}

            {address && <Text style={styles.header}>Address:</Text>}
            {address && <AppText style={styles.subTitle} numberOfLines={4}>{address}</AppText>}

            {category && <Text style={styles.header}>Category:</Text>}
            {category && <AppText style={styles.subTitle} numberOfLines={1}>{category}</AppText>}

            {dateVisited && <Text style={styles.header}>Date Visited:</Text>}
            {dateVisited && <AppText style={styles.subTitle} numberOfLines={1}>{dateVisited}</AppText>}
            
            {comment && <Text style={styles.header}>Memories/Comments:</Text>}
            {comment && <AppText style={styles.subTitle} numberOfLines={20}>{comment}</AppText>}

            {/* {cost && <Text style={styles.header}>Money Spent:</Text>}
            {cost && <AppText style={styles.subTitle} numberOfLines={1}>{cost}</AppText>} */}
            
            {attendees && <Text style={styles.header}>Attendees:</Text>}
            {attendees && <AppText style={styles.subTitle} numberOfLines={5}>{attendees}</AppText>}
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  header:{
    marginTop: 10,
    color: colors.primary,
  },
  image: {
    width: "100%",
    height: 350,
  },
  subTitle: {
    color: colors.dark,
    fontWeight: "300",
  },
  title: {
    marginBottom: 7,
    fontSize: 25
  },
});

export default Card;
