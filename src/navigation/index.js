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
import Dashboard from "../screens/Dashboard";
import PostView from "../screens/PostView";
import ChapterNavigation from "./ChapterNavigation";

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
  ...TransitionPresets.SlideFromRightIOS 
};

function RootNavigator(props) {
  console.log("root nav");
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({
          index,
          current,
          next,
          layouts: { screen }
        }) => {
          const translateX = current.progress.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [screen.width, 0, 0]
          });

          const opacity = next?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [1, 0, 0]
          });

          return { cardStyle: { opacity, transform: [{ translateX }] } };
        }
      }}
    >
     
    </Stack.Navigator>
  );
}

const navTheme = DefaultTheme;
navTheme.colors.background = "black";

export default function Navigation() {
  return (
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
