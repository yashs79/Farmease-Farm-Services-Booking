import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Splash1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash11}>
      <View style={styles.imagetitle}>
        <Image
          style={styles.imagetitle}
          resizeMode="cover"
          source={require("../assets/mask-group3.png")}
        />
        <View style={styles.heading1}>
          <Text style={[styles.premiumFoodAt, styles.premiumFoodAtFlexBox]}>
            Welcome to
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.primarybutton, styles.primarybuttonPosition]}
        onPress={() => navigation.navigate("Splash2")}
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
      <Image
        style={styles.farmEaseLogo}
        resizeMode="cover"
        source={require("../assets/farm-ease-logo.png")}
      />
      <ImageBackground
        style={styles.freeVectorFarmersDoingAg}
        resizeMode="cover"
        source={require("../assets/free-vector--farmers-doing-agricultural-work-together-1.png")}
      />
      <Text
        style={[styles.leveragingOndcAnd, styles.primarybuttonPosition]}
      >{`Leveraging ONDC and Smart Matchmaking 
for Sustainable Farming Solutions`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  premiumFoodAtFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  primarybuttonPosition: {
    left: 17,
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
  imagetitle: {
    top: 0,
    left: 0,
    width: 414,
    position: "absolute",
    height: 896,
  },
  premiumFoodAt: {
    left: "20%",
    fontSize: FontSize.heading1_size,
    letterSpacing: 0.9,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    top: "0%",
    position: "absolute",
  },
  heading1: {
    top: 79,
    left: 47,
    width: 320,
    height: 90,
    position: "absolute",
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
    width: 380,
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
  farmEaseLogo: {
    top: 82,
    left: 125,
    width: 211,
    height: 238,
    position: "absolute",
  },
  freeVectorFarmersDoingAg: {
    top: 340,
    left: 3,
    width: 409,
    height: 409,
    position: "absolute",
  },
  leveragingOndcAnd: {
    top: 286,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    lineHeight: 26,
    fontFamily: FontFamily.poorStoryRegular,
    width: 394,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  splash11: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Splash1;
