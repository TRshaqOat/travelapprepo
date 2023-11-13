import React, { useState } from "react";
import axios from "axios";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const MainScreen = ({ navigation }) => {
  const [search, setsearch] = useState("");
  const [data, setData] = useState({});

  const searchFood = async (event) => {
    const options = {
      method: "GET",
      url: "https://travel-info-api.p.rapidapi.com/country",
      params: { country: "search" },
      headers: {
        "X-RapidAPI-Key": "c6d00b02demsh6fbd40f27f235a2p16f75djsn6538ec2274e0",
        "X-RapidAPI-Host": "travel-info-api.p.rapidapi.com",
      },
    };
    if (event.key === "Enter") {
      try {
        try {
          const response = await axios.request(options);
          if (response.data.size > 1) {
            console.log(response.data.length + " Items");
          }

          setData(response.data[0]);
          console.log(response.data);
          console.log("Total: " + newTotalCalories + " Calories");
        } catch (error) {
          console.error(error);
        }

        setFood("");
      } catch (error) {
        console.error("Error:", error);
      }
      resetAnimation();
    }
  };

  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Go back to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <TextInput
        value={search}
        onChange={(event) => setsearch(event.target.value)}
        placeholder="Enter Ingredients/Food"
        type="text"
      />
      <Button title="Search" onPress={searchFood} />
      <Text></Text>
    </View>
  );
};

export default MainScreen;
