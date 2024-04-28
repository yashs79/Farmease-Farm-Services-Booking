import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ShippingMethod = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shippingMethod}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.body, styles.bodyLayout]}>
        <View style={[styles.standarddelivery, styles.standarddeliveryLayout]}>
          <View
            style={[
              styles.standarddeliveryChild,
              styles.standarddeliveryLayout,
            ]}
          />
          <View
            style={[
              styles.standardDeliveryParent,
              styles.deliveryParentPosition,
            ]}
          >
            <Text style={[styles.standardDelivery, styles.textFlexBox]}>
              Standard Delivery
            </Text>
            <Text
              style={[styles.orderWillBe, styles.textFlexBox]}
            >{`Order will be delivered between 3 - 4 business
days straights to your doorstep.`}</Text>
          </View>
          <Text style={[styles.text, styles.textTypo1]}>$3</Text>
        </View>
        <View style={[styles.nextdelivery, styles.standarddeliveryLayout]}>
          <View
            style={[
              styles.standarddeliveryChild,
              styles.standarddeliveryLayout,
            ]}
          />
          <View
            style={[
              styles.nextDayDeliveryParent,
              styles.deliveryParentPosition,
            ]}
          >
            <Text style={[styles.standardDelivery, styles.textFlexBox]}>
              Next Day Delivery
            </Text>
            <Text
              style={[styles.orderWillBe, styles.textFlexBox]}
            >{`Order will be delivered within 24 hours 
straights to your doorstep.`}</Text>
          </View>
          <Text style={[styles.text, styles.textTypo1]}>$5</Text>
        </View>
        <View style={[styles.nominated, styles.standarddeliveryLayout]}>
          <View
            style={[
              styles.standarddeliveryChild,
              styles.standarddeliveryLayout,
            ]}
          />
          <View
            style={[styles.ecoDeliveryParent, styles.deliveryParentPosition]}
          >
            <Text style={[styles.standardDelivery, styles.textFlexBox]}>
              Eco Delivery
            </Text>
            <Text
              style={[styles.orderWillBe, styles.textFlexBox]}
            >{`Order will be delivered between 3 - 4 business
using sustainable logistics`}</Text>
          </View>
          <Text style={[styles.text, styles.textTypo1]}>$3</Text>
        </View>
        <View style={[styles.primarybutton, styles.bodyLayout]}>
          <Pressable
            style={[styles.rectangle, styles.timePosition]}
            onPress={() => navigation.navigate("ShippingInformation")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
          </Pressable>
          <Text style={[styles.title, styles.titleFlexBox]}>Next</Text>
        </View>
      </View>
      <View style={[styles.wizard, styles.wizardLayout1]}>
        <View style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>1</Text>
          <Text style={[styles.delivery, styles.titleFlexBox]}>Delivery</Text>
        </View>
        <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-191.png")}
          />
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.delivery, styles.titleFlexBox]}>Address</Text>
        </View>
        <View style={[styles.ellipseContainer, styles.wizardLayout1]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-191.png")}
          />
          <Text style={[styles.text5, styles.titleFlexBox]}>3</Text>
          <Text style={[styles.delivery, styles.titleFlexBox]}>Payment</Text>
        </View>
        <View style={[styles.wizardChild, styles.wizardLayout]} />
        <View style={[styles.wizardItem, styles.wizardLayout]} />
      </View>
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.shippingMethod1, styles.titleFlexBox]}>
          Shipping Method
        </Text>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("Cart1")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/backarrow.png")}
          />
        </Pressable>
      </View>
      <View style={styles.actionbar}>
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
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
            <Text style={styles.text6}>9:41</Text>
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
  standarddeliveryLayout: {
    height: 116,
    width: 380,
    left: 0,
    position: "absolute",
  },
  deliveryParentPosition: {
    height: 71,
    top: 23,
    left: 17,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  timePosition: {
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  titleFlexBox: {
    textAlign: "center",
    position: "absolute",
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
  textTypo: {
    top: 8,
    textAlign: "center",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  wizardLayout: {
    height: 1,
    width: 87,
    borderTopWidth: 1,
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
  backgroundIcon: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  standarddeliveryChild: {
    top: 0,
    backgroundColor: Color.white,
  },
  standardDelivery: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    left: 0,
    top: 0,
  },
  orderWillBe: {
    top: 35,
    fontSize: FontSize.smallBodyTextLight12_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    left: 0,
  },
  standardDeliveryParent: {
    width: 274,
  },
  text: {
    left: 343,
    color: Color.colorYellowgreen_400,
    top: 46,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.paragraph1_size,
  },
  standarddelivery: {
    top: 0,
  },
  nextDayDeliveryParent: {
    width: 230,
  },
  nextdelivery: {
    top: 134,
  },
  ecoDeliveryParent: {
    width: 276,
  },
  nominated: {
    top: 268,
  },
  icon: {
    borderRadius: Border.br_8xs,
    width: "100%",
  },
  rectangle: {
    height: "100%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  title: {
    top: "30%",
    left: "45.53%",
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
  },
  primarybutton: {
    top: 544,
    height: 60,
    left: 0,
  },
  body: {
    top: 253,
    height: 604,
    left: 17,
  },
  groupChild: {
    left: 2,
  },
  text3: {
    left: 20,
    color: Color.white,
  },
  delivery: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: 46,
    color: Color.colorGray_200,
    left: 0,
  },
  ellipseParent: {
    left: 0,
  },
  text4: {
    left: 18,
    color: Color.colorGray_200,
  },
  ellipseGroup: {
    left: 126,
  },
  groupInner: {
    left: 3,
  },
  text5: {
    top: 9,
    left: 19,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    color: Color.colorGray_200,
    fontSize: FontSize.paragraph1_size,
  },
  ellipseContainer: {
    left: 251,
    width: 46,
    top: 0,
  },
  wizardChild: {
    left: 42,
    borderColor: Color.colorYellowgreen_400,
  },
  wizardItem: {
    left: 168,
    borderColor: Color.colorWhitesmoke_300,
  },
  wizard: {
    top: 140,
    left: 59,
    width: 297,
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  shippingMethod1: {
    top: 63,
    left: 127,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    color: Color.labelColorLightPrimary,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    top: 68,
    width: 23,
    height: 16,
    left: 17,
    position: "absolute",
  },
  batteryIcon: {
    width: "36.52%",
    left: "63.48%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
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
  text6: {
    top: 1,
    left: 7,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    width: 40,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    height: "100%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  leftSide: {
    width: "14.45%",
    right: "85.55%",
    height: "100%",
    left: "0%",
  },
  actionbar: {
    top: 16,
    left: 4,
    width: 393,
    height: 21,
    position: "absolute",
  },
  shippingMethod: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ShippingMethod;
