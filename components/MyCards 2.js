import * as React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MyCards = () => {
  return (
    <TextInput
      style={styles.myCards}
      placeholder="My Cards"
      placeholderTextColor="#000"
    />
  );
};

const styles = StyleSheet.create({
  myCards: {
    backgroundColor: Color.white,
    width: 414,
    height: 896,
    overflow: "hidden",
    fontWeight: "500",
    fontFamily: FontFamily.paragraph1,
    fontSize: FontSize.size_lg,
  },
});

export default MyCards;
