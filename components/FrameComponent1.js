import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.espressoParent}>
      <View style={styles.espresso}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/11.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.potato, styles.textFlexBox]}>Potato</Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>$</Text>
            <Text style={[styles.text, styles.textTypo]}>350</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={[styles.lucideminusWrapper, styles.wrapperShadowBox]}>
            <Image
              style={styles.lucideminusIcon}
              resizeMode="cover"
              source={require("../assets/lucideminus.png")}
            />
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
          </View>
          <View style={[styles.octiconplus16Wrapper, styles.wrapperFlexBox]}>
            <Image
              style={styles.lucideminusIcon}
              resizeMode="cover"
              source={require("../assets/octiconplus16.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.antDesignheartFilledIcon}
        resizeMode="cover"
        source={require("../assets/antdesignheartfilled.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.black200,
  },
  textTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gilroy,
  },
  frameGroupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperShadowBox: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  wrapperFlexBox: {
    marginLeft: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    top: 16,
    left: 16,
    width: 107,
    height: 121,
    position: "absolute",
  },
  espresso: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 138,
    height: 152,
    zIndex: 0,
    borderRadius: Border.br_5xs,
  },
  potato: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.gilroy,
    color: Color.black200,
  },
  text: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.black200,
  },
  parent: {
    marginTop: 6,
    flexDirection: "row",
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
  text2: {
    fontWeight: "700",
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
  },
  octiconplus16Wrapper: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  frameGroup: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 14,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
  },
  frameParent: {
    zIndex: 1,
    marginTop: 10,
  },
  antDesignheartFilledIcon: {
    top: 19,
    left: 122,
    width: 20,
    height: 20,
    opacity: 0,
    zIndex: 2,
    overflow: "hidden",
    position: "absolute",
  },
  espressoParent: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 20,
    elevation: 20,
    borderRadius: Border.br_3xs,
    padding: Padding.p_xs,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default FrameComponent1;
