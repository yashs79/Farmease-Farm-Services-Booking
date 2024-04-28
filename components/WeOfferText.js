import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const WeOfferText = () => {
  return <Text style={styles.weOffer}>{`We offer `}</Text>;
};

const styles = StyleSheet.create({
  weOffer: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
});

export default WeOfferText;
