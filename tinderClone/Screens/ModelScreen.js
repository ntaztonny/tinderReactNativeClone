import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-rn";
import useAuth from "../hooks/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const ModelScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [image, setimage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const incompleteForm = !image || !job || !age;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Update your profile",
      headerStyle: {
        backgroundColor: "#FF5864",
      },
      headerTitleStyle: { color: "white" },
    });
  }, []);

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((e) => alert(e.message));
  };

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
        value={image}
        onChangeText={(text) => {
          setimage(text);
        }}
        placeholder="enter profile pic URL"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={(text) => {
          setJob(text);
        }}
        placeholder="enter your occupation"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => {
          setAge(text);
        }}
        placeholder="enter your age"
        keyboardType="numeric"
        maxLength={2}
      />

      <TouchableOpacity
        disabled={incompleteForm}
        style={[
          tw("w-64 p-3 rounded-xl absolute bottom-10 "),
          incompleteForm ? tw("bg-gray-400") : tw("bg-red-400"),
        ]}
        onPress={updateUserProfile}
      >
        <Text style={tw("text-center text-white text-xl")}>Update profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModelScreen;
