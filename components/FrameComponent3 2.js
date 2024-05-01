import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent3 = () => {
  return (
    <View style={[styles.espresso1Parent, styles.frameViewSpaceBlock]}>
      <View style={styles.espresso1}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/15.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameLayout}>
          <View>
            <Text style={[styles.potato, styles.text1Typo]}>Potato</Text>
            <View style={[styles.vectorParent, styles.parentFlexBox]}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>4.5</Text>
            </View>
          </View>
          <Image
            style={styles.antDesignheartFilledIcon}
            resizeMode="cover"
            source={require("../assets/antdesignheartfilled1.png")}
          />
        </View>
        <View style={[styles.frameContainer, styles.frameLayout]}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text1, styles.text1Typo]}>$</Text>
            <Text style={[styles.text1, styles.text1Typo]}>350</Text>
          </View>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <View style={[styles.lucideminusWrapper, styles.wrapperShadowBox]}>
              <Image
                style={[styles.lucideminusIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/lucideminus1.png")}
              />
            </View>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text3, styles.textTypo]}>0</Text>
            </View>
            <View style={[styles.octiconplus16Wrapper, styles.wrapperFlexBox]}>
              <Image
                style={[styles.lucideminusIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/octiconplus161.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  text1Typo: {
    textAlign: "left",
    color: Color.black200,
    fontFamily: FontFamily.gilroy,
    fontWeight: "600",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    width: 16,
    height: 16,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gilroy,
  },
  frameLayout: {
    width: 206,
    flexDirection: "row",
  },
  frameViewFlexBox: {
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
    position: "absolute",
    top: 21,
    left: 16,
    width: 69,
    height: 78,
  },
  espresso1: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 100,
    height: 120,
  },
  potato: {
    fontSize: FontSize.size_base,
  },
  vectorIcon: {
    height: 16,
  },
  text: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    color: Color.gray1,
    width: 21,
    height: 13,
    marginLeft: 4,
  },
  vectorParent: {
    marginTop: 8,
    alignItems: "center",
  },
  antDesignheartFilledIcon: {
    height: 24,
    display: "none",
    marginLeft: 69,
    overflow: "hidden",
    width: 24,
  },
  text1: {
    fontSize: FontSize.size_lg,
  },
  parent: {
    width: 60,
    alignItems: "center",
  },
  lucideminusIcon: {
    overflow: "hidden",
    height: 16,
  },
  lucideminusWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    width: 24,
    height: 16,
    fontSize: FontSize.size_base,
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
  frameView: {
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_11xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  frameContainer: {
    justifyContent: "space-between",
    marginTop: 12,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: 12,
  },
  espresso1Parent: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 20,
    elevation: 20,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
});

export default FrameComponent3;
