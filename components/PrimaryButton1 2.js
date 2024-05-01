import * as React from "react";
import { Pressable, Image, StyleSheet, Text } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const PrimaryButton1 = () => {
  return (
    <Pressable style={styles.primarybutton}>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Text style={styles.title}>Submit</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 3,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  title: {
    top: "30.07%",
    left: "42.55%",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  primarybutton: {
    width: 259,
    height: 41,
  },
});

export default PrimaryButton1;
