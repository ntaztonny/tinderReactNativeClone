import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-rn";
import { collection, doc, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";

const ChatList = () => {
  const [Matches, setMatches] = useStateate([]);
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "matches"),
        where("usersMatches", "array-contains", user.uid)
      ),
      (snapshot) =>
        setMatches(
          snapshots.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
    );
  }, []);
  return (
    <View style={tw("flex-1")}>
      <Text>ChatList</Text>
    </View>
  );
};

export default ChatList;
