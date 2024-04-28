import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Splash24 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash21}>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group4.png")}
      />
      <Image
        style={[styles.splash21Child, styles.maskGroupIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-12.png")}
      />
      <Pressable
        style={styles.primarybutton}
        onPress={() => navigation.navigate("Splash21")}
      >
        <Image
          style={[styles.rectangleIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.title, styles.titleTypo]}>Get started</Text>
      </Pressable>
      <View style={[styles.heading1, styles.heading1Layout]}>
        <Text style={[styles.premiumFoodAt, styles.textClr]}>{`Fresh Produce at 
 Your Doorstep`}</Text>
      </View>
      <View style={[styles.paragraph1, styles.heading1Layout]}>
        <Text
          style={[styles.loremIpsumDolor, styles.titleTypo]}
        >{`Get fresh farm produce delivered 
to your doorsteps at prices lesser
than market.`}</Text>
      </View>
      <Image
        style={styles.pointersIcon}
        resizeMode="cover"
        source={require("../assets/pointers2.png")}
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
      <Image
        style={styles.farmEaseLogo}
        resizeMode="cover"
        source={require("../assets/farm-ease-logo1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  iconPosition1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    textAlign: "center",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  heading1Layout: {
    width: 320,
    position: "absolute",
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
  splash21Child: {
    top: 471,
    height: 425,
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
    fontWeight: "600",
  },
  primarybutton: {
    top: 780,
    left: 17,
    width: 380,
    height: 60,
    position: "absolute",
  },
  premiumFoodAt: {
    left: "6.56%",
    fontSize: FontSize.heading1_size,
    letterSpacing: 0.9,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    top: "0%",
  },
  heading1: {
    top: 537,
    left: 48,
    height: 90,
  },
  loremIpsumDolor: {
    left: "8.13%",
    letterSpacing: 0.5,
    fontWeight: "500",
    fontFamily: FontFamily.paragraph1,
    color: Color.colorGray_200,
    top: "0%",
  },
  paragraph1: {
    top: 643,
    left: 47,
    height: 46,
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
    color: Color.labelColorLightPrimary,
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
  farmEaseLogo: {
    top: 61,
    left: 187,
    width: 20,
    height: 23,
    position: "absolute",
  },
  splash21: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Splash24;
