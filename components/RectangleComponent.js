import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RectangleComponent = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.iconLayout1]}>
      <View style={[styles.componentChild, styles.iconLayout]} />
      <Pressable
        style={styles.close}
        onPress={() => navigation.navigate("Onboard1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>
      <Text style={styles.formSubmitted}> form submitted!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  close: {
    left: "88.36%",
    top: "4.93%",
    right: "0.12%",
    bottom: "77.48%",
    width: "11.53%",
    height: "17.59%",
    position: "absolute",
  },
  formSubmitted: {
    top: 27,
    left: 60,
    fontSize: FontSize.paragraph1_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorYellowgreen_400,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    width: 260,
    height: 142,
  },
});

export default RectangleComponent;
