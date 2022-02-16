import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatScreen from "./Screens/ChatScreen";
import LoginScreen from "./Screens/LoginScreen";

const Stack = createNativeStackNavigator();
const user = true;
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;