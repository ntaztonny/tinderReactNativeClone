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
import Swiper from "react-native-deck-swiper";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();

  const DATA = [
    {
      firstName: "Isaac",
      lastName: "Tomson",
      occupation: "Software Engneer",
      photoURL: "https://avatars.githubusercontent.com/u/24712956?v=4",
      age: 27,
      id: 1,
    },
    {
      firstName: "Elon",
      lastName: "Mask",
      occupation: "Enterpreneur",
      photoURL: "https://avatars.githubusercontent.com/u/24712956?v=4",
      age: 45,
      id: 2,
    },
    {
      firstName: "Phillips",
      lastName: "Laptom",
      occupation: "Designer",
      photoURL: "https://avatars.githubusercontent.com/u/24712956?v=4",
      age: 31,
      id: 3,
    },
    {
      firstName: "Christiano",
      lastName: "Ronaldo",
      occupation: "Athelete",
      photoURL: "https://avatars.githubusercontent.com/u/24712956?v=4",
      age: 37,
      id: 4,
    },
  ];

  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, []);

  return (
    <SafeAreaView style={tw("flex-1")}>
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
      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DATA}
          renderCard={(card) => (
            <View key={card.id} style={tw("bg-white-500 h-3/4 rounded-xl")}>
              <Image
                style={tw("h-full rounded-xl")}
                source={{ uri: card.photoURL }}
              />
              <Text>{card.firstName}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
