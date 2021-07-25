import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,Linking } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

function SmallEmbedContainer(props) {
  const [linkData, setLinkData] = React.useState();

  getLinkPreview(props.link).then((data) => {
    // console.log(data);
    setLinkData(data);
  });

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
      <View style={styles.container}>
        <Image
          style={{ height: 35, width: 35, borderRadius: 5 }}
          uri={linkData?.favicons[0]}
        />
        <Text
          style={{
            fontSize: 13,
            color: "white",
            marginLeft: 10,
            alignSelf: "center"
          }}
        >
          {linkData?.title.substring(0, 60)}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "grey",
            alignSelf: "center",
            textAlign: "center",
            marginLeft: 8
          }}
        >
          {linkData?.url.replace(/.+\/\/|www.|\..+/g, "")}{".com"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242526",
    flexDirection: "row",
    borderRadius: 5,
    marginHorizontal:5,
    marginVertical:1,
    flex:0,
    width:'97%',
    // width:'100%'
  }
});
export default SmallEmbedContainer;
