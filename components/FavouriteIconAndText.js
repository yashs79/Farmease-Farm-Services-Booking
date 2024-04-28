import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FavouriteIconAndText = () => {
  return (
    <View style={styles.favouriteIconAndText}>
      <Text style={styles.favourite}>Favourite</Text>
      <Image
        style={styles.iconlytwoToneheart}
        resizeMode="cover"
        source={require("../assets/iconlytwotoneheart.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  favourite: {
    top: "60.98%",
    left: "0%",
    fontSize: FontSize.smallBodyTextLight12_size,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  iconlytwoToneheart: {
    height: "58.54%",
    width: "45.28%",
    top: "0%",
    right: "30.19%",
    bottom: "41.46%",
    left: "24.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  favouriteIconAndText: {
    width: 53,
    height: 41,
  },
});

export default FavouriteIconAndText;
