import { View, Text } from "react-native";
import React from "react";

const ReceiverMessage = ({ message }) => {
  return (
    <View
      style={[
        tw("bg-red-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2"),
        { aliginSelf: "flex-start", marginLeft: "auto" },
      ]}
    >
      <Image
        style={tw("h-12 w-12 rounded-full absolute top-0 left-14")}
        source={{ uri: message.photoURL }}
      />
      <Text style={tw("text-white")}>{message.message}</Text>
    </View>
  );
};

export default ReceiverMessage;
