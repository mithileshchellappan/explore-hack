import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Tags from "react-native-tags";
import TagChip from "../PostViewComponents/TagChip";

function GuideIntroComponent(props) {
  const [tags, setTags] = React.useState([]);

  return (
    <View style={styles.setTitleContainer}>
      <Text
        style={{
          color: "white",
          fontSize: 23,
          fontWeight: "700",
          marginLeft: 10,
          marginTop: 5
        }}
      >
        Guide Intro
      </Text>
      <TextInput
        placeholder=" Set Title"
        style={styles.titleTextInput}
        placeholderTextColor="#c4c6c6"
      />
      <TextInput
        placeholder=" Set Description"
        style={styles.descTextInput}
        placeholderTextColor="#c4c6c6"
        numberOfLines={10}
        multiline={true}
      />
       <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "700",
          marginLeft: 10,
          
        }}
      >
        Tags:
      </Text>
      <Tags
        textInputProps={{
          placeholder: "Add your tags here",

        }}
        initialTags={tags}
        onChangeTags={(tag) => console.log(tag)}
        onTagPress={(index, tagLabel, event, deleted) =>
          console.log(
            index,
            tagLabel,
            event,
            deleted ? "deleted" : "not deleted"
          )
        }
        containerStyle={{ justifyContent: "center" }}
        inputStyle={{
          backgroundColor: "#36393f",
          fontSize: 16,
          color: "white",
          borderRadius: 10
        }}
        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
          <TagChip key={index} subject={tag} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  setTitleContainer: {
    // height: 200,
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
export default GuideIntroComponent;
