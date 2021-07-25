import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  SafeAreaView
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import TopBar from "../components/LessonViewComponents/TopBar";
import { URL } from "url";
import EmbedComponent from "../components/LessonViewComponents/EmbedComponent";
import ChapterContainerComp from "../components/LessonViewComponents/ChapterContainerComp";
import firestore from '@react-native-firebase/firestore';


function LessonView(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const { title, description } = route.params.data;
const chapters = firestore().collection('Courses').doc(title);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TopBar goBack={navigation.goBack} title={title} />
      {/* <FlatList
      contentContainerStyle={{ marginBottom: 20 }}
        style={{ flexGrow: 1 }}
        data={chapters}
        renderItem={({ item,index }) => (

        )}
      /> */}

      <ScrollView>
        {chapters.map((item, index) => (
          <ChapterContainerComp
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            links={links}
          />
        ))}
        <View style={{ height: 30, color: "red" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%"
  },

  linkPreviewCont: {
    backgroundColor: "#242526",
    margin: 10,
    marginTop: 6,
    borderRadius: 10,
    flexDirection: "row"
  },
  linkDescription: {
    color: "white",
    fontWeight: "600",
    padding: 5,
    paddingBottom: 0,
    flex: 1,
    flexShrink: 1
  }
});
export default LessonView;