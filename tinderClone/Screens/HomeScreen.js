import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/AuthProvider";
import tw from "tailwind-rn";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();
  const swipeRef = useRef(null);
  const [profiles, setProfiles] = useState([]);

  useLayoutEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (!snapshot.exists()) {
          navigation.navigate("Model");
        }
      }),
    []
  );

  useEffect(() => {
    let unsub;
    const fetchCards = async () => {
      unsub = onSnapshot(collection(db, "users"), (snapshots) => {
        setProfiles(
          snapshots.docs
            .filter((doc) => doc.id !== user.uid)
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
        );
      });
    };
    fetchCards();
  }, []);

  // const swipeLeft = async () => {};
  const DATA = [
    {
      firstName: "Isaac",
      lastName: "Tomson",
      occupation: "Software Engneer",
      photoURL:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
      age: 27,
      id: 1,
    },
    {
      firstName: "Anny",
      lastName: "Mask",
      occupation: "Enterpreneur",
      photoURL:
        "https://images.assetsdelivery.com/compings_v2/puhhha/puhhha1608/puhhha160800218.jpg",
      age: 25,
      id: 2,
    },
    {
      firstName: "Phillips",
      lastName: "Laptom",
      occupation: "Designer",
      photoURL:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      age: 39,
      id: 3,
    },
    {
      firstName: "Laura",
      lastName: "Gigi",
      occupation: "Architect",
      photoURL:
        "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
      age: 31,
      id: 4,
    },
    {
      firstName: "Tommy",
      lastName: "Stones",
      occupation: "Accountant",
      photoURL:
        "https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      age: 31,
      id: 5,
    },
    {
      firstName: "Christiano",
      lastName: "Ronaldo",
      occupation: "Athelete",
      photoURL: "https://data.whicdn.com/images/308312645/original.jpg",
      age: 37,
      id: 5,
    },
  ];

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
        <TouchableOpacity onPress={() => navigation.navigate("Model")}>
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
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={profiles}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          // onSwipedLeft={(cardIndex) => {
          //   if (!profiles[cardIndex]) return;
          //   const userSwiped = profiles[cardIndex];
          //   console.log(`You swiped PASS on ${userSwiped.displayName}`);
          //   setDoc(
          //     doc(db, "users", user.uid, "passes", userSwiped.id),
          //     userSwipped
          //   );
          // }}
          // onSwipedRight={(cardIndex) => {
          //   console.log("Swipped Right");
          // }}
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) =>
            card ? (
              <View
                key={card.id}
                style={tw("relative bg-white h-3/4 rounded-xl")}
              >
                <Image
                  style={tw("absolute top-0 h-full w-full rounded-xl")}
                  source={{ uri: card.photoURL }}
                />
                <View
                  style={[
                    tw(
                      "absolute bottom-0 bg-white flex-row w-full justify-between items-center h-20 px-6 py-2 rounded-b-xl"
                    ),
                    styles.cardStyles,
                  ]}
                >
                  <View>
                    <Text style={tw("text-xl font-bold")}>
                      {card.firstName} {card.lastName}
                    </Text>
                    <Text>{card.occupation}</Text>
                  </View>
                  <Text style={tw("text-2xl font-bold")}>{card.age}</Text>
                </View>
              </View>
            ) : (
              <View
                style={[
                  tw(
                    "relative bg-white h-3/4 rounded-xl justify-center items-center"
                  ),
                  styles.cardShadow,
                ]}
              >
                <Text style={tw("font-bold pb-5")}>No more profiles</Text>
                <Image
                  style={tw("h-20 w-full")}
                  height={100}
                  width={100}
                  source={{ uri: "https://links.papareact.com/6gb" }}
                />
              </View>
            )
          }
        />
      </View>
      <View style={tw("flex flex-row  justify-center")}>
        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeLeft();
          }}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-red-200 m-5"
          )}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swipeRef.current.swipeRight();
          }}
          style={tw(
            "items-center justify-center rounded-full w-16 h-16 bg-green-200 m-5"
          )}
        >
          <Entypo name="heart" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardStyles: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardShadow: {
    flex: 1,
  },
});
export default HomeScreen;
