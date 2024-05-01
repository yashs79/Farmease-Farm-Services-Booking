import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CC51DText = () => {
  return <Text style={styles.cc51d}>6CC51D</Text>;
};

const styles = StyleSheet.create({
  cc51d: {
    fontSize: FontSize.paragraph1_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
  },
});

export default CC51DText;
