import React from "react";
import { StyleSheet, View,Text,TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TopBar(props) {
  return (
    <TouchableWithoutFeedback onPress={props.goBack}>
      <View style={styles.topBar}>
        <Ionicons
          style={{
            marginVertical: 16,
            marginLeft: 5
          }}
          name="ios-arrow-back"
          size={24}
          color="#a697ce"
        />
        <Text
          style={{
            fontSize: 24,
            marginHorizontal: 5,
            marginVertical: 16,
            justifyContent: "center",
            color: "#a697ce"
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
    topBar: {
        height: 60,
        backgroundColor: "#18191a",
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        zIndex: 1
      }
});
export default TopBar;
