import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";
import Carousel from "../Components/Carousel";
import { MaterialIcons } from "@expo/vector-icons";

const MainScreen = ({ navigation }) => {
  const [search, setsearch] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [url, setURL] = useState({});
  const [imagesArray, setImagesArray] = useState([]);
  const [starRating, setStarRating] = useState(null);

  const [weatherData, setWeatherData] = useState(null);
  const [images, setimages] = useState({});

  useEffect(() => {}, [imagesArray]);

  const searchLocation = async (event) => {
    console.log("searchLocation function called");
    setLocation(search);
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
      } catch (error) {
        console.error(error);
      }
      setsearch("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      <Text style={styles.searchText}>Search For Any Destination!</Text>
      <TextInput
        value={search}
        onChangeText={(text) => setsearch(text)}
        placeholder="Enter Vacation Location"
        type="text"
        style={styles.searchTextInput}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => {
          searchLocation();
          fetchWeatherData();
        }}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      {/* <Image source={{ uri: url }} style={{ width: 200, height: 200 }} /> */}
      <Carousel imagesArray={imagesArray} />

      {imagesArray.length > 0 ? (
        <>
          <View style={styles.weatherInfoSection}>
            <View style={styles.weatherInfoItem}>
              <Text style={styles.weatherInfoLabel}>Feels Like</Text>
              <Text style={styles.weatherInfoValue}>
                {weatherData.current.feelslike_f}ºF
              </Text>
            </View>
            <View style={styles.weatherInfoItem}>
              <Text style={styles.weatherInfoLabel}>Actual Temp</Text>
              <Text style={styles.weatherInfoValue}>
                {weatherData.current.temp_f}ºF
              </Text>
            </View>
            <View style={styles.weatherInfoItem}>
              <Text style={styles.weatherInfoLabel}>Precipitation</Text>
              <Text style={styles.weatherInfoValue}>
                {weatherData.current.precip_in} inches
              </Text>
            </View>
          </View>
        </>
      ) : (
        <Text></Text>
      )}

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            {starRating ? `${starRating}*` : "Tap to rate"}
          </Text>
          <View style={styles.stars}>
            <TouchableOpacity onPress={() => setStarRating(1)}>
              <MaterialIcons
                name={starRating >= 1 ? "star" : "star-border"}
                size={32}
                style={
                  starRating >= 1 ? styles.starSelected : styles.starUnselected
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(2)}>
              <MaterialIcons
                name={starRating >= 2 ? "star" : "star-border"}
                size={32}
                style={
                  starRating >= 2 ? styles.starSelected : styles.starUnselected
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(3)}>
              <MaterialIcons
                name={starRating >= 3 ? "star" : "star-border"}
                size={32}
                style={
                  starRating >= 3 ? styles.starSelected : styles.starUnselected
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(4)}>
              <MaterialIcons
                name={starRating >= 4 ? "star" : "star-border"}
                size={32}
                style={
                  starRating >= 4 ? styles.starSelected : styles.starUnselected
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(5)}>
              <MaterialIcons
                name={starRating >= 5 ? "star" : "star-border"}
                size={32}
                style={
                  starRating >= 5 ? styles.starSelected : styles.starUnselected
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => {
          navigation.navigate("Rated", {
            ratingNum: starRating,
            location: location,
          });
        }}
      >
        <Text style={styles.searchButtonText}>Go to Rated Locations</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
