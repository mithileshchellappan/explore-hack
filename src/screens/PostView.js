import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  Image,
  SafeAreaView
} from "react-native";
import { useRoute } from "@react-navigation/native";

import Header from "../components/PostViewComponents/Header";
import Levels from "../components/PostViewComponents/Levels";
import Example from "../components/PostViewComponents/Timeline";

const desc

function PostView(props, navigation) {
  const { params } = props.route;
  console.log(params)

  return (
    <View style={{ backgroundColor: "black" }}>
      <ScrollView style={styles.container}>
        <StatusBar />
        <View>
          <Header
            title={params.data.title}
            // title="Wow"
            imageUri="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=8"
            desc={desc}
            subject={params.data.tags}
            author={params.data.author}
            // subject={["rect"]}
            color={params.data.color}
          />
        </View>

        <View
          style={{
            height: 1,
            width: "100%",
            paddingHorizontal: 20,
            backgroundColor: "black"
          }}
        ></View>
        <Example />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});
export default PostView;
