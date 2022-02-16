import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-rn";
import HomeScreen from "./Screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./hooks/AuthProvider";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
