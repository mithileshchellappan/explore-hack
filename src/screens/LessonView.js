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
function LessonView(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const { title, description } = route.params.data;
  const desc =
    "Defaults to false. If true, the header will not have a background unless you explicitly provide it with headerBackground. The header will also float over the screen so that it overlaps the content underneath. This is useful if you want to render a semi-transparent  header or a blurred background. Note that if you don't want your content to appear under the header, you need to manually add a top margin to your content. React Navigation won't do it automatically.";
  const desc2 =
    "Linking gives you a general interface to interact with both incoming and outgoing app linksvery Link (URL) has a URL Scheme, some websites are prefixed with https:// or http:// and the http is the URL Scheme. Let's call it scheme for short. In addition to https, you're likely also familiar with the mailto scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about built-in URL schemes below.";
  const chapters = [
    {
      title: "Components at a glance",
      description: desc,
      link: "https://medium.com/async-la/custom-transitions-in-react-navigation-2f759408a053"
    },
    {
      title: "Components at a glance",
      description: desc2,
      link: "https://medium.com/async-la/a-stately-guide-to-react-navigation-with-redux-1f90c872f96e"
    },
    {
      title: "React Navigation with Redux",
      description: desc2,
      link: "https://reactnative.dev/docs/linking"
    },
    {
      title: "Components at a glance",
      description: desc2,
      link: "https://reactnative.dev/docs/linking"
    },

    {
      title: "Components at a glance",
      description: desc2,
      link: "https://reactnative.dev/docs/linking"
    }
  ];

  const links = [
    "https://medium.com/@margarita.danshina/react-native-expo-camera-and-firebase-storage-upload-837a2a56e669",
    "https://blog.expo.dev/introducing-expo-dev-a70818bf336e",
    "https://www.youtube.com/watch?v=0-S5a0eXPoc&t=4197s"
  ];

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
