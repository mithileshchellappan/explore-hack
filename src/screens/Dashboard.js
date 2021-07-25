import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import Carousel from "react-native-snap-carousel";
import BigCard from "../components/DashboardComponents/BigCard";
import Levels from "../components/PostViewComponents/Levels";
import { SectionGrid } from "react-native-super-grid";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import firestore from '@react-native-firebase/firestore';
const BigCardData = firestore().collection('Courses');


const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

function Dashboard(props) {
  const [items, setitems] = useState([]);

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

      <Carousel
        data={BigCardData}
        renderItem={(item, index) => <BigCard item={item} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={"stack"}
        layoutCardOffset={20}
        firstItem={1}
      />

      <Text style={styles.infoText}>Start Learning</Text>
      <SectionGrid
        itemDimension={90}
        // staticDimension={300}
        // fixed
        // spacing={20}
        sections={[
          {
            title: "Select a number to bet",
            data: items
          }
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
          <View
            style={{
              backgroundColor: "#1a1a1b",
              borderRadius: 20,
              // marginVertical: 20,
              width: 100,
              height: 110,
              alignItems: "center"
            }}
          >
            <Image
              uri={item.url}
              style={{ height: 60, width: 60, margin: 10 }}
            />
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
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
  },
  newPostCont: {
    backgroundColor: "#242526",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 20
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
