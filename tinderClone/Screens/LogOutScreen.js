import { Text, View } from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation;

export class LogOutScreen extends Component {
  render() {
    return (
      <View>
        <Text>LogOutScreen</Text>
      </View>
    );
  }
}

export default LogOutScreen;
