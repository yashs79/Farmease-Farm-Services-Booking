import React, { useState } from "react";
import { Image, StyleSheet, View, Switch, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Notifications = () => {
  const [groupSwitchSwitchValueState, setGroupSwitchSwitchValueState] =
    useState(false);
  const [groupSwitch1SwitchValueState, setGroupSwitch1SwitchValueState] =
    useState(false);
  const [groupSwitch2SwitchValueState, setGroupSwitch2SwitchValueState] =
    useState(false);
  const [groupSwitch3SwitchValueState, setGroupSwitch3SwitchValueState] =
    useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.body, styles.bodyLayout]}>
        <View style={[styles.allownotfication, styles.allownotficationLayout]}>
          <View
            style={[
              styles.allownotficationChild,
              styles.allownotficationLayout,
            ]}
          />
          <Switch
            style={[styles.allownotficationItem, styles.backarrowLayout]}
            value={groupSwitchSwitchValueState}
            onValueChange={setGroupSwitchSwitchValueState}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#6cc51d" }}
          />
          <Text style={[styles.allowNotifcations, styles.titleTypo]}>
            Allow Notifcations
          </Text>
        </View>
        <View style={[styles.emailnotification, styles.allownotficationLayout]}>
          <View
            style={[
              styles.allownotficationChild,
              styles.allownotficationLayout,
            ]}
          />
          <Switch
            style={[styles.allownotficationItem, styles.backarrowLayout]}
            value={groupSwitch1SwitchValueState}
            onValueChange={setGroupSwitch1SwitchValueState}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#fff" }}
          />
          <Text style={[styles.allowNotifcations, styles.titleTypo]}>
            Email Notifcations
          </Text>
        </View>
        <View style={[styles.ordernotification, styles.allownotficationLayout]}>
          <View
            style={[
              styles.allownotficationChild,
              styles.allownotficationLayout,
            ]}
          />
          <Switch
            style={[styles.allownotficationItem, styles.backarrowLayout]}
            value={groupSwitch2SwitchValueState}
            onValueChange={setGroupSwitch2SwitchValueState}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#fff" }}
          />
          <Text style={[styles.allowNotifcations, styles.titleTypo]}>
            Order Notifcations
          </Text>
        </View>
        <View
          style={[styles.generalnotification, styles.allownotficationLayout]}
        >
          <View
            style={[
              styles.allownotficationChild,
              styles.allownotficationLayout,
            ]}
          />
          <Switch
            style={[styles.allownotficationItem, styles.backarrowLayout]}
            value={groupSwitch3SwitchValueState}
            onValueChange={setGroupSwitch3SwitchValueState}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#6cc51d" }}
          />
          <Text style={[styles.allowNotifcations, styles.titleTypo]}>
            General Notifcations
          </Text>
        </View>
        <View style={[styles.primarybutton, styles.bodyLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.textFlexBox]}>Save settings</Text>
        </View>
      </View>
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.notifications1, styles.textFlexBox]}>
          Notifications
        </Text>
        <Pressable
          style={[styles.backarrow, styles.backarrowLayout]}
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
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyLayout: {
    width: 380,
    position: "absolute",
  },
  allownotficationLayout: {
    height: 103,
    width: 380,
    left: 0,
    position: "absolute",
  },
  backarrowLayout: {
    height: 16,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
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
  textFlexBox: {
    textAlign: "center",
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
  timePosition: {
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  backgroundIcon: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  allownotficationChild: {
    top: 0,
    height: 103,
    backgroundColor: Color.white,
  },
  allownotficationItem: {
    top: 44,
    left: 335,
    width: 29,
  },
  allowNotifcations: {
    top: 19,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0.5,
    left: 17,
    position: "absolute",
  },
  allownotfication: {
    top: 0,
    height: 103,
  },
  emailnotification: {
    top: 115,
  },
  ordernotification: {
    top: 230,
  },
  generalnotification: {
    top: 345,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    left: "0%",
    width: "100%",
  },
  title: {
    top: "30%",
    left: "36.58%",
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
  },
  primarybutton: {
    top: 649,
    height: 60,
    left: 0,
    width: 380,
  },
  body: {
    top: 151,
    height: 709,
    left: 17,
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  notifications1: {
    top: 62,
    left: 147,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.paragraph1,
    color: Color.labelColorLightPrimary,
    letterSpacing: 0.5,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    top: 68,
    width: 23,
    left: 17,
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
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
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
  notifications: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Notifications;
