import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Toggle } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Auth1Login = () => {
  const [rememberTogglechecked, setRememberTogglechecked] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.auth1Login}>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group5.png")}
      />
      <LinearGradient
        style={[styles.auth1LoginChild, styles.auth1Position]}
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
        <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("Auth1Welcome")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backarrow21.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.auth1LoginItem, styles.auth1Position]} />
      <View style={styles.body}>
        <Text style={[styles.welcomeBack, styles.titleTypo]}>
          Welcome back !
        </Text>
        <Text style={styles.signInTo}>Sign in to your account</Text>
        <RNPTextInput
          style={[styles.emailfield, styles.emailfieldLayout]}
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
          style={styles.passwordfield}
          label="Password"
          placeholder="Password"
          mode="outlined"
        />
        <Text style={[styles.forgotPassword, styles.forgotPasswordPosition]}>
          Forgot password
        </Text>
        <Toggle
          style={[styles.remembertoggle, styles.forgotPasswordPosition]}
          status="success"
          checked={rememberTogglechecked}
          onChange={() => setRememberTogglechecked(!rememberTogglechecked)}
        />
        <Pressable
          style={[styles.primarybutton, styles.emailfieldLayout]}
          onPress={() => navigation.navigate("Onboard")}
        >
          <Image
            style={[styles.rectangleIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.titleTypo]}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.dontHaveAnContainer}
          numberOfLines={1}
          onPress={() => navigation.navigate("Auth1Signup")}
        >
          <Text style={styles.text1}>
            <Text style={styles.dontHaveAnAccount}>
              <Text style={styles.dontHaveAn}>Don’t have an account ?</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={styles.text2}>
              <Text style={styles.welcomeTypo}>Sign up</Text>
            </Text>
          </Text>
        </Pressable>
      </View>
      <Image
        style={[styles.passwordIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/password.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  auth1Position: {
    width: 414,
    left: 0,
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
  welcomeTypo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  titleTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  emailfieldLayout: {
    width: 380,
    position: "absolute",
  },
  forgotPasswordPosition: {
    top: 235,
    position: "absolute",
  },
  maskGroupIcon: {
    left: -7,
    width: 436,
    height: 943,
    top: 0,
    position: "absolute",
  },
  auth1LoginChild: {
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
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    left: "0%",
  },
  leftSide: {
    width: "14.45%",
    right: "85.55%",
    bottom: "0%",
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
    left: 146,
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
    top: 5,
    width: 23,
    height: 16,
    left: 0,
    position: "absolute",
  },
  titlebar: {
    top: 63,
    left: 17,
    width: 236,
    height: 27,
    position: "absolute",
  },
  auth1LoginItem: {
    top: 446,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite_100,
    height: 453,
  },
  welcomeBack: {
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.8,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    left: 0,
    top: 0,
  },
  signInTo: {
    top: 40,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.paragraph1_size,
    left: 0,
    position: "absolute",
  },
  emailfield: {
    marginLeft: -189.5,
    top: "23.54%",
    bottom: "60.58%",
    left: "50%",
    height: "15.87%",
  },
  passwordfield: {
    width: "99.74%",
    top: "41.53%",
    bottom: "42.59%",
    left: "0.26%",
    height: "15.87%",
    right: "0%",
    position: "absolute",
  },
  forgotPassword: {
    left: 238,
    color: "#407ec7",
    textAlign: "left",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: FontSize.paragraph1_size,
  },
  remembertoggle: {
    left: 11,
    width: 156,
    height: 23,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    left: "0%",
  },
  title: {
    top: "30%",
    left: "44.74%",
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
  },
  primarybutton: {
    top: 275,
    left: 1,
    height: 60,
  },
  dontHaveAn: {
    color: Color.colorGray_200,
  },
  text2: {
    color: Color.labelColorLightPrimary,
  },
  dontHaveAnAccount: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
  },
  text1: {
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.paragraph1_size,
  },
  dontHaveAnContainer: {
    left: 58,
    top: 355,
    position: "absolute",
  },
  body: {
    top: 476,
    left: 16,
    width: 381,
    height: 378,
    position: "absolute",
  },
  passwordIcon: {
    height: "0.98%",
    width: "30.87%",
    top: "73.44%",
    right: "47.63%",
    bottom: "25.58%",
    left: "21.5%",
    position: "absolute",
  },
  auth1Login: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Auth1Login;
