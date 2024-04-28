import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Cart1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart}>
      <View style={[styles.closeButtonParent, styles.parentFlexBox]}>
        <Pressable
          style={styles.closeButton}
          onPress={() => navigation.navigate("VEGETABLEMENU")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/close-button.png")}
          />
        </Pressable>
        <Text style={[styles.cart1, styles.totalTypo]}>Cart</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.subTotalParent, styles.totalParentFlexBox]}>
          <Text style={[styles.subTotal, styles.totalTypo]}>Sub Total</Text>
          <Text style={[styles.text, styles.textTypo1]}>0</Text>
        </View>
        <View style={[styles.totalParent, styles.totalParentFlexBox]}>
          <Text style={[styles.total, styles.totalTypo]}>TOTAL</Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text1, styles.textTypo1]}>$</Text>
            <Text style={[styles.text2, styles.textTypo1]}>0</Text>
          </View>
        </View>
      </View>
      <View style={[styles.group, styles.parentFlexBox]}>
        <Text style={[styles.text3, styles.textTypo]}>0</Text>
        <Text style={[styles.items, styles.textTypo]}>Item(s)</Text>
      </View>
      <View style={[styles.cartInner, styles.cartInnerLayout]}>
        <View style={[styles.isemptyParent, styles.cartInnerLayout]}>
          <View style={[styles.isempty, styles.lucideminusWrapperFlexBox]}>
            <Image
              style={styles.shoppingBag1Icon}
              resizeMode="cover"
              source={require("../assets/shoppingbag-1.png")}
            />
            <Text style={[styles.noItemIn, styles.totalTypo]}>
              No item in your cart
            </Text>
          </View>
          <View style={styles.parentShadowBox}>
            <View style={styles.espresso1}>
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/152.png")}
              />
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.frameLayout}>
                <View>
                  <Text style={[styles.potato, styles.text5Typo]}>Potato</Text>
                  <View style={[styles.vectorParent, styles.parentFlexBox]}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector21.png")}
                    />
                    <Text style={[styles.text4, styles.textTypo]}>4.5</Text>
                  </View>
                </View>
                <Image
                  style={styles.antDesignheartFilledIcon}
                  resizeMode="cover"
                  source={require("../assets/antdesignheartfilled3.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameLayout]}>
                <View style={[styles.container, styles.parentFlexBox]}>
                  <Text style={[styles.text5, styles.text5Typo]}>$</Text>
                  <Text style={[styles.text5, styles.text5Typo]}>350</Text>
                </View>
                <View style={[styles.frameParent1, styles.wrapperBorder]}>
                  <View
                    style={[
                      styles.lucideminusWrapper,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/lucideminus11.png")}
                    />
                  </View>
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text7, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[styles.octiconplus16Wrapper, styles.wrapperFlexBox]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/octiconplus162.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.parentShadowBox}>
            <View style={styles.espresso1}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/21.png")}
              />
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.frameLayout}>
                <View>
                  <Text style={[styles.potato, styles.text5Typo]}>
                    Caramel Frappucino
                  </Text>
                  <View style={[styles.vectorParent, styles.parentFlexBox]}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector3.png")}
                    />
                    <Text style={[styles.text4, styles.textTypo]}>4.5</Text>
                  </View>
                </View>
                <Image
                  style={styles.antDesignheartFilledIcon}
                  resizeMode="cover"
                  source={require("../assets/antdesignheartfilled4.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameLayout]}>
                <View style={[styles.container, styles.parentFlexBox]}>
                  <Text style={[styles.text5, styles.text5Typo]}>$</Text>
                  <Text style={[styles.text5, styles.text5Typo]}>45</Text>
                </View>
                <View style={[styles.frameParent1, styles.wrapperBorder]}>
                  <View
                    style={[
                      styles.lucideminusContainer,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/octiconplus162.png")}
                    />
                  </View>
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text7, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[
                      styles.octiconplus16Container,
                      styles.wrapperFlexBox,
                    ]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/octiconplus162.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.parentShadowBox}>
            <View style={styles.espresso1}>
              <Image
                style={styles.icon3}
                resizeMode="cover"
                source={require("../assets/122.png")}
              />
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.frameLayout}>
                <View>
                  <Text style={[styles.potato, styles.text5Typo]}>
                    Ice Coffee
                  </Text>
                  <View style={[styles.vectorParent, styles.parentFlexBox]}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector3.png")}
                    />
                    <Text style={[styles.text4, styles.textTypo]}>4.5</Text>
                  </View>
                </View>
                <Image
                  style={styles.antDesignheartFilledIcon}
                  resizeMode="cover"
                  source={require("../assets/antdesignheartfilled4.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameLayout]}>
                <View style={[styles.container, styles.parentFlexBox]}>
                  <Text style={[styles.text5, styles.text5Typo]}>$</Text>
                  <Text style={[styles.text5, styles.text5Typo]}>24</Text>
                </View>
                <View style={[styles.frameParent1, styles.wrapperBorder]}>
                  <View
                    style={[
                      styles.lucideminusFrame,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/octiconplus162.png")}
                    />
                  </View>
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text7, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[styles.octiconplus16Frame, styles.wrapperFlexBox]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/octiconplus162.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.parentShadowBox}>
            <View style={styles.espresso1}>
              <Image
                style={styles.icon4}
                resizeMode="cover"
                source={require("../assets/16.png")}
              />
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.frameLayout}>
                <View>
                  <Text style={[styles.potato, styles.text5Typo]}>
                    Hot Chocolateo
                  </Text>
                  <View style={[styles.vectorParent, styles.parentFlexBox]}>
                    <Image
                      style={[styles.vectorIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector3.png")}
                    />
                    <Text style={[styles.text4, styles.textTypo]}>4.5</Text>
                  </View>
                </View>
                <Image
                  style={styles.antDesignheartFilledIcon}
                  resizeMode="cover"
                  source={require("../assets/antdesignheartfilled4.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameLayout]}>
                <View style={[styles.container, styles.parentFlexBox]}>
                  <Text style={[styles.text5, styles.text5Typo]}>$</Text>
                  <Text style={[styles.text5, styles.text5Typo]}>30</Text>
                </View>
                <View style={[styles.frameParent1, styles.wrapperBorder]}>
                  <View
                    style={[
                      styles.lucideminusWrapper1,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/octiconplus162.png")}
                    />
                  </View>
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text7, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[
                      styles.octiconplus16Wrapper1,
                      styles.wrapperFlexBox,
                    ]}
                  >
                    <Image
                      style={[styles.lucideminusIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/octiconplus162.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.primarybutton}
        onPress={() => navigation.navigate("ShippingMethod")}
      >
        <Image
          style={[styles.rectangleIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle11.png")}
        />
        <Text style={[styles.title, styles.titleTypo]}>Proceed Further</Text>
      </Pressable>
      <Text style={[styles.note1Lot, styles.titleTypo]}>
        NOTE: 1 LOT = 20KG
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  totalTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gilroy,
  },
  totalParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTypo1: {
    textAlign: "right",
    color: Color.colorGray_500,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gilroy,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gilroy,
  },
  cartInnerLayout: {
    width: 342,
    position: "absolute",
  },
  lucideminusWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text5Typo: {
    color: Color.black200,
    textAlign: "left",
    fontFamily: FontFamily.gilroy,
    fontWeight: "600",
  },
  iconLayout: {
    width: 16,
    height: 16,
  },
  frameLayout: {
    width: 206,
    flexDirection: "row",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  lucideminusFrameShadowBox: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
  },
  wrapperFlexBox: {
    marginLeft: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  titleTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_smi_7,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  closeButton: {
    width: 28,
    height: 28,
  },
  cart1: {
    fontSize: 22,
    width: 220,
    height: 25,
    marginLeft: 14,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  closeButtonParent: {
    top: 70,
    left: 21,
    width: 175,
    position: "absolute",
  },
  subTotal: {
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.labelColorLightPrimary,
  },
  text: {
    fontWeight: "500",
  },
  subTotalParent: {
    width: 318,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  total: {
    fontSize: FontSize.size_lg,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  text1: {
    fontWeight: "600",
  },
  text2: {
    marginLeft: 2,
    fontWeight: "600",
  },
  parent: {
    width: 58,
    justifyContent: "flex-end",
  },
  totalParent: {
    marginTop: 20,
    width: 318,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameParent: {
    top: 718,
    left: 26,
    position: "absolute",
  },
  text3: {
    fontSize: FontSize.size_base,
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  items: {
    width: 51,
    height: 17,
    marginLeft: 5,
    fontSize: FontSize.size_base,
    color: Color.labelColorLightPrimary,
  },
  group: {
    top: 74,
    left: 280,
    position: "absolute",
  },
  shoppingBag1Icon: {
    width: 48,
    height: 48,
  },
  noItemIn: {
    color: "#4a4747",
    marginTop: 13,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  isempty: {
    padding: 40,
    display: "none",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    width: 342,
  },
  icon1: {
    top: 21,
    left: 16,
    width: 69,
    height: 78,
    position: "absolute",
  },
  espresso1: {
    width: 100,
    height: 120,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  potato: {
    fontSize: FontSize.size_base,
  },
  vectorIcon: {
    height: 16,
  },
  text4: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.4,
    color: Color.gray1,
    width: 21,
    height: 13,
    marginLeft: 4,
  },
  vectorParent: {
    marginTop: 8,
  },
  antDesignheartFilledIcon: {
    height: 24,
    marginLeft: 69,
    overflow: "hidden",
    width: 24,
    display: "none",
  },
  text5: {
    fontSize: FontSize.size_lg,
  },
  container: {
    width: 60,
  },
  lucideminusIcon: {
    overflow: "hidden",
    height: 16,
  },
  lucideminusWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text7: {
    fontWeight: "700",
    width: 24,
    height: 16,
    fontSize: FontSize.size_base,
    color: Color.labelColorLightPrimary,
  },
  wrapper: {
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
  },
  octiconplus16Wrapper: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
  },
  frameParent1: {
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_xs,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  frameView: {
    marginTop: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameGroup: {
    marginLeft: 12,
  },
  parentShadowBox: {
    marginTop: 16,
    paddingVertical: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    paddingHorizontal: Padding.p_xs,
    display: "none",
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  icon2: {
    top: 11,
    left: 18,
    width: 64,
    height: 98,
    position: "absolute",
  },
  lucideminusContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  octiconplus16Container: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
  },
  icon3: {
    top: 17,
    left: 20,
    width: 65,
    height: 89,
    position: "absolute",
  },
  lucideminusFrame: {
    justifyContent: "center",
    alignItems: "center",
  },
  octiconplus16Frame: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
  },
  icon4: {
    top: 27,
    left: 24,
    width: 53,
    height: 71,
    position: "absolute",
  },
  lucideminusWrapper1: {
    justifyContent: "center",
    alignItems: "center",
  },
  octiconplus16Wrapper1: {
    padding: Padding.p_3xs,
    borderRadius: 97,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
  },
  isemptyParent: {
    top: 0,
    left: 0,
    height: 160,
  },
  cartInner: {
    top: 129,
    left: 14,
    height: 568,
  },
  rectangleIcon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  title: {
    top: "30.12%",
    left: "34.04%",
    color: Color.white,
  },
  primarybutton: {
    top: 625,
    width: 322,
    height: 51,
    left: 26,
    position: "absolute",
  },
  note1Lot: {
    top: 687,
    textDecoration: "underline",
    left: 26,
    color: Color.labelColorLightPrimary,
  },
  cart: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Cart1;
