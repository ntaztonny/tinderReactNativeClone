import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/AuthProvider";
import tw from "tailwind-rn";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();

  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, []);

  return (
    <SafeAreaView>
      {/**Header */}
      <View style={tw("flex-row items-center justify-between px-5")}>
        <TouchableOpacity onPress={logOut}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tw("h-14 w-14")}
            source={require("../images/tinderLogo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
