import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Auth1Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.auth1Welcome}>
      <Image
        style={[styles.maskGroupIcon, styles.bodyPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group7.png")}
      />
      <LinearGradient
        style={[styles.auth1WelcomeChild, styles.bodyPosition]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
        useAngle={true}
        angle={180}
      />
      <View style={styles.frame}>
        <View style={[styles.actionbarwhite, styles.actionbarLayout]}>
          <View style={[styles.actionbar, styles.actionbarLayout]}>
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/battery11.png")}
              />
              <Image
                style={[styles.wifiIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/wifi1.png")}
              />
              <Image
                style={[styles.mobileSignalIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/mobile-signal2.png")}
              />
            </View>
            <View style={[styles.leftSide, styles.iconPosition1]}>
              <View style={[styles.time, styles.iconPosition1]}>
                <Text style={styles.text}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={[styles.titlebar, styles.titlebarPosition]}>
          <Text style={[styles.welcome, styles.loginTypo]}>Welcome</Text>
          <Pressable
            style={styles.backarrow}
            onPress={() => navigation.navigate("Splash23")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/backarrow21.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.body, styles.bodyPosition]}>
        <Text style={[styles.welcome1, styles.titleTypo]}>Welcome</Text>
        <View style={[styles.secondarybuttonicon, styles.rectangleIconLayout]}>
          <Text style={[styles.continueWithGoogle, styles.titlePosition]}>
            Continue with google
          </Text>
          <Image
            style={[styles.secondarybuttoniconChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/group-4.png")}
          />
        </View>
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("Auth1Login")}
        >
          <Text style={styles.text1Typo}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Already have an account ? `}</Text>
            <Text style={[styles.login, styles.loginTypo]}>Login</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.primarybuttonicon, styles.titlebarPosition]}
          onPress={() => navigation.navigate("Auth1Signup")}
        >
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.title, styles.titlePosition]}>
            Create an account
          </Text>
        </Pressable>
        <View style={[styles.paragraph1, styles.welcome1Position]}>
          <Text
            style={[styles.loremIpsumDolor, styles.text1Typo]}
          >{`Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  actionbarLayout: {
    width: 393,
    height: 21,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "2.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  titlebarPosition: {
    left: 17,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  titleTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  titlePosition: {
    top: "30%",
    textAlign: "center",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  welcome1Position: {
    left: 16,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.paragraph1_size,
  },
  maskGroupIcon: {
    top: 0,
    height: 896,
  },
  auth1WelcomeChild: {
    height: 131,
    backgroundColor: "transparent",
    top: 0,
  },
  batteryIcon: {
    width: "36.52%",
    left: "63.48%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
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
    left: 7,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    width: 40,
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    top: 1,
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  leftSide: {
    width: "14.45%",
    right: "85.55%",
    left: "0%",
    position: "absolute",
  },
  actionbar: {
    left: 0,
  },
  actionbarwhite: {
    left: 4,
  },
  frame: {
    top: 16,
    width: 397,
    height: 21,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  welcome: {
    left: 146,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    fontWeight: "500",
    textAlign: "center",
    color: Color.white,
    top: 1,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    top: 5,
    width: 23,
    height: 16,
    left: 0,
    position: "absolute",
  },
  titlebar: {
    width: 236,
    height: 27,
    top: 0,
  },
  frame1: {
    top: 63,
    left: -12,
    width: 253,
    height: 27,
    position: "absolute",
    overflow: "hidden",
  },
  welcome1: {
    top: 31,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.8,
    color: Color.labelColorLightPrimary,
    left: 16,
    position: "absolute",
    textAlign: "center",
  },
  continueWithGoogle: {
    left: "33.42%",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  secondarybuttoniconChild: {
    height: "36.67%",
    width: "5.79%",
    top: "31.67%",
    right: "85.53%",
    bottom: "31.67%",
    left: "8.68%",
    position: "absolute",
  },
  secondarybuttonicon: {
    height: "16.76%",
    width: "91.79%",
    top: "40.22%",
    right: "4.11%",
    bottom: "43.02%",
    left: "4.11%",
    backgroundColor: Color.white,
  },
  alreadyHaveAn: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorGray_200,
  },
  login: {
    color: Color.labelColorLightPrimary,
  },
  alreadyHaveAnContainer: {
    left: 78,
    top: 296,
    position: "absolute",
  },
  rectangleIcon: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  vectorIcon: {
    height: "43.33%",
    width: "6.84%",
    top: "28.33%",
    right: "85%",
    bottom: "28.33%",
    left: "8.16%",
    position: "absolute",
  },
  title: {
    left: "31.05%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.white,
  },
  primarybuttonicon: {
    top: 216,
    width: 380,
    height: 60,
  },
  loremIpsumDolor: {
    left: "-0.31%",
    color: Color.colorGray_200,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: "0%",
    position: "absolute",
  },
  paragraph1: {
    top: 71,
    width: 320,
    height: 46,
  },
  body: {
    top: 538,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite_100,
    height: 358,
  },
  auth1Welcome: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Auth1Welcome;
