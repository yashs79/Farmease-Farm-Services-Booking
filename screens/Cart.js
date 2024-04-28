import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border } from "../GlobalStyles";

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart}>
      <Image
        style={styles.antDesignheartFilledIcon}
        resizeMode="cover"
        source={require("../assets/antdesignheartfilled5.png")}
      />
      <Text style={styles.noFavouritesYet}>No Favourites yet</Text>
      <Pressable
        style={styles.closeButton}
        onPress={() => navigation.navigate("VEGETABLEMENU")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/close-button.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  antDesignheartFilledIcon: {
    top: 361,
    left: 157,
    width: 58,
    height: 58,
    overflow: "hidden",
    position: "absolute",
  },
  noFavouritesYet: {
    top: 420,
    left: 77,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  closeButton: {
    left: 18,
    top: 70,
    width: 28,
    height: 28,
    position: "absolute",
  },
  cart: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Cart;
