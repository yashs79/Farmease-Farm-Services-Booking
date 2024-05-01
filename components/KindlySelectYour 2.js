import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const KindlySelectYour = () => {
  return (
    <Text style={styles.kindlySelectYour}>
      Kindly select your preferred coffee type
    </Text>
  );
};

const styles = StyleSheet.create({
  kindlySelectYour: {
    fontSize: FontSize.smallBodyTextLight12_size,
    fontFamily: FontFamily.gilroy,
    color: Color.colorDimgray_200,
    textAlign: "left",
  },
});

export default KindlySelectYour;
