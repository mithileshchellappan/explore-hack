import { Foundation, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import Navigation from ".";
import NewPostScreen from "../screens/NewPostScreen";

const TabNavigation = createBottomTabNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = "black";
export default function TabNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <TabNavigation.Navigator
        tabBarOptions={{
          activeBackgroundColor: "black",
          activeTintColor: "white",
          inactiveBackgroundColor: "black"
        }}
      >
        <TabNavigation.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => (
              <Foundation name="home" size={30} color={color} />
            ),
            tabBarLabel: () => null
          }}
          component={Navigation}
        />
        <TabNavigation.Screen
          name="New Post"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="plus-square" size={30} color={color} />
            ),
            tabBarLabel: () => null
          }}
          component={NewPostScreen}
        />
        <TabNavigation.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={30} color={color} />
            ),
            tabBarLabel: () => null
          }}
          component={NewPostScreen}
        />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
}
