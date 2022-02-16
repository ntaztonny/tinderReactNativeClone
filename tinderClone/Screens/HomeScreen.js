import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is the home screen</Text>
      <Button
        title="open Chat"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      />
    </View>
  );
};

export default HomeScreen;
