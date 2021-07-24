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

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

function Dashboard(props) {
  const [items, setitems] = useState([
    {
      name: "Flutter",
      url: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"
    },
    {
      name: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    },
    {
      name: "MongoDB",
      url: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
    },
    {
      name: "Firebase",
      url: "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png?compress=1&resize=400x300"
    },
    {
      name: "Python",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
    },
    {
      name: "Google Cloud",
      url: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png"
    },
    {
      name: "GIT",
      url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
    },
    {
      name: "Kotlin",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1024px-Kotlin_Icon.png"
    },
    {
      name: "Typescript",
      url: "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"
    },
    {
      name: "Angular",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png"
    },
    {
      name: "Swift",
      url: "https://developer.apple.com/swift/images/swift-og.png"
    },
    {
      name: "Vue",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png"
    }
  ]);

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

export default Dashboard;

const BigCardData = [
  {
    tags: ["react-native", "react", "animation"],
    subject: "React Native",
    author: "notagodzilla",
    upvote: "70",
    title: "React Native Animations",
    color: "#8ac185",
    imageUri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
  },
  {
    tags: ["swift", "apple"],
    subject: "Swift",
    author: "godzipro",
    upvote: "120",
    title: "Advanced Swift",
    color: "#fed47e",
    imageUri: "https://developer.apple.com/swift/images/swift-og.png"
  },
  {
    tags: ["python", "ml"],
    subject: "Python",
    author: "goofy",
    upvote: "160",
    title: "Machine Learning in Python",
    color: "#ffabc8",
    imageUri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
  }
];
