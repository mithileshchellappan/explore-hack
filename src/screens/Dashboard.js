import React,{useState} from "react";
import { FlatList, ScrollView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import Carousel from "react-native-snap-carousel";
import BigCard from "../components/DashboardComponents/BigCard";
import Levels from "../components/PostViewComponents/Levels";
import { SectionGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

function Dashboard(props) {
  
  const navigation = useNavigation()
  

  return (
    <View style={styles.container}>
      <StatusBar />
      <UserTopBar />
      <TextInput
        placeholder="🔍   Search"
        style={styles.textInput}
        placeholderTextColor="#c4c6c6"
      />
      <Text style={styles.infoText}>New Guides for you</Text>

      
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  titleBar: {
    width: "100%",
    // backgroundColor: "#1a1a1b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  infoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginLeft: 15,
    margin: 5
  },
  textInput: {
    height: 60,
    borderRadius: 13,
    borderWidth: 0.5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
    backgroundColor: "#16181d",
    fontSize: 23,
    color: "white"
  }
});

const UserTopBar = () => (
  <View style={styles.titleBar}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 13,
        marginRight: 6
      }}
    >
      <Text style={{ fontSize: 50 }}>🏡</Text>
      <View style={{}}>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "600",
            justifyContent: "center"
          }}
        >
          Welcome back,
        </Text>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Mithilesh
        </Text>
      </View>
    </View>
    <Image
      uri="https://bit.ly/3BBsOWv"
      style={{
        width: 66,
        height: 66,
        borderRadius: 22,
        marginLeft: 10,
        margin: 10
      }}
    />
  </View>
);

export default Dashboard;

const BigCardData = [
  {
    tags: ["react-native", "react", "animation"],
    subject: "React Native",
    author: "notagodzilla",
    upvote: "70",
    title: "React Native Animations",
    color: "#8ac185"
  },
  {
    tags: ["swift", "appls"],
    subject: "Swift",
    author: "godzipro",
    upvote: "120",
    title: "Advanced Swift",
    color: "#ffabc8"
  },
  {
    tags: ["python", "ml"],
    subject: "Python",
    author: "goofy",
    upvote: "120",
    title: "Machine Learning in Python",
    color: "#fed47e"
  }
];
