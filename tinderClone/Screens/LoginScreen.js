import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import useAuth from "../hooks/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-rn";

const LoginScreen = () => {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, []);
  const { signInWithGoogle, loading } = useAuth();
  return (
    <View style={tw("flex-1")}>
      <ImageBackground
        resizeMode="cover"
        style={tw("flex-1")}
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          style={[
            tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
            { marginHorizontal: "25%" },
          ]}
          onPress={signInWithGoogle}
        >
          <Text style={tw("text-center")}>Sign in & get Swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
