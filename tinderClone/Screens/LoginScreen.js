import { View, Text } from "react-native";
import React from "react";
import useAuth from "../hooks/AuthProvider";

const LoginScreen = () => {
  const [{ user }, dispatch] = useAuth();
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
