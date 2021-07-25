import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity
} from "react-native";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
import { Image } from "react-native-expo-image-cache";
import { useNavigation } from "@react-navigation/native";

function EmbedComponent(props) {
  const [linkData, setLinkData] = React.useState();

  getLinkPreview(props.link).then((data) => {
    setLinkData(data);
  });
  const navigation = useNavigation();

  const handleLink = () => {
    Linking.canOpenURL(props.link).then((supported) => {
      if (supported) {
        Linking.openURL(props.link);
      } else {
        console.log("Don't know how to open URI: " + props.link);
      }
    });
    console.log("clciked");

  };

  return (
    <TouchableOpacity onPress={handleLink}>
      <View style={styles.linkPreviewCont}>
        <Image
          style={{ flex:1, margin: 10, borderRadius: 5 }}
          source={{ uri: linkData?.images[0] }}
          uri={linkData?.images[0]}
        />
        <View style={{ flex: 4 }}>
          <Text style={{color:'white',marginLeft:4,fontWeight:'bold',marginTop:3}}>{linkData?.title}</Text>
          {linkData?.description?<Text style={styles.linkDescription}>{linkData?.description}</Text>:null}
          <View
            style={{
              flexDirection: "row",
              marginBottom: 7,
              alignItems: "center"
            }}
          >
            <Image
              uri={linkData?.favicons[0]}
              style={{ height: 15, width: 15 }}
              tint="dark"
            />
            <Text style={{ color: "#c4c3c9", marginBottom: 3, marginLeft: 5 }}>
              {linkData?.url.replace(/.+\/\/|www.|\..+/g, "")}{" "}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  linkPreviewCont: {
    backgroundColor: "#242526",
    margin: 10,
    marginTop: 6,
    borderRadius: 10,
    flexDirection: "row",
    flex: 0
  },
  linkDescription: {
    color: "white",
    fontWeight: "600",
    padding: 5,
    paddingBottom: 0,
    flex: 1,
    flexShrink: 1,
    opacity:0.8
  }
});



export default EmbedComponent;
