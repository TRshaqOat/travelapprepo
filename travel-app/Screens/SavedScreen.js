import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";

const SavedScreen = ({ route, navigation }) => {
  const { ratingNum, location } = route.params;
  const imagesArray = [];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(ratingNum)}</Text>
      <Text>otherParam: {JSON.stringify(location)}</Text>
    </View>
  );
};

export default SavedScreen;
