import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";
import useAuth from "../hooks/AuthProvider";
import { useRoute } from "@react-navigation/native";
import tw from "tailwind-rn";

const MessageScreen = () => {
  const { params } = useRoute();
  const { matchDetails } = params;
  const [input, setInput] = useState("");
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    console.log("This is the message");
  };

  return (
    <SafeAreaView style={tw("flex-1")}>
      {/* <Header title={getMatchedUserInfo(matchDetails.users, user.uid)} callEnabled /> */}

      <Header title={matchDetails.displayName} callEnabled />

      <KeyboardAvoidingView
        bahavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw("flex-1")}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            style={tw("pl-4")}
            keyExtractor={(item) => item.id}
          />
        </TouchableWithoutFeedback>
        <View
          style={tw(
            "flex-row justify-between bg-white items-center border-t border-gray-200 px-5 py-2"
          )}
        >
          <TextInput
            style={tw("h-10 text-lg")}
            placeholder="Send Message..."
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            value={input}
          />
          <Button onPress={sendMessage} title="Send" color="#FF5864" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessageScreen;
