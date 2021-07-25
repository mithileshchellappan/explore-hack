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
import Login from "../screens/Login"
import TabNavigator from './TabNavigation'

const Stack = createStackNavigator();



function LoginNavigation(props) {
  console.log("root nav");
  return (
    <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      mode="modal"
      initialRouteName="Login"
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
      <Stack.Screen name="TabNavigator" component={TabNavigator}/>
      <Stack.Screen name="Login" component={Login}/>

      {/* <Stack.Screen name="PostView" component={PostView} options={{}} />
      <Stack.Screen name="LessonView" component={LessonView} /> */}
    </Stack.Navigator>
    </NavigationContainer>

  );
}

const navTheme = DefaultTheme;
navTheme.colors.background = "black";

export default function Navigation() {
  return (
      <LoginNavigation />
  );
}
