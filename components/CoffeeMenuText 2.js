import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const CoffeeMenuText = () => {
  return <Text style={styles.coffeeMenu}>Coffee Menu</Text>;
};

const styles = StyleSheet.create({
  coffeeMenu: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.gilroy,
    color: "#9c4400",
    textAlign: "left",
    width: 145,
    height: 24,
  },
});

export default CoffeeMenuText;
