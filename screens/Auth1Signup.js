import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Auth1Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.auth1Signup}>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group6.png")}
      />
      <LinearGradient
        style={[styles.auth1SignupChild, styles.maskGroupIconPosition]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.actionbarwhite, styles.actionbarLayout]}>
        <View style={[styles.actionbar, styles.actionbarLayout]}>
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/battery11.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={[styles.mobileSignalIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/mobile-signal21.png")}
            />
          </View>
          <View style={[styles.leftSide, styles.iconPosition]}>
            <View style={[styles.time, styles.iconPosition]}>
              <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.titlebar}>
        <Text style={[styles.welcome, styles.login1Typo]}>Welcome</Text>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("Auth1Welcome")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backarrow11.png")}
          />
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={[styles.createAccount, styles.titleTypo]}>
          Create account
        </Text>
        <Text style={styles.quicklyCreateAccount}>Quickly create account</Text>
        <Pressable
          style={styles.primarybutton}
          onPress={() => navigation.navigate("Auth1Login")}
        >
          <Image
            style={[styles.rectangleIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.titleTypo]}>Signup</Text>
        </Pressable>
        <RNPTextInput
          style={[styles.emailfield, styles.emailfieldPosition]}
          label="Email address"
          placeholder="Email address"
          mode="outlined"
          placeholderTextColor="#868889"
          theme={{
            fonts: { regular: { fontFamily: "Poppins", fontWeight: "Medium" } },
            colors: { text: "#868889" },
          }}
        />
        <RNPTextInput
          style={[styles.phonefield, styles.emailfieldPosition]}
          label="Phone number"
          placeholder="Phon number"
          mode="outlined"
          placeholderTextColor="#868889"
          theme={{
            fonts: { regular: { fontFamily: "Poppins", fontWeight: "Medium" } },
            colors: { text: "#868889" },
          }}
        />
        <RNPTextInput
          style={styles.passwordfield}
          label="Password"
          placeholder="Password"
          mode="outlined"
        />
        <Pressable
          style={styles.alreadyHaveAnContainer}
          numberOfLines={1}
          onPress={() => navigation.navigate("Auth1Login")}
        >
          <Text style={styles.text1}>
            <Text style={styles.alreadyHaveAnAccount}>
              <Text style={styles.alreadyHaveAn}>
                Already have an account ?
              </Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={styles.text2}>
              <Text style={styles.login1Typo}>Login</Text>
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  actionbarLayout: {
    height: 21,
    width: 393,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    overflow: "hidden",
  },
  iconLayout: {
    bottom: "2.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "0%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  login1Typo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  titleTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  emailfieldPosition: {
    left: "50%",
    marginLeft: -189.5,
    height: "15.04%",
    width: 380,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 896,
    width: 414,
  },
  auth1SignupChild: {
    height: 131,
    backgroundColor: "transparent",
  },
  batteryIcon: {
    width: "36.52%",
    left: "63.48%",
    position: "absolute",
  },
  wifiIcon: {
    height: "97.35%",
    width: "22.97%",
    right: "43.94%",
    left: "33.1%",
    top: "0%",
    bottom: "2.65%",
    position: "absolute",
  },
  mobileSignalIcon: {
    height: "94.69%",
    width: "25.53%",
    top: "2.65%",
    right: "74.47%",
    bottom: "2.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  leftSide: {
    width: "14.45%",
    right: "85.55%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  actionbar: {
    left: 0,
    top: 0,
  },
  actionbarwhite: {
    top: 16,
    left: 4,
  },
  welcome: {
    left: 152,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    textAlign: "center",
    color: Color.white,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    top: 7,
    width: 23,
    height: 16,
    left: 0,
    position: "absolute",
  },
  titlebar: {
    top: 63,
    left: 11,
    width: 242,
    height: 27,
    position: "absolute",
  },
  createAccount: {
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.8,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    left: 0,
    top: 0,
  },
  quicklyCreateAccount: {
    top: 40,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.paragraph1_size,
    left: 0,
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  title: {
    top: "30%",
    left: "42.89%",
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
  },
  primarybutton: {
    top: 296,
    left: 1,
    height: 60,
    width: 380,
    position: "absolute",
  },
  emailfield: {
    top: "22.31%",
    bottom: "62.66%",
  },
  phonefield: {
    top: "38.6%",
    bottom: "46.37%",
  },
  passwordfield: {
    width: "99.74%",
    top: "54.89%",
    bottom: "30.08%",
    left: "0.26%",
    height: "15.04%",
    right: "0%",
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorGray_200,
  },
  text2: {
    color: Color.labelColorLightPrimary,
  },
  alreadyHaveAnAccount: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
  },
  text1: {
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.paragraph1_size,
  },
  alreadyHaveAnContainer: {
    left: 63,
    top: 376,
    position: "absolute",
  },
  body: {
    top: 459,
    left: 16,
    width: 381,
    height: 399,
    position: "absolute",
  },
  auth1Signup: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Auth1Signup;
