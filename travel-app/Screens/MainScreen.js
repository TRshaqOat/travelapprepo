import React from "react";
import { View, Text, Button } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Go back to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default MainScreen;
