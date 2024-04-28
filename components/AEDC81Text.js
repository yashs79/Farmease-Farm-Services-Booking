import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AEDC81Text = () => {
  return <Text style={styles.aedc81}>AEDC81</Text>;
};

const styles = StyleSheet.create({
  aedc81: {
    fontSize: FontSize.paragraph1_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
  },
});

export default AEDC81Text;
