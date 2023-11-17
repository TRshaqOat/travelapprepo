import React from "react";
import { View, FlatList, Dimensions, Image, Text } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

function Carousel({ data }) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={{ width: SCREEN_WIDTH }}>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Carousel;
