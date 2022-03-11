import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-rn";
import { collection, doc, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/AuthProvider";
import { FlatList } from "react-native";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const [Matches, setMatches] = useState([]);
  const { user } = useAuth();
  //   useEffect(() => {
  //     onSnapshot(
  //       query(
  //         collection(db, "matches"),
  //         where("usersMatched", "array-contains", user.uid)
  //       ),
  //       (snapshot) =>
  //         setMatches(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             ...doc.data(),
  //           }))
  //         )
  //     );
  //   }, [user]);

  // add some dummy data before working on the DB
  const myMatch = [
    {
      age: 29,
      displayName: "Tonny Ntambaazi",
      id: "ESBPlRTszpTfeH9Cjuw78GF0JVs1",
      job: "Entrepreneur",
      photoURL:
        "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.18172-8/18922856_1383770315010079_5829999572516582714_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CRq_3D3FndcAX8WgMW3&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_s1tNAmvIiqzv2NWqyTzPNKwe1bCYrNtGSwAbhrdajQw&oe=624B912A",
      timeStamp: "Mar 5, 2022",
    },
    {
      age: 25,
      displayName: "Anny Mask",
      id: "ESufhRTszpThdvfkVgBgdgd0JVs1",
      job: "Enterpreneur",
      photoURL:
        "https://images.assetsdelivery.com/compings_v2/puhhha/puhhha1608/puhhha160800218.jpg",
      timeStamp: "Mar 5, 2022",
    },
  ];
  return myMatch.length > 0 ? (
    <FlatList
      style={tw("h-full")}
      data={myMatch}
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
