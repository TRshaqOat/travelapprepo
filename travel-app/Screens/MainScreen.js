import React, { useState } from "react";
import axios from "axios";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";

const MainScreen = ({ navigation }) => {
  const [search, setsearch] = useState("");
  const [data, setData] = useState({});

  const searchFood = async (event) => {
    console.log("searchFood function called");

    const options = {
      method: "GET",
      url: "https://travel-info-api.p.rapidapi.com/country",
      params: { country: search },
      headers: {
        "X-RapidAPI-Key": "c6d00b02demsh6fbd40f27f235a2p16f75djsn6538ec2274e0",
        "X-RapidAPI-Host": "travel-info-api.p.rapidapi.com",
      },
    };

    try {
      try {
        const response = await axios.request(options);
        console.log(response.data.length + " Items");

        if (response.data.length > 1) {
          console.log(response.data.length + " Items");
        }

        setData(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      setsearch("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View>
      <Text style={styles.logoText}>Search For Your Destination!</Text>
      <Button
        title="Go back to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <TextInput
        value={search}
        onChangeText={(text) => setsearch(text)}
        placeholder="Enter Vacation Location"
        type="text"
        style={styles.loginFormTextInput}
      />
      <Button
        title="Search"
        onPress={searchFood}
        buttonStyle={styles.loginButton}
      />
      <Text></Text>
    </View>
  );
};

export default MainScreen;
