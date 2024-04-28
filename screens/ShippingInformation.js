import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ShippingInformation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shippingInformation}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={styles.shippingAddress}>Shipping Address</Text>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("ShippingMethod")}
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
            source={require("../assets/battery1.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/mobile-signal1.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.iconPosition1]}>
          <View style={[styles.time, styles.iconPosition1]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.saveaddress}>
          <Text style={styles.saveThisAddress}>Save this address</Text>
          <Image
            style={styles.saveaddressChild}
            resizeMode="cover"
            source={require("../assets/group-6.png")}
          />
        </View>
        <Pressable
          style={styles.primarybutton}
          onPress={() => navigation.navigate("PaymentMethod")}
        >
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.titleTypo]}>Next</Text>
        </Pressable>
        <View style={[styles.namefield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/group5.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        </View>
        <View style={[styles.emailfield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group11.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>Email address</Text>
        </View>
        <View style={[styles.phonefield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Image
            style={[styles.telephone1Icon, styles.text1Position]}
            resizeMode="cover"
            source={require("../assets/telephone-11.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>Phone number</Text>
        </View>
        <View style={[styles.addressfield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Text style={[styles.name, styles.nameTypo]}>Address</Text>
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group21.png")}
          />
        </View>
        <View style={[styles.zipcodefield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Text style={[styles.zipCode, styles.nameTypo]}>Zip code</Text>
          <Image
            style={[styles.groupIcon3, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group51.png")}
          />
        </View>
        <View style={[styles.cityfield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Text style={[styles.zipCode, styles.nameTypo]}>City</Text>
          <Image
            style={[styles.groupIcon4, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/group6.png")}
          />
        </View>
        <View style={[styles.countryfield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Image
            style={styles.countryfieldItem}
            resizeMode="cover"
            source={require("../assets/polygon-21.png")}
          />
          <Text style={[styles.zipCode, styles.nameTypo]}>Country</Text>
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
      <View style={[styles.wizard, styles.wizardLayout1]}>
        <View style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector31.png")}
          />
          <Text style={[styles.delivery, styles.nameTypo]}>Delivery</Text>
        </View>
        <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Text style={[styles.text1, styles.text1Position]}>2</Text>
          <Text style={[styles.delivery, styles.nameTypo]}>Address</Text>
        </View>
        <View style={[styles.ellipseContainer, styles.wizardLayout1]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-191.png")}
          />
          <Text style={[styles.text2, styles.nameTypo]}>3</Text>
          <Text style={[styles.delivery, styles.nameTypo]}>Payment</Text>
        </View>
        <View style={[styles.wizardChild, styles.wizardLayout]} />
        <View style={[styles.wizardItem, styles.wizardLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlebarPosition: {
    height: 118,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    bottom: "2.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition1: {
    left: "0%",
    position: "absolute",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  titleTypo: {
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
  },
  namefieldPosition: {
    left: "50%",
    width: 380,
    position: "absolute",
  },
  iconLayout: {
    bottom: "30%",
    width: "6.32%",
    height: "40%",
  },
  nameTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
  },
  groupIconPosition: {
    right: "89.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Position: {
    left: 18,
    position: "absolute",
  },
  iconPosition: {
    right: "88.95%",
    top: "30%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wizardLayout1: {
    height: 61,
    position: "absolute",
  },
  ellipseLayout: {
    width: 44,
    height: 61,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 40,
    top: 0,
    position: "absolute",
  },
  wizardLayout: {
    height: 1,
    width: 87,
    borderTopWidth: 1,
    top: 20,
    position: "absolute",
  },
  backgroundIcon: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  shippingAddress: {
    top: 63,
    left: 124,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0.5,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    top: 68,
    height: 16,
    width: 23,
    left: 17,
    position: "absolute",
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
    left: 7,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    width: 40,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    top: 1,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
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
    top: 16,
    left: 4,
    width: 393,
    height: 21,
    position: "absolute",
  },
  saveThisAddress: {
    left: 37,
    fontSize: FontSize.smallBodyTextLight12_size,
    letterSpacing: 0.4,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  saveaddressChild: {
    width: 29,
    top: 1,
    height: 16,
    left: 0,
    position: "absolute",
  },
  saveaddress: {
    top: 470,
    left: 16,
    width: 149,
    height: 18,
    position: "absolute",
  },
  rectangleIcon: {
    left: "0%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    width: "100%",
  },
  title: {
    left: "45.53%",
    fontFamily: FontFamily.poppinsSemiBold,
    top: "30%",
    fontWeight: "600",
    color: Color.white,
    position: "absolute",
  },
  primarybutton: {
    top: 557,
    height: 60,
    width: 380,
    left: 0,
    position: "absolute",
  },
  namefieldChild: {
    marginLeft: -190,
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  groupIcon: {
    left: "4.47%",
    right: "89.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    top: "30%",
  },
  name: {
    top: 19,
    left: 62,
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.paragraph1_size,
    letterSpacing: 0.5,
  },
  namefield: {
    bottom: "90.28%",
    marginLeft: -190.5,
    left: "50%",
    height: "9.72%",
    top: "0%",
  },
  groupIcon1: {
    height: "29.17%",
    width: "6.05%",
    top: "35.83%",
    bottom: "35%",
    left: "4.74%",
  },
  emailfield: {
    top: "10.53%",
    bottom: "79.74%",
    marginLeft: -190.5,
    left: "50%",
    height: "9.72%",
  },
  telephone1Icon: {
    height: 23,
    top: 18,
    width: 23,
    left: 18,
    overflow: "hidden",
  },
  phonefield: {
    top: "21.07%",
    bottom: "69.21%",
    marginLeft: -190.5,
    left: "50%",
    height: "9.72%",
  },
  groupIcon2: {
    height: "43.83%",
    width: "5.32%",
    top: "28.33%",
    right: "89.45%",
    bottom: "27.83%",
    left: "5.24%",
    position: "absolute",
  },
  addressfield: {
    top: "31.6%",
    bottom: "58.67%",
    marginLeft: -190.5,
    left: "50%",
    height: "9.72%",
  },
  zipCode: {
    top: 18,
    left: 62,
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.paragraph1_size,
    letterSpacing: 0.5,
  },
  groupIcon3: {
    height: "29.83%",
    width: "6.71%",
    top: "35%",
    right: "88.76%",
    bottom: "35.17%",
    left: "4.53%",
    position: "absolute",
  },
  zipcodefield: {
    top: "42.14%",
    bottom: "48.14%",
    marginLeft: -190.5,
    left: "50%",
    height: "9.72%",
  },
  groupIcon4: {
    height: "40.17%",
    width: "6.34%",
    bottom: "29.83%",
    left: "4.71%",
  },
  cityfield: {
    marginLeft: -189.5,
    top: "52.67%",
    bottom: "37.6%",
    height: "9.72%",
    left: "50%",
  },
  countryfieldItem: {
    top: 24,
    left: 343,
    width: 14,
    height: 11,
    position: "absolute",
  },
  vectorIcon: {
    left: "4.74%",
    bottom: "30%",
    width: "6.32%",
    height: "40%",
  },
  countryfield: {
    top: "63.21%",
    bottom: "27.07%",
    marginLeft: -190.5,
    left: "50%",
    height: "9.72%",
  },
  body: {
    top: 243,
    width: 381,
    height: 617,
    left: 17,
    position: "absolute",
  },
  groupChild: {
    left: 2,
  },
  vectorIcon1: {
    height: "19.67%",
    width: "36.36%",
    top: "22.95%",
    right: "31.82%",
    bottom: "57.38%",
    left: "31.82%",
    position: "absolute",
  },
  delivery: {
    top: 46,
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    textAlign: "center",
    left: 0,
  },
  ellipseParent: {
    left: 0,
  },
  text1: {
    top: 8,
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
    left: 18,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  ellipseGroup: {
    left: 126,
  },
  groupInner: {
    left: 3,
  },
  text2: {
    top: 9,
    left: 19,
    fontSize: FontSize.paragraph1_size,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  ellipseContainer: {
    left: 251,
    width: 46,
    top: 0,
    height: 61,
  },
  wizardChild: {
    left: 42,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_400,
  },
  wizardItem: {
    left: 168,
    borderStyle: "dashed",
    borderColor: Color.colorWhitesmoke_300,
    borderRadius: 0.001,
  },
  wizard: {
    top: 140,
    left: 59,
    width: 297,
  },
  shippingInformation: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ShippingInformation;
