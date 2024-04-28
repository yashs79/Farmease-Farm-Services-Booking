import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AboutMe = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutMe}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.body}>
        <Pressable style={styles.primarybutton}>
          <Image
            style={[styles.rectangleIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.titleTypo]}>Save settings</Text>
        </Pressable>
        <View style={[styles.personaldetail, styles.groupParentPosition]}>
          <View style={[styles.groupParent, styles.groupParentPosition]}>
            <TextInput
              style={[styles.groupChild, styles.groupTypo]}
              placeholder="farmerxyz@gmail.com"
              placeholderTextColor="#868889"
            />
            <TextInput
              style={[styles.groupItem, styles.groupPosition1]}
              placeholder="FARMER XYZ"
              placeholderTextColor="#868889"
            />
            <TextInput
              style={[styles.groupInner, styles.groupPosition]}
              placeholder="+91  9868851301 "
              placeholderTextColor="#868889"
            />
          </View>
          <Text style={[styles.personalDetails, styles.aboutMe1Typo1]}>
            Personal Details
          </Text>
        </View>
        <View style={styles.changepassoword}>
          <Text style={[styles.personalDetails, styles.aboutMe1Typo1]}>
            Change Password
          </Text>
          <View style={styles.groupContainer}>
            <View style={[styles.rectangleParent, styles.groupChildPosition]}>
              <TextInput
                style={[styles.rectangleTextinput, styles.rectanglePosition]}
                placeholder="new password"
              />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-17.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-5.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-7.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.groupPosition1]}>
              <View
                style={[styles.rectangleTextinput, styles.rectanglePosition]}
              />
              <Text style={[styles.currentPassword, styles.aboutMe1Typo]}>
                Current password
              </Text>
              <Image
                style={[styles.groupChild1, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-5.png")}
              />
            </View>
            <TextInput
              style={[styles.groupTextinput, styles.groupPosition]}
              placeholder="Confirm password"
              placeholderTextColor="#868889"
            />
          </View>
        </View>
      </View>
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.aboutMe1, styles.aboutMe1Typo]}>About me</Text>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("FarmerProfile")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backarrow.png")}
          />
        </Pressable>
      </View>
      <View style={styles.actionbar}>
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.groupIconLayout]}
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
        <View style={styles.leftSide}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupParentPosition: {
    left: "50%",
    position: "absolute",
  },
  groupTypo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    marginLeft: -190,
    left: "50%",
    fontSize: FontSize.paragraph1_size,
    width: 380,
  },
  groupPosition1: {
    bottom: "68.42%",
    height: "31.58%",
    top: "0%",
    position: "absolute",
  },
  groupPosition: {
    top: "68.42%",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    height: "31.58%",
    fontSize: FontSize.paragraph1_size,
    bottom: "0%",
    position: "absolute",
  },
  aboutMe1Typo1: {
    fontSize: FontSize.size_lg,
    color: Color.labelColorLightPrimary,
  },
  groupChildPosition: {
    bottom: "34.21%",
    top: "34.21%",
    height: "31.58%",
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  aboutMe1Typo: {
    letterSpacing: 0.5,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
  },
  titlebarPosition: {
    height: 118,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    bottom: "2.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backgroundIcon: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  title: {
    left: "36.58%",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.paragraph1_size,
    top: "30%",
  },
  primarybutton: {
    top: 648,
    left: 1,
    height: 60,
    width: 380,
    position: "absolute",
  },
  groupChild: {
    bottom: "34.21%",
    top: "34.21%",
    height: "31.58%",
    position: "absolute",
  },
  groupItem: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    marginLeft: -190,
    left: "50%",
    fontSize: FontSize.paragraph1_size,
    width: 380,
  },
  groupInner: {
    marginLeft: -190,
    top: "68.42%",
    left: "50%",
    width: 380,
  },
  groupParent: {
    height: "82.61%",
    marginLeft: -189.5,
    top: "17.39%",
    bottom: "0%",
    width: 380,
  },
  personalDetails: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: 0,
    top: 0,
    fontSize: FontSize.size_lg,
  },
  personaldetail: {
    height: "32.49%",
    marginLeft: -190.5,
    bottom: "67.51%",
    top: "0%",
    width: 381,
  },
  rectangleTextinput: {
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupIcon: {
    height: "16.67%",
    width: "17.37%",
    top: "41.67%",
    right: "66.32%",
    bottom: "41.67%",
    left: "16.32%",
  },
  groupChild1: {
    height: "38.33%",
    width: "4.55%",
    right: "90.97%",
    bottom: "31.67%",
    left: "4.47%",
    top: "30%",
  },
  groupChild2: {
    height: "28.17%",
    width: "6.97%",
    top: "36.67%",
    right: "5.13%",
    bottom: "35.17%",
    left: "87.89%",
  },
  rectangleParent: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  currentPassword: {
    top: 19,
    left: 62,
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.paragraph1_size,
  },
  rectangleGroup: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupTextinput: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupContainer: {
    height: "81.55%",
    width: "99.74%",
    top: "18.45%",
    left: "0.26%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  changepassoword: {
    top: 264,
    height: 233,
    width: 381,
    left: 0,
    position: "absolute",
  },
  body: {
    top: 152,
    left: 16,
    height: 708,
    width: 381,
    position: "absolute",
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  aboutMe1: {
    top: 63,
    left: 161,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    left: 17,
    top: 68,
    width: 23,
    height: 16,
    position: "absolute",
  },
  batteryIcon: {
    width: "36.52%",
    left: "63.48%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  leftSide: {
    width: "14.45%",
    right: "85.55%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  actionbar: {
    top: 16,
    left: 4,
    width: 393,
    height: 21,
    position: "absolute",
  },
  aboutMe: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AboutMe;
