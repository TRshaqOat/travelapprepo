import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Carousel = ({ imagesArray, sample }) => {
  console.log(imagesArray);
  console.log(sample);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((currentIndex + 1) % imagesArray.length);
  };

  const showPrevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + imagesArray.length) % imagesArray.length
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.imageContainer}>
        <Image
          //source={{ uri: imagesArray[currentIndex].imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        {/* <Text style={styles.title}>{imagesArray[currentIndex].title}</Text> */}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={showPrevImage}>
          <Text style={styles.buttonText}>&lt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showNextImage}>
          <Text style={styles.buttonText}>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "80%",
    height: "60%",
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Carousel;
