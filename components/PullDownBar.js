import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function PullDownBar() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "20%",
    height: 5,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: colors.medium,
  },
});

export default PullDownBar;