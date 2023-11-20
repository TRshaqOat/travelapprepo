import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Button, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import stylesMain from "./style";
import Carousel from "../Components/Carousel";

const MainScreen = ({ navigation }) => {
  const [search, setsearch] = useState("");
  const [data, setData] = useState({});
  const [url, setURL] = useState({});
  const [imagesArray, setImagesArray] = useState([]);

  const [weatherData, setWeatherData] = useState(null);
  const [images, setimages] = useState({});

  useEffect(() => {
    console.log("imagesArray updated:", imagesArray);
  }, [imagesArray]);

  const searchLocation = async (event) => {
    console.log("searchLocation function called");

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

        setData(response.data[0]);
        console.log(response.data);
        setURL(response.data.data.image_url);
        const newArray = [];

        for (let i = 0; i < response.data.data.country_images.length; i++) {
          const imageUrl = response.data.data.country_images[i].imageUrl; // Adjust the property name if needed
          const title = response.data.data.country_images[i].title; // Adjust the property name if needed

          newArray.push({ imageUrl, title });
        }
        setImagesArray(newArray);

        console.log(imagesArray);
      } catch (error) {
        console.error(error);
      }
      setsearch("");
      console.log(imagesArray);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  if (imagesArray.length == 0) {
    console.log("false");
  }
  console.log(imagesArray);

  const fetchWeatherData = async () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: search },
      headers: {
        "X-RapidAPI-Key": "28622ab15emsh37de7c04fb42d0bp134858jsnbee14dcb0847",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>
        <Text style={stylesMain.logoText}>Search For Your Destination!</Text>
      </Text>
      <Button
        title="Go back to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <TextInput
        value={search}
        onChangeText={(text) => setsearch(text)}
        placeholder="Enter Vacation Location"
        type="text"
        style={stylesMain.loginFormTextInput}
      />
      <Button
        title="Search"
        onPress={() => {
          searchLocation();
          fetchWeatherData();
        }}
        buttonStyle={stylesMain.loginButton}
      />
      <Text>
        <Text style={stylesMain.logoText}>{search}!</Text>
      </Text>
      <Image source={{ uri: url }} style={{ width: 200, height: 200 }} />
      <Carousel imagesArray={imagesArray} />
    </View>
  );
};

export default MainScreen;
