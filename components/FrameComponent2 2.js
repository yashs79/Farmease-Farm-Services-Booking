import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const FrameComponent2 = () => {
  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View style={[styles.lucideminusWrapper, styles.wrapperShadowBox]}>
        <Image
          style={styles.lucideminusIcon}
          resizeMode="cover"
          source={require("../assets/lucideminus.png")}
        />
      </View>
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Text style={styles.text}>0</Text>
      </View>
      <View style={[styles.octiconplus16Wrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.lucideminusIcon}
          resizeMode="cover"
          source={require("../assets/octiconplus16.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperShadowBox: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    marginLeft: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  lucideminusIcon: {
    width: 16,
    overflow: "hidden",
    height: 16,
  },
  lucideminusWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.gilroy,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 24,
    height: 16,
  },
  wrapper: {
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    marginLeft: 3,
  },
  octiconplus16Wrapper: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    flexDirection: "row",
  },
  frameParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
});

export default FrameComponent2;
