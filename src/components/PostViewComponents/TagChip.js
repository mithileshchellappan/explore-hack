import React from "react";
import { StyleSheet, View,Text } from "react-native";

function TagChip(props) {
  console.log(props)
  return (
    <View style={styles.tagCont}>
      <Text style={{ fontSize: 14, margin: 5, color: "#66afd2",fontWeight:'500' }}>
        {props.subject}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  tagCont: {
    //   elevation: 1,
    marginTop: 5,
    marginRight:1.5,
    backgroundColor: "#0b1e2b",
    borderRadius: 10,
    alignSelf: "flex-start",
}
});
export default TagChip;
