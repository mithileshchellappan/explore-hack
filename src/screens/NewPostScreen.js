import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import GuideIntroComponent from "../components/NewPostScreensComponents/GuideIntroComponent";
import AddLessonComponent from "../components/NewPostScreensComponents/AddLessonComponent";

function NewPostScreen(props) {
  const [lesson, setLesson] = React.useState([<AddLessonComponent key={0} />]);

  const addNewLesson = () => {
    setLesson([...lesson, <AddLessonComponent key={lesson.length} />]);
  };

  console.log(lesson.length);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text
            style={{
              color: "white",
              fontSize: 26,
              alignSelf: "center",
              fontWeight: "700"
            }}
          >
            New Post
          </Text>
        </View>
        <GuideIntroComponent />

        {lesson.map((lesson2, index) => lesson2)}

        <TouchableOpacity onPress={addNewLesson}>
          <View style={styles.addLessonComp}>
            <MaterialIcons name="add-box" size={20} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "700",
                marginLeft: 10
              }}
            >
              Add Lesson
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  addLessonComp: {
    height: 28,
    backgroundColor: "#16181d",
    marginVertical: 5,
    borderRadius: 5,
    marginHorizontal: 13,
    flexDirection: "row",
    alignContent: "center"
  },
  topBar: {
    height: 45,
    backgroundColor: "#16181d",
    justifyContent: "center",
    marginBottom: 10
  },
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
    fontSize: 23,
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
export default NewPostScreen;
