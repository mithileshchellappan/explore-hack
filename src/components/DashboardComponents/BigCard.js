import React from "react";
import { StyleSheet, View,Text, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { useNavigation } from "@react-navigation/native";

import TagChip from "../PostViewComponents/TagChip";

function BigCard(props) {
  const tags = ["react-native", "react", "animation"];
    console.log(props)

    const navigation = useNavigation();

  return (
   <TouchableWithoutFeedback onPress={()=>{navigation.navigate('ChapterNavigation',{screen:'PostViewScreen',params:{data:props.item.item}})}}>
        <View
      style={{
        backgroundColor: props.item.item.color,
        marginVertical: 8,
        borderRadius: 10,
        alignSelf:'center',
        width:370,
        marginHorizontal:20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 4
        }}
      >
        <View>
          <Text style={{ fontSize: 13, marginLeft: 7, marginTop: 7 }}>
            {props.item.item.subject}
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 7,
              marginVertical: 2,
              fontWeight: "bold"
            }}
          >
            {props.item.item.title}
          </Text>
          <Text style={{ fontSize: 16, marginLeft: 7, marginTop: 2 }}>
            by @{props.item.item.author}
          </Text>
        </View>
        <Image uri="https://bit.ly/3y2KZlM" style={{ height: 50, width: 50 }} />
      </View>
      <View style={{ flexDirection: "row", marginLeft: 4 }}>
        {props.item.item.tags.map((tag, i) => (
          <TagChip key={i} subject={tag} />
        ))}
      </View>
      <Text
        style={{
          fontSize: 16,
          margin: 10,
          fontWeight: "bold",
          color: "#5e7661"
        }}
      >
        {props.item.item.upvote} upvotes
      </Text>
    </View>
   </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {}
});
export default BigCard;
