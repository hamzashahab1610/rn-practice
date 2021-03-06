import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

const listItem = props => (
  <TouchableNativeFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom:5,
    padding: 10,
    backgroundColor: "#eee"
  }
});

export default listItem;
