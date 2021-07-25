import React from "react";
import { StyleSheet, View, Text } from "react-native";
import EmbedComponent from "./EmbedComponent";
import SmallEmbedContainer from "./SmallEmbedContainer";
function ChapterContainerComp(props) {
  return (
    <View style={styles.chapterCont}>
      <Text style={styles.chapterTitle}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <EmbedComponent link={props.link} />
      {props.links.map((link, index) => (<SmallEmbedContainer key={index} link={link} />))}

    </View>
  );
}
const styles = StyleSheet.create({
  chapterCont: {
    backgroundColor: "#282a36",
    // justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 4,
    top: 60,
    borderRadius: 7,
    flex: 1,
    alignSelf: "flex-start",
    // height:350,
  },
  chapterTitle: {
    fontSize: 22,
    margin: 3,
    marginTop: 8,
    marginLeft: 10,
    color: "#4adf72"
  },
  description: {
    fontSize: 14,
    color: "white",
    margin: 10,
    flexWrap: "wrap"
  }
});
export default ChapterContainerComp;
