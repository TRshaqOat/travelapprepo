import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";

const locations = [];
const ratings = [];

const SavedScreen = ({ route, navigation }) => {
  const { ratingNum, location } = route.params;
  locations.push(location);
  ratings.push(JSON.stringify(ratingNum));
  console.log(locations);
  console.log(ratingNum);

  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Location with Rating
      </Text>
      {locations.map((item1, index) => (
        <View key={index} style={{ flexDirection: "row", marginBottom: 5 }}>
          <Text style={{ marginRight: 10 }}>{item1}:</Text>
          <Text>{ratings[index]} Stars</Text>
        </View>
      ))}
    </View>
  );
};

export default SavedScreen;
