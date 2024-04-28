import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const VEGETABLEMENU = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vegetableMenu}>
      <View style={styles.farmease11Parent}>
        <Image
          style={[styles.farmease11Icon, styles.frameParentPosition]}
          resizeMode="cover"
          source={require("../assets/farmease1-1.png")}
        />
        <Pressable
          style={[styles.iconlylightbag3, styles.frameParent6Position]}
          onPress={() => navigation.navigate("Cart1")}
        >
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector11.png")}
          />
          <View style={[styles.wrapper, styles.wrapperFrameFlexBox]}>
            <Text style={styles.text}>0</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.searchForCoffee}>
        <Image
          style={styles.akarIconssearch}
          resizeMode="cover"
          source={require("../assets/akariconssearch.png")}
        />
        <Text style={[styles.searchByCoffee, styles.menuTypo]}>
          Search by coffee name
        </Text>
      </View>
      <View style={styles.vegetableMenuInner}>
        <View style={styles.frameParentPosition}>
          <View style={styles.instanceParent}>
            <View style={styles.parentShadowBox}>
              <View style={styles.espresso}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/111.png")}
                />
              </View>
              <View style={styles.frameGroup}>
                <View>
                  <Text style={[styles.potato, styles.potatoClr]}>
                    Espresso
                  </Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text1, styles.textTypo]}>$</Text>
                    <Text style={[styles.text1, styles.textTypo]}>12</Text>
                  </View>
                </View>
                <View style={[styles.frameContainer, styles.containerBorder]}>
                  <View
                    style={[
                      styles.lucideminusWrapper,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/lucideminus.png")}
                    />
                  </View>
                  <View
                    style={[styles.container, styles.containerWrapperFlexBox]}
                  >
                    <Text style={[styles.text3, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[
                      styles.octiconplus16Wrapper,
                      styles.containerWrapperFlexBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/octiconplus16.png")}
                    />
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.antDesignheartFilledIcon,
                  styles.frameParent6Position,
                ]}
                resizeMode="cover"
                source={require("../assets/antdesignheartfilled2.png")}
              />
            </View>
            <View
              style={[styles.caramelFrappucinoParent, styles.parentShadowBox]}
            >
              <View style={styles.espresso}>
                <Image
                  style={[styles.icon1, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/2.png")}
                />
              </View>
              <View style={styles.frameGroup}>
                <View>
                  <Text style={[styles.potato1, styles.potatoClr]}>
                    Caramel Frappucino
                  </Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text1, styles.textTypo]}>$</Text>
                    <Text style={[styles.text1, styles.textTypo]}>45</Text>
                  </View>
                </View>
                <View style={[styles.frameContainer, styles.containerBorder]}>
                  <View
                    style={[
                      styles.lucideminusContainer,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/lucideminus.png")}
                    />
                  </View>
                  <View
                    style={[styles.container, styles.containerWrapperFlexBox]}
                  >
                    <Text style={[styles.text3, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[
                      styles.octiconplus16Container,
                      styles.containerWrapperFlexBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/octiconplus16.png")}
                    />
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.antDesignheartFilledIcon,
                  styles.frameParent6Position,
                ]}
                resizeMode="cover"
                source={require("../assets/antdesignheartfilled2.png")}
              />
            </View>
          </View>
          <View style={styles.instanceGroup}>
            <View style={styles.parentShadowBox}>
              <View style={styles.espresso}>
                <Image
                  style={styles.icon2}
                  resizeMode="cover"
                  source={require("../assets/121.png")}
                />
              </View>
              <View style={styles.frameGroup}>
                <View>
                  <Text style={[styles.potato, styles.potatoClr]}>
                    Ice Coffee
                  </Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text1, styles.textTypo]}>$</Text>
                    <Text style={[styles.text1, styles.textTypo]}>24</Text>
                  </View>
                </View>
                <View style={[styles.frameContainer, styles.containerBorder]}>
                  <View
                    style={[
                      styles.lucideminusFrame,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/lucideminus.png")}
                    />
                  </View>
                  <View
                    style={[styles.container, styles.containerWrapperFlexBox]}
                  >
                    <Text style={[styles.text3, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[
                      styles.octiconplus16Frame,
                      styles.containerWrapperFlexBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/octiconplus16.png")}
                    />
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.antDesignheartFilledIcon,
                  styles.frameParent6Position,
                ]}
                resizeMode="cover"
                source={require("../assets/antdesignheartfilled2.png")}
              />
            </View>
            <View style={[styles.hotChocolateParent, styles.parentShadowBox]}>
              <View style={styles.espresso}>
                <Image
                  style={[styles.icon3, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/51.png")}
                />
              </View>
              <View style={styles.frameGroup}>
                <View>
                  <Text style={[styles.potato, styles.potatoClr]}>
                    Hot Chocolateo
                  </Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text1, styles.textTypo]}>$</Text>
                    <Text style={[styles.text1, styles.textTypo]}>30</Text>
                  </View>
                </View>
                <View style={[styles.frameContainer, styles.containerBorder]}>
                  <View
                    style={[
                      styles.lucideminusWrapper1,
                      styles.lucideminusFrameShadowBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/lucideminus.png")}
                    />
                  </View>
                  <View
                    style={[styles.container, styles.containerWrapperFlexBox]}
                  >
                    <Text style={[styles.text3, styles.textTypo]}>0</Text>
                  </View>
                  <View
                    style={[
                      styles.octiconplus16Wrapper1,
                      styles.containerWrapperFlexBox,
                    ]}
                  >
                    <Image
                      style={styles.lucideminusIcon}
                      resizeMode="cover"
                      source={require("../assets/octiconplus16.png")}
                    />
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.antDesignheartFilledIcon,
                  styles.frameParent6Position,
                ]}
                resizeMode="cover"
                source={require("../assets/antdesignheartfilled2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.retailerMarketPlace, styles.homeTypo]}>
        Retailer Market Place
      </Text>
      <View style={[styles.buttonNavigation, styles.containerBorder]}>
        <View style={[styles.frameParent6, styles.frameParent6Position]}>
          <View style={styles.parentLayout}>
            <Image
              style={[styles.antDesignhomeFilledIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/antdesignhomefilled.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View style={[styles.raphaelcoffeeParent, styles.parentLayout]}>
            <Image
              style={[styles.raphaelcoffeeIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/raphaelcoffee.png")}
            />
            <Text style={[styles.menu, styles.potatoTypo]}>Menu</Text>
          </View>
          <Pressable
            style={[styles.raphaelcoffeeParent, styles.parentLayout]}
            onPress={() => navigation.navigate("Cart")}
          >
            <Image
              style={[styles.antDesignhomeFilledIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/antdesignheartfilled11.png")}
            />
            <Text style={[styles.menu, styles.potatoTypo]}>Favourite</Text>
          </Pressable>
          <View style={[styles.raphaelcoffeeParent, styles.parentLayout]}>
            <Image
              style={[styles.antDesignhomeFilledIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/bipersonfill.png")}
            />
            <Text style={[styles.menu, styles.potatoTypo]}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParent6Position: {
    top: 19,
    position: "absolute",
  },
  wrapperFrameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuTypo: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontWeight: "300",
  },
  potatoClr: {
    color: Color.black200,
    textAlign: "left",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gilroy,
  },
  containerBorder: {
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
  containerWrapperFlexBox: {
    marginLeft: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  parentShadowBox: {
    padding: Padding.p_xs,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    backgroundColor: Color.white,
  },
  iconPosition: {
    left: 29,
    position: "absolute",
  },
  homeTypo: {
    fontWeight: "500",
    textAlign: "left",
  },
  iconLayout: {
    height: 32,
    overflow: "hidden",
  },
  parentLayout: {
    width: 58,
    alignItems: "center",
  },
  potatoTypo: {
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_sm,
  },
  farmease11Icon: {
    width: 82,
    height: 75,
  },
  vectorIcon: {
    height: "69.72%",
    width: "63.61%",
    top: "8.33%",
    right: "8.61%",
    bottom: "21.94%",
    left: "27.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    fontSize: 13,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    color: Color.white,
    width: 17,
    height: 18,
    textAlign: "center",
    fontWeight: "600",
  },
  wrapper: {
    marginTop: -17.9,
    marginLeft: 3.8,
    top: "50%",
    borderRadius: 53,
    backgroundColor: "#09ad2d",
    borderColor: Color.white,
    padding: 1,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  iconlylightbag3: {
    left: 301,
    width: 36,
    height: 36,
  },
  farmease11Parent: {
    top: 56,
    width: 322,
    height: 75,
    left: 17,
    position: "absolute",
  },
  akarIconssearch: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  searchByCoffee: {
    fontSize: FontSize.smallBodyTextLight12_size,
    fontFamily: FontFamily.smallBodyTextLight12,
    marginLeft: 10,
  },
  searchForCoffee: {
    top: 142,
    borderRadius: Border.br_7xs,
    width: 343,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke_100,
    alignItems: "center",
    left: 17,
    position: "absolute",
  },
  icon: {
    top: 16,
    left: 16,
    width: 107,
    height: 121,
    position: "absolute",
  },
  espresso: {
    width: 138,
    height: 152,
    zIndex: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  potato: {
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_sm,
  },
  text1: {
    color: Color.black200,
    textAlign: "left",
    fontWeight: "600",
  },
  parent: {
    marginTop: 6,
    flexDirection: "row",
  },
  lucideminusIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  lucideminusWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    width: 24,
    height: 16,
    textAlign: "center",
  },
  container: {
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderWidth: 1,
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
  frameContainer: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 14,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  frameGroup: {
    zIndex: 1,
    marginTop: 10,
  },
  antDesignheartFilledIcon: {
    left: 122,
    width: 20,
    height: 20,
    opacity: 0,
    zIndex: 2,
    overflow: "hidden",
  },
  icon1: {
    top: 18,
    width: 80,
    height: 123,
  },
  potato1: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_sm,
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
  caramelFrappucinoParent: {
    marginLeft: 12,
  },
  instanceParent: {
    flexDirection: "row",
  },
  icon2: {
    top: 25,
    left: 30,
    width: 78,
    height: 108,
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
  icon3: {
    top: 27,
    width: 79,
    height: 107,
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
  hotChocolateParent: {
    marginLeft: 15,
  },
  instanceGroup: {
    marginTop: 16,
    flexDirection: "row",
  },
  vegetableMenuInner: {
    top: 212,
    left: 20,
    width: 339,
    height: 508,
    position: "absolute",
  },
  retailerMarketPlace: {
    top: 79,
    left: 96,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.paragraph1,
    color: "#9bc63f",
    position: "absolute",
  },
  antDesignhomeFilledIcon: {
    width: 32,
  },
  home: {
    fontFamily: FontFamily.gilroy,
    fontSize: FontSize.size_sm,
  },
  raphaelcoffeeIcon: {
    width: 29,
  },
  menu: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontWeight: "300",
  },
  raphaelcoffeeParent: {
    marginLeft: 25,
  },
  frameParent6: {
    left: 34,
    flexDirection: "row",
  },
  buttonNavigation: {
    marginLeft: -187.5,
    bottom: 0,
    borderTopWidth: 1,
    width: 375,
    height: 92,
    left: "50%",
    borderColor: Color.colorGainsboro,
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.white,
  },
  vegetableMenu: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.white,
  },
});

export default VEGETABLEMENU;
