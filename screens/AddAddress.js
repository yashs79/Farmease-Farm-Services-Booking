import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Switch,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AddAddress = () => {
  const [groupSwitchSwitchValueState, setGroupSwitchSwitchValueState] =
    useState(false);
  const [countryFieldOpen, setCountryFieldOpen] = useState(false);
  const [countryFieldValue, setCountryFieldValue] = useState();
  const [countryFieldItems, setCountryFieldItems] = useState([
    { value: "INDIA", label: "INDIA" },
    { value: "USA", label: "USA" },
    { value: "CHINA", label: "CHINA" },
    { value: "UK", label: "UK" },
    { value: "FRANCE", label: "FRANCE" },
    { value: "GERMANY", label: "GERMANY" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.addAddress}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={styles.addAddress1}>Add Address</Text>
        <Pressable
          style={[styles.backarrow, styles.backarrowLayout]}
          onPress={() => navigation.navigate("IPhone11ProX")}
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
            style={[styles.batteryIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/mobile-signal1.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.iconPosition]}>
          <View style={[styles.time, styles.iconPosition]}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.body, styles.bodyPosition]}>
        <Pressable
          style={styles.primarybutton}
          onPress={() => navigation.navigate("PaymentMethod1")}
        >
          <Image
            style={[styles.rectangleIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.textTypo]}>Add address</Text>
        </Pressable>
        <View style={[styles.saveaddress, styles.bodyPosition]}>
          <Text style={styles.saveThisAddress}>Save this address</Text>
          <Switch
            style={[styles.saveaddressChild, styles.backarrowLayout]}
            value={groupSwitchSwitchValueState}
            onValueChange={setGroupSwitchSwitchValueState}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#6cc51d" }}
          />
        </View>
        <View
          style={[styles.namefield, styles.namefieldPosition]}
          placeholder="Name"
        />
        <TextInput
          style={[styles.emailfield, styles.namefieldPosition]}
          placeholder="Email address"
          placeholderTextColor="#868889"
        />
        <TextInput
          style={[styles.phonefield, styles.namefieldPosition]}
          placeholder="Phone number"
          placeholderTextColor="#868889"
        />
        <TextInput
          style={[styles.addressfield, styles.namefieldPosition]}
          placeholder="Address"
          placeholderTextColor="#868889"
        />
        <TextInput
          style={[styles.zipcodefield, styles.namefieldPosition]}
          placeholder="Zip code"
          placeholderTextColor="#868889"
        />
        <TextInput
          style={[styles.cityfield, styles.namefieldPosition]}
          placeholder="City"
          placeholderTextColor="#868889"
        />
        <View style={[styles.countryfield, styles.namefieldPosition]}>
          <DropDownPicker
            open={countryFieldOpen}
            setOpen={setCountryFieldOpen}
            value={countryFieldValue}
            setValue={setCountryFieldValue}
            placeholder="Country"
            items={countryFieldItems}
            labelStyle={styles.countryFieldValue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countryFieldValue: {
    color: "#868889",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  titlebarPosition: {
    height: 118,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backarrowLayout: {
    height: 16,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
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
  textTypo: {
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
    position: "absolute",
  },
  bodyPosition: {
    left: 16,
    position: "absolute",
  },
  namefieldPosition: {
    left: "50%",
    height: "8.5%",
    width: 380,
    position: "absolute",
  },
  backgroundIcon: {
    width: 414,
    top: 0,
    left: 0,
    position: "absolute",
    height: 896,
  },
  titlebarChild: {
    backgroundColor: Color.white,
    height: 118,
  },
  addAddress1: {
    top: 63,
    left: 147,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    left: 17,
    top: 68,
    width: 23,
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
    top: 1,
    color: Color.labelColorLightPrimary,
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
    top: 16,
    left: 4,
    width: 393,
    height: 21,
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs,
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  title: {
    top: "30%",
    left: "37.37%",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
  },
  primarybutton: {
    top: 646,
    left: 1,
    height: 60,
    width: 380,
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
    left: 0,
    height: 16,
  },
  saveaddress: {
    top: 470,
    width: 149,
    height: 18,
  },
  namefield: {
    bottom: "91.5%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
    top: "0%",
  },
  emailfield: {
    top: "9.21%",
    bottom: "82.29%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  phonefield: {
    top: "18.41%",
    bottom: "73.09%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  addressfield: {
    top: "27.62%",
    bottom: "63.88%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  zipcodefield: {
    top: "36.83%",
    bottom: "54.67%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  cityfield: {
    marginLeft: -189.5,
    top: "46.03%",
    bottom: "45.47%",
    left: "50%",
    height: "8.5%",
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  countryfield: {
    top: "55.24%",
    bottom: "36.26%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
  },
  body: {
    top: 154,
    width: 381,
    height: 706,
  },
  addAddress: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AddAddress;
