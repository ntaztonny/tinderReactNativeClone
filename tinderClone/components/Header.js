import { View, Text } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  return (
    <View style={tw("p-2 flex-row items-center justify-between")}>
      <View style={tw("flex flex-row items-center")}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw("p-2")}>
          <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
          {/* <Image
          style={tw("rounded-full h-10 w-10 mr-2")}
          source={{ uri: matchDetails.photoURL }}
        /> */}
        </TouchableOpacity>

        <Text style={tw("text-2xl font-bold pl-2")}>{title}</Text>
      </View>

      {callEnabled && (
        <TouchableOpacity style={tw("rounded-full mr-4 p-3 bg-red-200")}>
          <Foundation style={tw("")} name="telephone" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
