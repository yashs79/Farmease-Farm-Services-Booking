import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Splash2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash20}>
      <Image
        style={[styles.maskGroupIcon, styles.splash20Position]}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={[styles.splash20Child, styles.splash20Position]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.splash20Item, styles.splash20Position]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
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
      <View style={styles.heading1}>
        <Text style={[styles.premiumFoodAt, styles.textClr]}>{`
Comprehensive 
Farm Setup and 
Management 
Solution`}</Text>
      </View>
      <View style={styles.paragraph1}>
        <Text
          style={[styles.loremIpsumDolor, styles.titleTypo]}
        >{`Are you a landowner and want to make  
passive income from farming then you 
are at right place`}</Text>
      </View>
      <Image
        style={styles.pointersIcon}
        resizeMode="cover"
        source={require("../assets/pointers.png")}
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
  splash20Position: {
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
    left: 0,
  },
  splash20Child: {
    top: 471,
    height: 261,
  },
  splash20Item: {
    top: 729,
    height: 167,
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
    left: "9.88%",
    fontSize: FontSize.heading1_size,
    letterSpacing: 0.9,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    top: "0%",
  },
  heading1: {
    top: 448,
    left: 46,
    width: 333,
    height: 90,
    position: "absolute",
  },
  loremIpsumDolor: {
    left: "-0.63%",
    letterSpacing: 0.5,
    fontWeight: "500",
    fontFamily: FontFamily.paragraph1,
    color: Color.colorGray_200,
    top: "0%",
  },
  paragraph1: {
    top: 644,
    left: 47,
    width: 318,
    height: 46,
    position: "absolute",
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
  splash20: {
    backgroundColor: "#d3ffc8",
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Splash2;
