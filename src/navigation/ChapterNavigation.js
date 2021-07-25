import React from "react";
import LessonView from "../screens/LessonView";
import { View, Text, Button } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import {useRoute} from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";
import PostView from "../screens/PostView";

const Stack = createStackNavigator();

function Home({ navigation }) {
  console.log("home");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function Profile({ navigation }) {
  console.log("prof");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS // This is where the transition happens
};

function RootNavigator(props) {
  console.log("root nav");
  console.log('terminal')
  const route = useRoute();
  console.log('terminal',route.params)
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName="PostViewScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="PostViewScreen" component={PostView} options={{}} />
      <Stack.Screen name="LessonView" component={LessonView} />
    </Stack.Navigator>
  );
}

const navTheme = DefaultTheme;
navTheme.colors.background = "black";

export default function ChapterNavigation() {
  return <RootNavigator />;
}
