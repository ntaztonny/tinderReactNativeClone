import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-rn";
import HomeScreen from "./Screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import useAuth, { AuthProvider } from "./hooks/AuthProvider";
import { LogBox } from "react-native";

export default function App() {
  const { user } = useAuth;
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
