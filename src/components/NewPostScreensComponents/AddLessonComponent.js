import React from "react";
import { StyleSheet, View,Text,TextInput } from "react-native";

function AddLessonComponent(props) {
  return (
    <View style={styles.chapterCont}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "700",
          marginLeft: 10,
          marginTop: 5
        }}
      >
        Add Lesson
      </Text>
      <TextInput
        placeholder=" Set Lesson Title"
        style={styles.titleTextInput}
        placeholderTextColor="#c4c6c6"
      />
      <TextInput
        placeholder=" Set Lesson Description"
        style={styles.descTextInput}
        placeholderTextColor="#c4c6c6"
        numberOfLines={5}
        multiline={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  chapterCont: {
    marginHorizontal: 5,
    backgroundColor: "#16181d",
    marginVertical: 5,
    borderRadius: 10
  },
  
  titleTextInput: {
    height: 40,
    borderRadius: 8,
    borderWidth: 0.5,
    marginTop: 7,
    marginBottom: 3,
    marginHorizontal: 7,
    paddingLeft: 10,
    backgroundColor: "#36393f",
    fontSize: 21,
    color: "white"
  },
  descTextInput: {
    borderRadius: 8,
    borderWidth: 0.5,
    marginTop: 3,
    marginBottom: 6,
    marginHorizontal: 7,
    paddingLeft: 10,
    backgroundColor: "#36393f",
    fontSize: 16,
    color: "white",
    justifyContent: "flex-start",
    textAlign: "auto",
    alignItems: "baseline",
    flexDirection: "row",
    textAlignVertical: "top",
    paddingTop: 7
  }
});
export default AddLessonComponent;
