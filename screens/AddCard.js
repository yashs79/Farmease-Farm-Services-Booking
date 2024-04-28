import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  Switch,
} from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AddCard = () => {
  const [expireFieldDatePicker, setExpireFieldDatePicker] = useState(undefined);
  const [groupSwitchSwitchValueState, setGroupSwitchSwitchValueState] =
    useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.addCard}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.body, styles.bodyLayout]}>
        <Pressable style={[styles.primarybutton, styles.bodyLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.cardIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={styles.title}>Add credit card</Text>
        </Pressable>
        <View style={[styles.card, styles.cardLayout]}>
          <Image
            style={[styles.cardChild, styles.cardIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-33.png")}
          />
          <Image
            style={styles.cardLayout}
            resizeMode="cover"
            source={require("../assets/subtract.png")}
          />
          <Image
            style={[styles.cardItem, styles.cardIconLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-4.png")}
          />
          <Image
            style={[styles.cardInner, styles.cardIconLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-3.png")}
          />
          <Text style={[styles.xxxx, styles.xxxxCardTypo]}>XXXX</Text>
          <Text style={[styles.cardHolder, styles.expiresTypo]}>
            Card holder
          </Text>
          <Text style={[styles.expires, styles.expiresTypo]}>Expires</Text>
          <Text style={[styles.russellAustin, styles.textTypo]}>
            Russell austin
          </Text>
          <Text style={[styles.text, styles.textTypo]}>01 / 22</Text>
          <Text style={[styles.xxxx1, styles.xxxxCardTypo]}>XXXX</Text>
          <Text style={[styles.xxxx2, styles.xxxxCardTypo]}>XXXX</Text>
          <Text style={[styles.text1, styles.xxxxCardTypo]}>8790</Text>
          <Image
            style={[styles.ellipseIcon, styles.cardChild1Layout]}
            resizeMode="cover"
            source={require("../assets/ellipse-24.png")}
          />
          <Image
            style={[styles.cardChild1, styles.cardChild1Layout]}
            resizeMode="cover"
            source={require("../assets/ellipse-23.png")}
          />
          <Image
            style={[styles.groupIcon, styles.cardIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-138.png")}
          />
        </View>
        <TextInput
          style={[styles.namefield, styles.cvvfieldTypo]}
          placeholder="Name on the card"
          placeholderTextColor="#868889"
        />
        <TextInput
          style={[styles.numberfield, styles.cvvfieldTypo]}
          placeholder="Card number"
          placeholderTextColor="#868889"
        />
        <RNKDatepicker
          placeholder={() => (
            <Text style={styles.expireFieldDatePickerPlaceHolder}>
              Month / Year
            </Text>
          )}
          date={expireFieldDatePicker}
          onSelect={setExpireFieldDatePicker}
          controlStyle={styles.expireFieldDatePickerValue}
        />
        <TextInput
          style={[styles.cvvfield, styles.cvvfieldTypo]}
          placeholder="CVV"
          placeholderTextColor="#868889"
        />
        <View style={styles.savecard}>
          <Text style={[styles.saveThisCard, styles.cardClr]}>
            Save this card
          </Text>
          <Switch
            style={[styles.savecardChild, styles.backarrowLayout]}
            value={groupSwitchSwitchValueState}
            onValueChange={setGroupSwitchSwitchValueState}
            thumbColor="#fff"
            trackColor={{ false: "#939393", true: "#6cc51d" }}
          />
        </View>
      </View>
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.addCreditCard, styles.cardClr]}>
          Add Credit Card
        </Text>
        <Pressable
          style={[styles.backarrow, styles.backarrowLayout]}
          onPress={() => navigation.navigate("MyCards")}
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
            style={[styles.batteryIcon, styles.cardIconLayout]}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
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
            <Text style={[styles.text2, styles.cardClr]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expireFieldDatePickerPlaceHolder: {
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "#868889",
    fontSize: 15,
  },
  expireFieldDatePickerValue: {},
  bodyLayout: {
    width: 380,
    position: "absolute",
  },
  cardIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardLayout: {
    height: 189,
    width: 380,
  },
  xxxxCardTypo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  expiresTypo: {
    textTransform: "uppercase",
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    top: "75.66%",
    textAlign: "left",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    color: Color.white,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: 0.4,
    fontSize: FontSize.smallBodyTextLight12_size,
  },
  cardChild1Layout: {
    bottom: "73.54%",
    top: "8.47%",
    width: "8.95%",
    height: "17.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cvvfieldTypo: {
    left: "50%",
    height: "8.46%",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  cardClr: {
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  backarrowLayout: {
    height: 16,
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
  iconPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  title: {
    top: "30%",
    left: "34.47%",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  primarybutton: {
    top: 649,
    height: 60,
    left: 0,
  },
  cardChild: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  cardItem: {
    height: "7.41%",
    width: "3.68%",
    top: "76.72%",
    right: "5%",
    bottom: "15.87%",
    left: "91.32%",
  },
  cardInner: {
    height: "10.58%",
    width: "5.26%",
    top: "26.46%",
    right: "11.05%",
    bottom: "62.96%",
    left: "83.68%",
  },
  xxxx: {
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    left: "5.53%",
    top: "32.28%",
    color: Color.white,
    position: "absolute",
  },
  cardHolder: {
    left: "5.53%",
  },
  expires: {
    left: "77.89%",
  },
  russellAustin: {
    top: "83.07%",
    fontSize: FontSize.smallBodyTextLight12_size,
    textTransform: "uppercase",
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    textAlign: "left",
    left: "5.53%",
  },
  text: {
    left: "77.63%",
    textAlign: "right",
    top: "83.07%",
    fontSize: FontSize.smallBodyTextLight12_size,
    textTransform: "uppercase",
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  xxxx1: {
    left: "20.79%",
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: "32.28%",
    color: Color.white,
    position: "absolute",
  },
  xxxx2: {
    left: "36.05%",
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: "32.28%",
    color: Color.white,
    position: "absolute",
  },
  text1: {
    left: "51.32%",
    textAlign: "left",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: "32.28%",
    color: Color.white,
    position: "absolute",
  },
  ellipseIcon: {
    right: "78.68%",
    left: "12.37%",
  },
  cardChild1: {
    right: "85.53%",
    opacity: 0.8,
    left: "5.53%",
  },
  groupIcon: {
    height: "5.82%",
    width: "0.79%",
    top: "5.82%",
    right: "2.37%",
    bottom: "88.36%",
    left: "96.84%",
  },
  card: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  namefield: {
    top: "29.2%",
    bottom: "62.34%",
    marginLeft: -190,
    left: "50%",
    height: "8.46%",
    width: 380,
  },
  numberfield: {
    top: "38.36%",
    bottom: "53.17%",
    marginLeft: -190,
    left: "50%",
    height: "8.46%",
    width: 380,
  },
  cvvfield: {
    marginLeft: 3,
    top: "47.53%",
    bottom: "44.01%",
    width: 187,
    left: "50%",
    height: "8.46%",
  },
  saveThisCard: {
    left: 37,
    letterSpacing: 0.4,
    fontSize: FontSize.smallBodyTextLight12_size,
    textAlign: "left",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: 0,
  },
  savecardChild: {
    width: 29,
    top: 1,
    left: 0,
  },
  savecard: {
    top: 415,
    width: 128,
    height: 18,
    left: 17,
    position: "absolute",
  },
  body: {
    top: 151,
    height: 709,
    left: 17,
  },
  titlebarChild: {
    backgroundColor: Color.white,
    height: 118,
  },
  addCreditCard: {
    top: 63,
    left: 130,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    textAlign: "center",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
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
  text2: {
    left: 7,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    width: 40,
    top: 1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    color: Color.labelColorLightPrimary,
  },
  time: {
    borderRadius: Border.br_5xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
  },
  leftSide: {
    width: "14.45%",
    right: "85.55%",
    left: "0%",
    position: "absolute",
  },
  actionbar: {
    top: 16,
    left: 4,
    width: 393,
    height: 21,
    position: "absolute",
  },
  addCard: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AddCard;
