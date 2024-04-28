import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeIconAndText = () => {
  return (
    <View style={styles.homeIconAndText}>
      <Image
        style={styles.lomaboldhomeIcon}
        resizeMode="cover"
        source={require("../assets/lomaboldhome.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lomaboldhomeIcon: {
    height: "60%",
    width: "72.73%",
    top: "0%",
    right: "12.12%",
    bottom: "40%",
    left: "15.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  home: {
    top: "60%",
    left: "0%",
    fontSize: FontSize.smallBodyTextLight12_size,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  homeIconAndText: {
    width: 33,
    height: 40,
  },
});

export default HomeIconAndText;
