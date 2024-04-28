import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Splash23 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash24}>
      <ImageBackground
        style={[
          styles.element5DigitalCpbbsda2eriUIcon,
          styles.primarybuttonPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/element5digitalcpbbsda2eriunsplash.png")}
      />
      <Image
        style={styles.splash24Child}
        resizeMode="cover"
        source={require("../assets/vector-15.png")}
      />
      <View style={[styles.paragraph1, styles.heading1Position]}>
        <Text
          style={[styles.loremIpsumDolor, styles.getDiscountsOnPosition]}
        >{`Are you a businessman wanting to start 
an organic farming business, we got you 
covered`}</Text>
      </View>
      <View style={[styles.heading1, styles.heading1Position]}>
        <Text
          style={[styles.getDiscountsOn, styles.getDiscountsOnPosition]}
        >{`Farming Business
Solutions`}</Text>
      </View>
      <Pressable
        style={[styles.primarybutton, styles.primarybuttonPosition]}
        onPress={() => navigation.navigate("Auth1Welcome")}
      >
        <Image
          style={[styles.rectangleIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.title, styles.textTypo]}>Get started</Text>
      </Pressable>
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
            source={require("../assets/mobile-signal1.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.timePosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  primarybuttonPosition: {
    width: 380,
    left: 17,
    position: "absolute",
  },
  heading1Position: {
    width: 320,
    left: 47,
    position: "absolute",
  },
  getDiscountsOnPosition: {
    textAlign: "center",
    top: "0%",
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
    textAlign: "center",
    fontSize: FontSize.paragraph1_size,
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
  element5DigitalCpbbsda2eriUIcon: {
    top: 0,
    height: 543,
  },
  splash24Child: {
    top: 473,
    left: 0,
    width: 414,
    height: 424,
    position: "absolute",
  },
  loremIpsumDolor: {
    left: "-1.25%",
    letterSpacing: 0.5,
    fontWeight: "500",
    fontFamily: FontFamily.paragraph1,
    color: Color.colorGray_200,
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
  },
  paragraph1: {
    top: 643,
    height: 46,
  },
  getDiscountsOn: {
    left: "5%",
    fontSize: FontSize.heading1_size,
    letterSpacing: 0.9,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    color: Color.labelColorLightPrimary,
  },
  heading1: {
    top: 536,
    height: 90,
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
  },
  primarybutton: {
    top: 780,
    height: 60,
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
    bottom: "2.65%",
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
  splash24: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splash23;
