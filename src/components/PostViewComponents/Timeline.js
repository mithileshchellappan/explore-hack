import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import { useNavigation } from "@react-navigation/native";

function Example() {
  const data ;

  const navigation = useNavigation();
  

  const [selected, setSelected] = React.useState(null);

  const onEventPress = (data) => {
    navigation.navigate("LessonView", {data:data});

  };

  return (
    <View style={styles.container}>
      <Timeline
        style={styles.list}
        data={data}
        circleSize={30}
        circleColor="rgba(0,0,0,0)"
        titleStyle={{ color: "white", fontWeight: "bold" }}
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{ minWidth: 52 }}
        timeStyle={{
          textAlign: "center",
          backgroundColor: "#ff9797",
          color: "white",
          padding: 5,
          borderRadius: 13
        }}
        descriptionStyle={{ color: "grey", fontWeight: "200" }}
        options={{
          style: { paddingTop: 5 }
        }}
        innerCircle={"dot"}
        onEventPress={onEventPress}
        separator={false}
        detailContainerStyle={{
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#39393f",
          borderRadius: 10
        }}
        columnFormat="two-column"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //  paddingTop:65,
    backgroundColor: "black"
  },
  list: {
    flex: 1
    //  marginTop:20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  descriptionContainer: {
    flexDirection: "row",
    paddingRight: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: "gray"
  }
});

export default Example;
