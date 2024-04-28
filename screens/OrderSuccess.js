import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OrderSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.orderSuccess}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.body}>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.yourOrderWas, styles.textTypo]}>{`Your order was 
succesfull !`}</Text>
          <Text
            style={[styles.youWillGet, styles.youWillGetTypo]}
          >{`You will get a response within
a few minutes.`}</Text>
        </View>
        <Pressable
          style={styles.primarybutton}
          onPress={() => navigation.navigate("TrackOrder")}
        >
          <Image
            style={[styles.rectangleIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.textTypo]}>Track order</Text>
        </Pressable>
      </View>
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.orderSuccess1, styles.youWillGetTypo]}>
          Order Success
        </Text>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("VEGETABLEMENU")}
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
        <View style={[styles.leftSide, styles.iconPosition1]}>
          <View style={[styles.time, styles.iconPosition1]}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  youWillGetTypo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    letterSpacing: 0.5,
    textAlign: "center",
    position: "absolute",
  },
  iconPosition1: {
    bottom: "0%",
    height: "100%",
    top: "0%",
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
    top: 0,
    left: 0,
    position: "absolute",
    height: 896,
  },
  vectorIcon: {
    height: "43.56%",
    width: "42.13%",
    right: "29.36%",
    bottom: "56.44%",
    left: "28.51%",
    top: "0%",
    position: "absolute",
  },
  yourOrderWas: {
    top: 151,
    left: 39,
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  youWillGet: {
    top: 218,
    color: Color.colorGray_200,
    fontSize: FontSize.paragraph1_size,
    left: 0,
  },
  vectorParent: {
    height: "48.18%",
    width: "61.84%",
    right: "18.95%",
    bottom: "51.82%",
    left: "19.21%",
    top: "0%",
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    bottom: "0%",
  },
  title: {
    top: "30%",
    left: "38.42%",
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  primarybutton: {
    top: 488,
    width: 380,
    height: 60,
    left: 0,
    position: "absolute",
  },
  body: {
    height: "61.16%",
    width: "91.79%",
    top: "34.82%",
    right: "4.11%",
    bottom: "4.02%",
    left: "4.11%",
    position: "absolute",
  },
  titlebarChild: {
    backgroundColor: Color.white,
    height: 118,
  },
  orderSuccess1: {
    top: 63,
    left: 138,
    fontSize: FontSize.size_lg,
    color: Color.labelColorLightPrimary,
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
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    fontSize: FontSize.paragraph1_size,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontWeight: "600",
  },
  time: {
    borderRadius: Border.br_5xl,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
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
  orderSuccess: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OrderSuccess;
