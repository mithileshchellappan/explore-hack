import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";
import Animated from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { RunTiming } from "../components/Login/Animations";
import Svg, { Image, Circle, ClipPath } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";


const { height, width } = Dimensions.get("window");

const {
  Value,
  event,
  block,
  eq,
  cond,
  set,
  Clock,
  interpolateNode,
  Extrapolate,
  concat
} = Animated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "black"
  },
  signInButton: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    elevation: 1
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginVertical: 5,
    marginHorizontal: 20,
    paddingLeft: 10,
    borderColor: "white",
    backgroundColor: "#262626",
    color: "white"
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    left: width / 2 - 20,
    elevation: 1
  }
});

const Login = () => {
  const buttonOpacity = new Value(1);
  const onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, RunTiming(new Clock(), 1, 0))
          )
        ])
    }
  ]);

  const onCloseButton = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, RunTiming(new Clock(), 0, 1))
          )
        ])
    }
  ]);

  const buttonY = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const bgY = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 2.8 - 50, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const textInputZIndex = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP
  });

  const textInputY = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: Extrapolate.CLAMP
  });

  const textInputOpacity = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const rotateCross = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP
  });
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...StyleSheet.absoluteFill, transform: [{ translateY: bgY }] }}
      >
        <Svg height={height + 50} width={width}>
          <ClipPath id="clip">
            <Circle r={height + 50} cx={width / 2}></Circle>
          </ClipPath>

          <Image
            href={"https://i.redd.it/uxxg36i2jq741.png"}
            height={height + 50}
            width={width}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg>
      </Animated.View>

      <View style={{ height: height / 2.8, justifyContent: "center" }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <Animated.View
            style={{
              ...styles.signInButton,
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }]
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>SIGN IN</Text>
          </Animated.View>
        </TapGestureHandler>

        <Animated.View
          style={{ transform: [{ translateY: buttonY }] }}
          style={{
            ...styles.signInButton,
            backgroundColor: "#2E71DC",
            opacity: buttonOpacity,
            transform: [{ translateY: buttonY }]
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            SIGN IN WITH FACEBOOK
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            zIndex: textInputZIndex,
            opacity: textInputOpacity,
            transform: [{ translateY: textInputY }],
            height: height / 2.8,
            ...StyleSheet.absoluteFill,
            top: null,
            justifyContent: "center"
          }}
        >
          <TapGestureHandler onHandlerStateChange={onCloseButton}>
            <Animated.View style={styles.closeButton}>
              <Animated.Text
                style={{
                  fontSize: 15,
                  transform: [{ rotate: concat(rotateCross, "deg") }]
                }}
              >
                X
              </Animated.Text>
            </Animated.View>
          </TapGestureHandler>

          <View style={{ backgroundColor: "black", marginBottom: 20 }}>
            <TextInput
              placeholder="EMAIL"
              style={styles.textInput}
              placeholderTextColor="white"
            />

            <TextInput
            secureTextEntry={true}
              placeholder="PASSWORD"
              style={styles.textInput}
              placeholderTextColor="white"
            />
            <Animated.View style={styles.signInButton}>
            {/* navigation.navigate('ChapterNavigation' */}
              <TouchableWithoutFeedback onPress={()=>navigation.navigate('TabNavigator')}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
                </TouchableWithoutFeedback>
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Login;
