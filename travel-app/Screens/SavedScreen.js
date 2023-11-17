import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";

const SavedScreen = ({ navigation }) => {
  const [search, setsearch] = useState("");
  const [data, setData] = useState({});
  const [url, setURL] = useState({});
  const imagesArray = [];

  const [weatherData, setWeatherData] = useState(null);
  const [images, setimages] = useState({});

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default SavedScreen;
