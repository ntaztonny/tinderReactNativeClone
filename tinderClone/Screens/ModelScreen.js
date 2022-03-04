import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-rn";
import useAuth from "../hooks/AuthProvider";

const ModelScreen = () => {
  const { user } = useAuth();
  const [Image, setImage] = useState(null);
  const [Job, setJob] = useState(null);
  const [Age, setAge] = useState(null);
  //const incompleteForm = !Image || !Job || !Age;

  return (
    <View style={tw("flex-1 items-center pt-1")}>
      <Image
        source={require("../images/Tinder-horizontal.png")}
        style={tw("h-20 w-full")}
        resizeMode="contain"
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 1: The profile Pic
      </Text>
      <TextInput
        value={Image}
        onChangeText={(text) => {
          setImage(text);
        }}
        placeholder="enter profile pic URL"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 2: The Job
      </Text>
      <TextInput
        value={Job}
        onChangeText={(text) => {
          setJob(text);
        }}
        placeholder="enter your occupation"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 3: The Age
      </Text>
      <TextInput
        placeholder="enter your age"
        value={Age}
        onChangeText={(text) => {
          setImage(setAge(text));
        }}
      />

      <TouchableOpacity
        // disabled={incompleteForm}
        style={tw("w-64 p-3 rounded-xl absolute bottom-10 bg-red-400 ")}
      >
        <Text style={tw("text-center text-white text-xl")}>Update profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModelScreen;
