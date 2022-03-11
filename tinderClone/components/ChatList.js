import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-rn";
import { collection, doc, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/AuthProvider";
import { FlatList } from "react-native-web";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const [Matches, setMatches] = useStateate([]);
  const { user } = useAuth();
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "matches"),
        where("usersMatched", "array-contains", user.uid)
      ),
      (snapshot) =>
        setMatches(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
    );
  }, [user]);
  return Matches.length > 0 ? (
    <FlatList
      style={tw("h-full")}
      data={Matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  ) : (
    <View style={tw("p-5")}>
      <Text style={tw("text-center text-lg")}>
        You currently have no matches
      </Text>
    </View>
  );
};

export default ChatList;
