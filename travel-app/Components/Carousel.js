import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Carousel = ({ imagesArray }) => {
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
        {imagesArray.length > 0 ? (
          <>
            <Image
              source={{ uri: imagesArray[currentIndex].imageUrl }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{imagesArray[currentIndex].title}</Text>
          </>
        ) : (
          <Text style={styles.waitText}>Images Will Appear Shortly...</Text>
        )}
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
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 20,
  },
  title: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 20,
    fontSize: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "#015c56",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  waitText: {
    textAlign: "center",
    color: "black",
    fontSize: 25,
    marginTop: 40,
    fontWeight: "bold",
  },
});

export default Carousel;
