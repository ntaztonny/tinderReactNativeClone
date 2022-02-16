import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/AuthProvider";

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <View>
      <Button title="Login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
