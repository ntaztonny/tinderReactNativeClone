import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";
import tw from "tailwind-rn";
import useAuth from "../hooks/AuthProvider";

function ChatRow({ matchDetails }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  //useEffect(()=>{}, [])
  return (
    <TouchableOpacity
      style={[
        tw("flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg"),
        styles.cardshadow,
      ]}
    >
      <Image
        style={tw("rounded-full h-16 w-16 mr-4")}
        //source={{ uri: matchedUserInfo.photoURL }}
        source={{ uri: matchDetails.photoURL }}
      />
      <View>
        <Text style={tw("text-lg font-semibold")}>
          {matchDetails?.diplayName}
        </Text>
        {/* `<Text>{lastMessage}</Text> */}
      </View>
    </TouchableOpacity>
  );
}

export default ChatRow;

const styles = StyleSheet.create({
  cardshadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
