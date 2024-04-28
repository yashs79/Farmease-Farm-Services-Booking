import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Splash21 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash22}>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={[styles.splash22Child, styles.maskGroupIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-111.png")}
      />
      <View style={[styles.paragraph1, styles.heading1Position]}>
        <Text
          style={[styles.loremIpsumDolor, styles.titleFlexBox]}
        >{`Essential farm services and  
evaluation/consultation by our expert  `}</Text>
      </View>
      <Pressable
        style={styles.primarybutton}
        onPress={() => navigation.navigate("Splash22")}
      >
        <Image
          style={[styles.rectangleIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.title, styles.textTypo]}>Get started</Text>
      </Pressable>
      <View style={[styles.heading1, styles.heading1Position]}>
        <Text style={[styles.buyPremium, styles.textClr]}>{`Farm Services
 & Consultation`}</Text>
      </View>
      <Image
        style={styles.pointersIcon}
        resizeMode="cover"
        source={require("../assets/pointers1.png")}
      />
      <View style={styles.actionbar}>
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.timePosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textClr]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  heading1Position: {
    width: 320,
    left: 47,
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconPosition1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
  },
  textClr: {
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    bottom: "2.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    height: 896,
    width: 414,
    left: 0,
  },
  splash22Child: {
    top: 472,
    height: 424,
  },
  loremIpsumDolor: {
    left: "2.81%",
    letterSpacing: 0.5,
    fontWeight: "500",
    fontFamily: FontFamily.paragraph1,
    color: Color.colorGray_200,
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
    top: "0%",
  },
  paragraph1: {
    top: 643,
    height: 46,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    left: "0%",
    width: "100%",
  },
  title: {
    top: "30%",
    left: "38.68%",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  primarybutton: {
    top: 780,
    left: 17,
    width: 380,
    height: 60,
    position: "absolute",
  },
  buyPremium: {
    left: "10.94%",
    fontSize: FontSize.heading1_size,
    letterSpacing: 0.9,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    top: "0%",
  },
  heading1: {
    top: 536,
    height: 90,
  },
  pointersIcon: {
    top: 740,
    left: 183,
    width: 48,
    height: 8,
    position: "absolute",
  },
  batteryIcon: {
    width: "36.52%",
    left: "63.48%",
  },
  wifiIcon: {
    height: "97.35%",
    width: "22.97%",
    right: "43.94%",
    left: "33.1%",
    top: "0%",
  },
  mobileSignalIcon: {
    height: "94.69%",
    width: "25.53%",
    top: "2.65%",
    right: "74.47%",
    left: "0%",
  },
  rightSide: {
    height: "53.81%",
    width: "17.84%",
    top: "23.81%",
    bottom: "22.38%",
    left: "82.16%",
    right: "0%",
    position: "absolute",
  },
  text: {
    top: 1,
    left: 7,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    width: 40,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
  },
  time: {
    borderRadius: Border.br_5xl,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  leftSide: {
    width: "14.45%",
    right: "85.55%",
    left: "0%",
  },
  actionbar: {
    top: 16,
    left: 4,
    width: 393,
    height: 21,
    position: "absolute",
  },
  splash22: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Splash21;
