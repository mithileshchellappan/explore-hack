import React from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

function Levels() {
  const levels;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#1a1a1b",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 6,
        borderRadius: 5
      }}
      onPress={() => {
        navigation.navigate("LessonView", { item: levels[0] });
      }}
    >
      <View style={{ width: 0, flexFrow: 1, flex: 1, padding: 2 }}>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            marginTop: 1,
            marginLeft: 10,
            fontSize: 19,
            fontWeight: "bold"
          }}
        >
          {levels[0].title}
        </Text>
        <Text
          style={{
            color: "#b0b1b2",
            textAlign: "left",
            marginTop: 1,
            marginLeft: 10,
            fontSize: 14,
            width: "95%",
            alignSelf: "flex-start",
            flex: 1,
            flexShrink: 1,
            paddingBottom: 2
          }}
        >
          {levels[0].desc}
        </Text>
      </View>
      <Icon
        style={{ marginRight: 10 }}
        name="arrow-right"
        size={20}
        color="white"
        type="entypo"
      />
    </TouchableOpacity>
  );
}
export default Levels;
