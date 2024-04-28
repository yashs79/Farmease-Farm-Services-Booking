import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PaymentMethod = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentMethod}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.body, styles.bodyLayout]}>
        <Pressable
          style={[styles.primarybutton, styles.bodyLayout]}
          onPress={() => navigation.navigate("OrderSuccess")}
        >
          <Image
            style={[styles.rectangleIcon, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.title, styles.titleTypo]}>Make a payment</Text>
        </Pressable>
        <View style={styles.paymentmethod}>
          <View style={[styles.paymentmethodInner, styles.paymentmethodLayout]}>
            <View style={styles.groupShadowBox} />
          </View>
          <View style={[styles.rectangleParent, styles.paymentmethodLayout]}>
            <View style={styles.groupShadowBox} />
            <View style={styles.creditCardParent}>
              <Text style={[styles.creditCard, styles.deliveryClr]}>
                Credit Card
              </Text>
              <Image
                style={[styles.groupInner, styles.cardItemLayout]}
                resizeMode="cover"
                source={require("../assets/group-1301.png")}
              />
            </View>
          </View>
          <View style={[styles.paymentmethodChild, styles.paymentmethodLayout]}>
            <View style={styles.groupShadowBox} />
          </View>
        </View>
        <View style={[styles.namefield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group5.png")}
          />
          <Text style={[styles.nameOnThe, styles.nameOnTheTypo]}>
            Name on the card
          </Text>
        </View>
        <View style={[styles.numberfield, styles.namefieldPosition]}>
          <View style={[styles.namefieldChild, styles.namefieldPosition]} />
          <Image
            style={[styles.numberfieldItem, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/group-13011.png")}
          />
          <Text style={[styles.nameOnThe, styles.nameOnTheTypo]}>
            Card number
          </Text>
        </View>
        <View style={[styles.expirefield, styles.expirefieldPosition]}>
          <View style={[styles.expirefieldChild, styles.expirefieldPosition]} />
          <Text style={[styles.monthYear, styles.nameOnTheTypo]}>
            Month / Year
          </Text>
          <Image
            style={styles.calendar1Icon}
            resizeMode="cover"
            source={require("../assets/calendar-1.png")}
          />
        </View>
        <View style={[styles.cvvfield, styles.expirefieldPosition]}>
          <View style={[styles.expirefieldChild, styles.expirefieldPosition]} />
          <Image
            style={[styles.cvvfieldItem, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group-5.png")}
          />
          <Text style={[styles.monthYear, styles.nameOnTheTypo]}>CVV</Text>
        </View>
        <View style={styles.savecard}>
          <Text style={styles.saveThisCard}>Save this card</Text>
          <Image
            style={[styles.savecardChild, styles.backarrowLayout]}
            resizeMode="cover"
            source={require("../assets/group-6.png")}
          />
        </View>
        <View style={[styles.card, styles.cardLayout]}>
          <Image
            style={[styles.cardChild, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-33.png")}
          />
          <Image
            style={styles.cardLayout}
            resizeMode="cover"
            source={require("../assets/subtract.png")}
          />
          <Image
            style={[styles.cardItem, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-4.png")}
          />
          <Image
            style={[styles.cardInner, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-3.png")}
          />
          <Text style={[styles.xxxx, styles.xxxxTypo]}>XXXX</Text>
          <Text style={[styles.cardHolder, styles.expiresTypo]}>
            Card holder
          </Text>
          <Text style={[styles.expires, styles.expiresTypo]}>Expires</Text>
          <Text style={[styles.russellAustin, styles.textTypo]}>
            Yash Sharma
          </Text>
          <Text style={[styles.text, styles.textTypo]}>06 / 25</Text>
          <Text style={[styles.xxxx1, styles.xxxxTypo]}>XXXX</Text>
          <Text style={[styles.xxxx2, styles.xxxxTypo]}>XXXX</Text>
          <Text style={[styles.text1, styles.xxxxTypo]}>8790</Text>
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
            style={[styles.cardChild2, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/group-138.png")}
          />
        </View>
      </View>
      <View style={[styles.wizard, styles.wizardLayout1]}>
        <View style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector31.png")}
          />
          <Text style={[styles.delivery, styles.expiresTypo]}>Delivery</Text>
        </View>
        <View style={[styles.ellipseGroup, styles.ellipseGroupPosition]}>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.cardItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector31.png")}
          />
          <Text style={[styles.delivery, styles.expiresTypo]}>Address</Text>
        </View>
        <View style={[styles.ellipseContainer, styles.wizardLayout1]}>
          <Image
            style={[styles.groupChild3, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Text style={[styles.text2, styles.text2Typo]}>3</Text>
          <Text style={[styles.delivery, styles.expiresTypo]}>Payment</Text>
        </View>
        <View style={[styles.wizardChild, styles.wizardLayout]} />
        <View style={[styles.wizardItem, styles.wizardLayout]} />
      </View>
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.paymentMethod1, styles.ellipseGroupPosition]}>
          Payment Method
        </Text>
        <Pressable
          style={[styles.backarrow, styles.backarrowLayout]}
          onPress={() => navigation.navigate("ShippingInformation")}
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
            style={[styles.batteryIcon, styles.cardItemLayout]}
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
            <Text style={styles.text3}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.bhimUpiIcon}
        resizeMode="cover"
        source={require("../assets/bhim-upi.png")}
      />
      <Image
        style={styles.googlePayIcon}
        resizeMode="cover"
        source={require("../assets/google-pay.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyLayout: {
    width: 380,
    position: "absolute",
  },
  cardItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
  },
  paymentmethodLayout: {
    width: 112,
    height: 102,
    top: 0,
    position: "absolute",
  },
  deliveryClr: {
    color: Color.colorGray_200,
    left: 0,
  },
  namefieldPosition: {
    left: "50%",
    marginLeft: -190,
    width: 380,
    position: "absolute",
  },
  groupIconPosition: {
    top: "30%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameOnTheTypo: {
    letterSpacing: 0.5,
    top: 19,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  expirefieldPosition: {
    width: 187,
    left: "50%",
    position: "absolute",
  },
  backarrowLayout: {
    height: 16,
    position: "absolute",
  },
  cardLayout: {
    height: 189,
    width: 380,
  },
  xxxxTypo: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  expiresTypo: {
    textTransform: "uppercase",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo: {
    top: "83.07%",
    textTransform: "uppercase",
    letterSpacing: 0.4,
    fontSize: FontSize.smallBodyTextLight12_size,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
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
  wizardLayout1: {
    height: 61,
    position: "absolute",
  },
  ellipseLayout: {
    width: 44,
    height: 61,
    top: 0,
  },
  groupChildLayout: {
    height: 40,
    width: 40,
    top: 0,
    position: "absolute",
  },
  ellipseGroupPosition: {
    left: 126,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
  },
  wizardLayout: {
    height: 1,
    width: 87,
    borderTopWidth: 1,
    borderColor: Color.colorYellowgreen_400,
    borderStyle: "solid",
    top: 20,
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
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  title: {
    left: "32.63%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    top: "30%",
    position: "absolute",
  },
  primarybutton: {
    top: 579,
    height: 60,
    left: 0,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 112,
    height: 102,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  paymentmethodInner: {
    left: 0,
  },
  creditCard: {
    top: 40,
    textAlign: "left",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_200,
  },
  groupInner: {
    height: "37.64%",
    width: "50%",
    right: "25.81%",
    bottom: "62.36%",
    left: "24.19%",
    top: "0%",
  },
  creditCardParent: {
    top: 24,
    left: 25,
    width: 62,
    height: 55,
    position: "absolute",
  },
  rectangleParent: {
    left: 134,
  },
  paymentmethodChild: {
    left: 268,
  },
  paymentmethod: {
    height: 102,
    width: 380,
    left: 0,
    top: 0,
    position: "absolute",
  },
  namefieldChild: {
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  groupIcon: {
    height: "40%",
    width: "6.32%",
    right: "89.21%",
    bottom: "30%",
    left: "4.47%",
  },
  nameOnThe: {
    left: 62,
  },
  namefield: {
    top: "51.17%",
    bottom: "39.44%",
    height: "9.39%",
    left: "50%",
  },
  numberfieldItem: {
    height: "28.83%",
    width: "6.84%",
    top: "36.17%",
    right: "89.08%",
    bottom: "35%",
    left: "4.08%",
  },
  numberfield: {
    top: "61.35%",
    bottom: "29.26%",
    height: "9.39%",
    left: "50%",
  },
  expirefieldChild: {
    marginLeft: -93.5,
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  monthYear: {
    left: 61,
  },
  calendar1Icon: {
    width: 22,
    height: 22,
    top: 19,
    left: 17,
    position: "absolute",
    overflow: "hidden",
  },
  expirefield: {
    bottom: "19.09%",
    top: "71.52%",
    width: 187,
    height: "9.39%",
    marginLeft: -190,
  },
  cvvfieldItem: {
    height: "38.33%",
    width: "9.25%",
    right: "80.59%",
    bottom: "31.67%",
    left: "10.16%",
  },
  cvvfield: {
    marginLeft: 3,
    bottom: "19.09%",
    top: "71.52%",
    width: 187,
    height: "9.39%",
  },
  saveThisCard: {
    left: 37,
    color: Color.labelColorLightPrimary,
    letterSpacing: 0.4,
    fontSize: FontSize.smallBodyTextLight12_size,
    textAlign: "left",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  savecardChild: {
    width: 29,
    top: 1,
    height: 16,
    left: 0,
  },
  savecard: {
    top: 535,
    width: 128,
    height: 18,
    left: 17,
    position: "absolute",
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
    left: "5.53%",
    top: "32.28%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  cardHolder: {
    top: "75.66%",
    textTransform: "uppercase",
    textAlign: "left",
    letterSpacing: 0.3,
    color: Color.white,
    left: "5.53%",
  },
  expires: {
    left: "77.89%",
    top: "75.66%",
    textTransform: "uppercase",
    textAlign: "left",
    letterSpacing: 0.3,
    color: Color.white,
  },
  russellAustin: {
    left: "5.53%",
    textAlign: "left",
  },
  text: {
    left: "76.58%",
    textAlign: "right",
  },
  xxxx1: {
    left: "20.79%",
    top: "32.28%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  xxxx2: {
    left: "36.05%",
    top: "32.28%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  text1: {
    left: "51.32%",
    top: "32.28%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
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
  cardChild2: {
    height: "5.82%",
    width: "0.79%",
    top: "5.82%",
    right: "2.37%",
    bottom: "88.36%",
    left: "96.84%",
  },
  card: {
    top: 120,
    left: 0,
    position: "absolute",
  },
  body: {
    top: 221,
    height: 639,
    left: 17,
  },
  groupChild1: {
    left: 2,
  },
  vectorIcon: {
    height: "19.67%",
    width: "36.36%",
    top: "22.95%",
    right: "31.82%",
    bottom: "57.38%",
    left: "31.82%",
  },
  delivery: {
    top: 46,
    color: Color.colorGray_200,
    left: 0,
    textAlign: "center",
  },
  ellipseParent: {
    left: 0,
    position: "absolute",
  },
  ellipseGroup: {
    width: 44,
    height: 61,
    top: 0,
  },
  groupChild3: {
    left: 3,
  },
  text2: {
    top: 9,
    left: 19,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    fontWeight: "500",
  },
  ellipseContainer: {
    left: 251,
    width: 46,
    top: 0,
    height: 61,
  },
  wizardChild: {
    left: 42,
  },
  wizardItem: {
    left: 168,
  },
  wizard: {
    top: 140,
    left: 59,
    width: 297,
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  paymentMethod1: {
    top: 63,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    color: Color.labelColorLightPrimary,
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
  text3: {
    left: 7,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    width: 40,
    top: 1,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
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
    top: 16,
    left: 4,
    width: 393,
    height: 21,
    position: "absolute",
  },
  bhimUpiIcon: {
    top: 227,
    left: 33,
    width: 80,
    height: 80,
    position: "absolute",
  },
  googlePayIcon: {
    top: 234,
    left: 307,
    width: 70,
    height: 70,
    position: "absolute",
  },
  paymentMethod: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PaymentMethod;
