import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Divider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

import { ListItem } from "react-native-elements/dist/list/ListItem";
import TagChip from "./TagChip";

function Header(props) {

  const navigation = useNavigation();
  console.log('params',props)

  return (
    <View style={styles.header}>
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#1a1a1b"
          }}
        >
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={navigation.goBack} style={{alignSelf:'center',flexDirection:'row'}}>
          <Ionicons
          style={{
            marginVertical: 16,
            marginLeft: 5,
            alignSelf:'center'
          }}
          name="ios-arrow-back"
          size={24}
          color="#a697ce"
        />
        <Image
              style={{ height: 60, width: 60, borderRadius: 30, margin: 10 }}
              source={{
                uri: props.imageUri
              }}
            />
          </TouchableOpacity>
            

            <View style={{ marginTop: 20 }}>
              <Text style={styles.titleText}>{props.title}</Text>
              <Text style={styles.authorText}>by @{props.author}</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 5, paddingBottom: 5 }}>
          <Divider
            width={1}
            color="rgba(0,0,0,0.5)"
            style={{ paddingTop: 7 }}
          />
          <Text style={styles.descText}>{props.desc}</Text>
          <FlatList
            nestedScrollEnabled
            horizontal
            data={props.subject}
            renderItem={({ item, index }) => (
              <TagChip subject={item} key={index} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  authorText: {
    fontSize: 16,
    color: "#a697ce",
    fontWeight: "600"
  },
  descText: {
    color: "white",
    padding: 5,
    fontSize: 14,
    flex: 1,
    flexShrink: 1
  },
  header: {
    width: "100%",
    flexDirection: "column"
    // height: 360
  },
  headlineDesc: {
    fontSize: 20,
    color: "white"
  },
  titleText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  tagCont: {}
});
export default Header;
