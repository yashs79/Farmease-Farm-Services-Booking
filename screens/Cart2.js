import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Cart2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart}>
      <Image
        style={[styles.backgroundIcon, styles.cartChildPosition]}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.serviceCart, styles.totalClr]}>Service Cart</Text>
        <Pressable
          style={[styles.backarrow, styles.cartItemPosition]}
          onPress={() => navigation.navigate("IPhone11ProX")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backarrow.png")}
          />
        </Pressable>
      </View>
      <View style={styles.cartitemWrapper}>
        <View style={styles.cartitemLayout}>
          <View style={[styles.cartitemChild, styles.x4ParentPosition]} />
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-37.png")}
            />
            <Text style={[styles.text, styles.x4Typo1]}>5</Text>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-38.png")}
            />
          </View>
          <Text style={[styles.weedControl, styles.weedControlTypo]}>
            Weed Control
          </Text>
        </View>
      </View>
      <View style={[styles.cartitem1, styles.cartitemLayout]}>
        <View style={[styles.cartitemChild, styles.x4ParentPosition]} />
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.groupInner, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-16.png")}
            />
            <Image
              style={[styles.peach241Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/peach24-1.png")}
            />
          </View>
          <Image
            style={styles.greenFreshBroccoliIcon}
            resizeMode="cover"
            source={require("../assets/greenfreshbroccoli.png")}
          />
        </View>
        <View style={styles.cartitemInner}>
          <View style={[styles.x4Parent, styles.x4ParentPosition]}>
            <Text style={[styles.x4, styles.x4Typo]}>$2.22 x 4</Text>
            <Text style={[styles.lbs, styles.x4Typo]}>1.50 lbs</Text>
            <Text style={[styles.freshBroccoli, styles.weedControlTypo]}>
              Soil Testing
            </Text>
          </View>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-371.png")}
          />
          <Text style={[styles.text, styles.x4Typo1]}>5</Text>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-38.png")}
          />
        </View>
      </View>
      <View style={[styles.cartChild, styles.cartChildPosition]} />
      <Pressable
        style={[styles.primarybutton, styles.primarybuttonPosition]}
        onPress={() => navigation.navigate("AddAddress")}
      >
        <Image
          style={[styles.rectangleIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.title, styles.titleTypo]}>Checkout</Text>
      </Pressable>
      <View style={[styles.subtotalParent, styles.primarybuttonPosition]}>
        <Text style={[styles.subtotal, styles.x4Typo]}>Subtotal</Text>
        <Text style={[styles.shippingCharges, styles.freeTypo]}>
          Shipping charges
        </Text>
        <Text style={[styles.rs998, styles.x4Typo]}>RS 998</Text>
        <Text style={[styles.free, styles.freeTypo]}>FREE</Text>
      </View>
      <View style={[styles.totalParent, styles.cartItemPosition]}>
        <Text style={[styles.total, styles.titleTypo]}>Total</Text>
        <Text style={[styles.text2, styles.titleTypo]}>998</Text>
      </View>
      <View style={[styles.cartItem, styles.cartItemPosition]} />
      <Image
        style={[styles.trashIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/trash.png")}
      />
      <Image
        style={styles.rupeeIcon}
        resizeMode="cover"
        source={require("../assets/rupee.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartChildPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  titlebarPosition: {
    height: 118,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  totalClr: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_lg,
  },
  cartItemPosition: {
    left: 17,
    position: "absolute",
  },
  x4ParentPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  x4Typo1: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  groupLayout: {
    height: 0,
    position: "absolute",
  },
  weedControlTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  cartitemLayout: {
    height: 100,
    width: 380,
  },
  x4Typo: {
    fontSize: FontSize.smallBodyTextLight12_size,
    textAlign: "left",
    position: "absolute",
  },
  primarybuttonPosition: {
    width: 380,
    left: 17,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  freeTypo: {
    top: 25,
    fontSize: FontSize.smallBodyTextLight12_size,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
  },
  backgroundIcon: {
    top: 0,
    height: 896,
    width: 414,
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  serviceCart: {
    top: 62,
    left: 149,
    letterSpacing: 0.5,
    textAlign: "center",
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
    width: 23,
    height: 16,
  },
  cartitemChild: {
    left: "0%",
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    width: "85.94%",
    right: "14.06%",
    bottom: "82.65%",
    height: "17.35%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
  },
  text: {
    top: "41.18%",
    left: "7.81%",
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.paragraph1_size,
    position: "absolute",
  },
  groupItem: {
    top: "100%",
    maxWidth: "100%",
    height: 0,
    left: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  groupParent: {
    height: "68%",
    width: "3.37%",
    top: "16%",
    right: "5.05%",
    bottom: "16%",
    left: "91.58%",
    position: "absolute",
  },
  weedControl: {
    top: "41%",
    left: "22.63%",
  },
  cartitemWrapper: {
    top: 245,
    left: -73,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  groupInner: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  peach241Icon: {
    height: "85.78%",
    width: "108.28%",
    top: "26.09%",
    bottom: "-11.88%",
    left: "-8.28%",
    display: "none",
    right: "0%",
  },
  ellipseParent: {
    width: 64,
    height: 64,
    display: "none",
    position: "absolute",
  },
  greenFreshBroccoliIcon: {
    width: 55,
    height: 56,
    display: "none",
    position: "absolute",
  },
  groupContainer: {
    top: "14.2%",
    left: "3.95%",
    width: 0,
  },
  x4: {
    top: "-80.95%",
    color: Color.colorYellowgreen_400,
    display: "none",
    left: "0%",
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
  },
  lbs: {
    top: "104.76%",
    fontFamily: FontFamily.poppinsRegular,
    display: "none",
    color: Color.colorGray_200,
    left: "0%",
  },
  freshBroccoli: {
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  x4Parent: {
    left: "0%",
    position: "absolute",
  },
  cartitemInner: {
    height: "21%",
    width: "24.21%",
    top: "39%",
    right: "49.21%",
    bottom: "40%",
    left: "26.58%",
    position: "absolute",
  },
  groupIcon: {
    bottom: "82.65%",
    height: "17.35%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  cartitem1: {
    top: 144,
    left: 17,
    position: "absolute",
  },
  cartChild: {
    top: 662,
    height: 234,
    backgroundColor: Color.white,
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
    top: "30%",
    left: "40.26%",
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    textAlign: "center",
  },
  primarybutton: {
    top: 800,
    height: 60,
  },
  subtotal: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  shippingCharges: {
    left: 0,
  },
  rs998: {
    left: 339,
    color: Color.colorGray_200,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: 0,
  },
  free: {
    left: 353,
  },
  subtotalParent: {
    top: 684,
    height: 43,
  },
  total: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
  },
  text2: {
    left: 333,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.size_lg,
    top: 0,
  },
  totalParent: {
    top: 757,
    width: 368,
    height: 27,
  },
  cartItem: {
    top: 747,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_200,
    borderTopWidth: 1,
    width: 381,
    height: 1,
  },
  trashIcon: {
    height: "11.16%",
    width: "17.87%",
    top: "28.46%",
    right: "4.11%",
    bottom: "60.38%",
    left: "78.02%",
  },
  rupeeIcon: {
    top: 760,
    left: 327,
    width: 21,
    height: 21,
    position: "absolute",
  },
  cart: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Cart2;
