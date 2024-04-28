import React, { useState, useCallback } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  Modal,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Frame11 from "../components/Frame1";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone11ProX = () => {
  const navigation = useNavigation();
  const [categoriesIconAndTextVisible, setCategoriesIconAndTextVisible] =
    useState(false);
  const [categoriesIconAndText1Visible, setCategoriesIconAndText1Visible] =
    useState(false);

  const openCategoriesIconAndText = useCallback(() => {
    setCategoriesIconAndTextVisible(true);
  }, []);

  const closeCategoriesIconAndText = useCallback(() => {
    setCategoriesIconAndTextVisible(false);
  }, []);

  const openCategoriesIconAndText1 = useCallback(() => {
    setCategoriesIconAndText1Visible(true);
  }, []);

  const closeCategoriesIconAndText1 = useCallback(() => {
    setCategoriesIconAndText1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.iphone11ProX1, styles.frameViewBg]}>
        <Image
          style={styles.iphone11ProX1Child}
          resizeMode="cover"
          source={require("../assets/frame-217.png")}
        />
        <Image
          style={[styles.image8Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
        <Image
          style={[styles.image16Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/image-16.png")}
        />
        <Image
          style={[styles.image17Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/image-172.png")}
        />
        <View style={[styles.iphone11ProX1Item, styles.iphone11Position]} />
        <Image
          style={[styles.iphone11ProX1Inner, styles.iphone11Position]}
          resizeMode="cover"
          source={require("../assets/ellipse-51.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iphone11ChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-61.png")}
        />
        <Image
          style={[styles.iphone11ProX1Child1, styles.iphone11ChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-61.png")}
        />
        <Image
          style={[styles.iphone11ProX1Child2, styles.iphone11ChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-61.png")}
        />
        <Text style={[styles.categories, styles.categoriesTypo]}>
          Categories
        </Text>
        <Text
          style={[styles.specialDeals, styles.categoriesTypo]}
          numberOfLines={1}
        >
          Special Deals
        </Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-303.png")}
        />
        <View style={styles.ninjacartHeliosBlrParent}>
          <Text style={styles.ninjacartHeliosBlr}>NinjaCart, Helios, BLR</Text>
          <View style={[styles.chevronDown, styles.cartParentPosition]} />
        </View>
        <View
          style={[styles.frameView, styles.frameViewBg]}
          placeholder="Search for various services..."
        />
        <View style={[styles.seeMoreParent, styles.seeParentFlexBox]}>
          <Text style={styles.seeMore}>See more</Text>
          <Image
            style={styles.chevronRightIcon}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
        <Pressable
          style={[styles.seeAllParent, styles.seeParentFlexBox]}
          onPress={() => navigation.navigate("Frame2")}
        >
          <Text style={styles.seeMore}>See all</Text>
          <Image
            style={styles.chevronRightIcon}
            resizeMode="cover"
            source={require("../assets/chevronright.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleParent, styles.rectanglePosition]}
          onPress={() => navigation.navigate("Frame2")}
        >
          <View style={[styles.componentChild, styles.componentPosition]} />
          <Text style={[styles.planting, styles.pestFlexBox]}>Planting</Text>
          <View style={styles.componentItem} />
          <Image
            style={[styles.image10Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/image-10.png")}
          />
        </Pressable>
        <Pressable style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.componentInner, styles.componentPosition]} />
          <View style={[styles.componentChild1, styles.componentChildBg]} />
          <Text style={[styles.maintenance, styles.pestFlexBox]}>
            Maintenance
          </Text>
        </Pressable>
        <Pressable
          style={[styles.groupParent, styles.image18Position]}
          onPress={() => navigation.navigate("Frame3")}
        >
          <View style={[styles.rectangleContainer, styles.componentPosition]}>
            <View style={[styles.groupChild, styles.groupChildBg]} />
            <Text style={[styles.pest, styles.pestFlexBox]}>{`Pest
`}</Text>
          </View>
          <Image
            style={[styles.image13Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/image-131.png")}
          />
        </Pressable>
        <Pressable style={[styles.groupPressable, styles.image15IconPosition]}>
          <View style={[styles.rectangleView, styles.groupChildBg]} />
          <View style={[styles.componentChild2, styles.componentChildBg]} />
          <Text style={[styles.harvest, styles.pestFlexBox]}>Harvest</Text>
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector-13.png")}
        />
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame-169.png")}
        />
        <Image
          style={[styles.image15Icon, styles.image15IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-15.png")}
        />
        <Pressable
          style={[styles.image18, styles.image18Position]}
          onPress={() => navigation.navigate("Frame4")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/image-18.png")}
          />
        </Pressable>
        <LinearGradient
          style={[
            styles.frameLineargradient,
            styles.frameLineargradientPosition,
          ]}
          locations={[0.01, 1]}
          colors={["#aedc81", "#6cc51d"]}
          useAngle={true}
          angle={90}
        >
          <View style={[styles.homeIconAndTextParent, styles.homeIconPosition]}>
            <View style={styles.homeIconAndText}>
              <Image
                style={[styles.lomaboldhomeIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/lomaboldhome.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
            <Pressable
              style={[
                styles.categoriesIconAndText,
                styles.categoriesIconLayout,
              ]}
              onPress={openCategoriesIconAndText}
            >
              <Text style={[styles.categories1, styles.homeTypo]}>
                Categories
              </Text>
              <Image
                style={[
                  styles.iconlycurvedcategory,
                  styles.iconlytwoToneheartLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/iconlycurvedcategory.png")}
              />
            </Pressable>
            <View
              style={[styles.favouriteIconAndText, styles.favouriteIconLayout]}
            >
              <Text style={[styles.categories1, styles.homeTypo]}>
                Favourite
              </Text>
              <Image
                style={[
                  styles.iconlytwoToneheart,
                  styles.iconlytwoToneheartLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/iconlytwotoneheart.png")}
              />
            </View>
            <View style={[styles.groupWrapper, styles.groupLayout]}>
              <View style={[styles.cartParent, styles.groupLayout]}>
                <Image
                  style={[styles.cartIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/cart.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Cart</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <Image
          style={[styles.iphone11ProX1Child3, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame-423.png")}
        />
        <LinearGradient
          style={[
            styles.iphone11ProX1Inner1,
            styles.frameLineargradientPosition,
          ]}
          locations={[0.01, 1]}
          colors={["#aedc81", "#6cc51d"]}
          useAngle={true}
          angle={90}
        >
          <View style={[styles.homeIconAndTextGroup, styles.homeIconPosition]}>
            <Pressable style={styles.homeIconAndText}>
              <Image
                style={[styles.lomaboldhomeIcon1, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/lomaboldhome.png")}
              />
              <Text style={[styles.home1, styles.homeTypo]}>Home</Text>
            </Pressable>
            <Pressable
              style={[
                styles.categoriesIconAndText1,
                styles.categoriesIconLayout,
              ]}
              onPress={openCategoriesIconAndText1}
            >
              <Text style={[styles.categories2, styles.homeTypo]}>
                Categories
              </Text>
              <Image
                style={[
                  styles.iconlycurvedcategory,
                  styles.iconlytwoToneheartLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/iconlycurvedcategory.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.favouriteIconAndText1, styles.favouriteIconLayout]}
            >
              <Text style={[styles.categories2, styles.homeTypo]}>
                Favourite
              </Text>
              <Image
                style={[
                  styles.iconlytwoToneheart,
                  styles.iconlytwoToneheartLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/iconlytwotoneheart.png")}
              />
            </Pressable>
            <Pressable style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.componentChild, styles.componentPosition]}>
                <Image
                  style={[styles.cartIcon1, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/cart.png")}
                />
                <Text style={[styles.home1, styles.homeTypo]}>Cart</Text>
              </View>
            </Pressable>
          </View>
        </LinearGradient>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={categoriesIconAndTextVisible}
      >
        <View style={styles.categoriesIconAndTextOverlay}>
          <Pressable
            style={styles.categoriesIconAndTextBg}
            onPress={closeCategoriesIconAndText}
          />
          <Frame11 onClose={closeCategoriesIconAndText} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={categoriesIconAndText1Visible}
      >
        <View style={styles.categoriesIconAndText1Overlay}>
          <Pressable
            style={styles.categoriesIconAndText1Bg}
            onPress={closeCategoriesIconAndText1}
          />
          <Frame11 onClose={closeCategoriesIconAndText1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameViewBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  iconLayout3: {
    height: 157,
    width: 139,
    top: 616,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  iphone11Position: {
    height: 8,
    top: 357,
    position: "absolute",
  },
  iphone11ChildLayout: {
    width: 9,
    height: 8,
    top: 357,
    position: "absolute",
  },
  categoriesTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  cartParentPosition: {
    top: 0,
    position: "absolute",
  },
  seeParentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    width: 86,
    alignItems: "center",
    position: "absolute",
  },
  rectanglePosition: {
    height: 123,
    top: 425,
    position: "absolute",
  },
  componentPosition: {
    bottom: "0%",
    position: "absolute",
  },
  pestFlexBox: {
    justifyContent: "center",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    fontSize: FontSize.smallBodyTextLight12_size,
    alignItems: "center",
    display: "flex",
    color: Color.gray1,
    lineHeight: 18,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    position: "absolute",
  },
  componentChildBg: {
    backgroundColor: Color.colorMediumseagreen_200,
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  image18Position: {
    width: 64,
    top: 437,
    position: "absolute",
  },
  groupChildBg: {
    display: "none",
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  image15IconPosition: {
    top: 439,
    position: "absolute",
  },
  frameIconLayout: {
    height: 163,
    width: 328,
    borderRadius: Border.br_sm,
    top: 171,
    position: "absolute",
  },
  frameLineargradientPosition: {
    backgroundColor: "transparent",
    height: 47,
    left: -19,
    position: "absolute",
    overflow: "hidden",
  },
  homeIconPosition: {
    width: 405,
    top: 3,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.manropeMedium,
    textAlign: "center",
    fontWeight: "500",
    color: Color.white,
    fontSize: FontSize.smallBodyTextLight12_size,
    position: "absolute",
  },
  categoriesIconLayout: {
    height: 41,
    width: 63,
  },
  iconlytwoToneheartLayout: {
    height: "58.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "41.46%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  favouriteIconLayout: {
    width: 53,
    height: 41,
  },
  groupLayout: {
    width: 25,
    height: 40,
  },
  iconPosition: {
    bottom: "40%",
    height: "60%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone11ProX1Child: {
    top: -83,
    left: -252,
    width: 917,
    height: 380,
    position: "absolute",
  },
  image8Icon: {
    left: 21,
  },
  image16Icon: {
    left: 178,
  },
  image17Icon: {
    left: 341,
  },
  iphone11ProX1Item: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorYellowgreen_100,
    width: 31,
    left: 21,
  },
  iphone11ProX1Inner: {
    left: 57,
    width: 8,
  },
  ellipseIcon: {
    left: 69,
  },
  iphone11ProX1Child1: {
    left: 82,
  },
  iphone11ProX1Child2: {
    left: 94,
  },
  categories: {
    top: 395,
    width: 106,
    left: 21,
  },
  specialDeals: {
    left: 23,
    width: 144,
    top: 582,
  },
  groupIcon: {
    top: 145,
    width: 17,
    height: 16,
    left: 19,
    position: "absolute",
  },
  ninjacartHeliosBlr: {
    top: 1,
    width: 135,
    color: Color.white,
    fontSize: FontSize.smallBodyTextLight12_size,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 18,
    position: "absolute",
  },
  chevronDown: {
    left: 150,
    width: 21,
    height: 20,
    overflow: "hidden",
  },
  ninjacartHeliosBlrParent: {
    top: 143,
    left: 39,
    width: 171,
    height: 20,
    position: "absolute",
  },
  frameView: {
    top: 95,
    borderRadius: Border.br_3xs,
    width: 360,
    height: 36,
    left: 19,
    position: "absolute",
    overflow: "hidden",
  },
  seeMore: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
  },
  chevronRightIcon: {
    width: 20,
    marginLeft: 2,
    height: 20,
    overflow: "hidden",
  },
  seeMoreParent: {
    left: 313,
    top: 582,
  },
  seeAllParent: {
    top: 394,
    left: 301,
  },
  componentChild: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  planting: {
    height: "15.93%",
    width: "84.26%",
    top: "65.45%",
    left: "7.93%",
  },
  componentItem: {
    width: "69.76%",
    right: "14.5%",
    left: "15.74%",
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_mini,
    bottom: "41.54%",
    top: "11.54%",
    height: "46.91%",
    position: "absolute",
    overflow: "hidden",
  },
  image10Icon: {
    height: "49.59%",
    width: "73.61%",
    top: "8.94%",
    right: "11.66%",
    left: "14.72%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_mid,
    overflow: "hidden",
    bottom: "41.46%",
  },
  rectangleParent: {
    width: 88,
    left: 19,
  },
  componentInner: {
    width: "93.94%",
    right: "2.66%",
    left: "3.4%",
    top: "0%",
    height: "100%",
  },
  componentChild1: {
    width: "66.7%",
    right: "16.28%",
    left: "17.02%",
    bottom: "41.54%",
    top: "11.54%",
    height: "46.91%",
    backgroundColor: Color.colorMediumseagreen_200,
  },
  maintenance: {
    height: "15.45%",
    top: "65.85%",
    left: "0%",
    width: "100%",
  },
  rectangleGroup: {
    left: 109,
    width: 94,
  },
  groupChild: {
    height: "313.78%",
    width: "172.8%",
    top: "-205.36%",
    right: "-36.4%",
    bottom: "-8.42%",
    left: "-36.4%",
  },
  pest: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  rectangleContainer: {
    height: "36.4%",
    width: "79.84%",
    top: "63.6%",
    right: "9.37%",
    left: "10.78%",
  },
  image13Icon: {
    height: "57.57%",
    bottom: "42.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_mid,
    overflow: "hidden",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupParent: {
    left: 218,
    height: 108,
  },
  rectangleView: {
    height: "143.36%",
    width: "124.37%",
    top: "-16.55%",
    right: "10%",
    bottom: "-26.81%",
    left: "-34.37%",
  },
  componentChild2: {
    height: "67.25%",
    width: "88.31%",
    right: "11.13%",
    bottom: "32.75%",
    left: "0.56%",
    top: "0%",
  },
  harvest: {
    height: "22.14%",
    top: "77.86%",
    left: "0%",
    width: "100%",
  },
  groupPressable: {
    width: 71,
    height: 86,
    left: 313,
  },
  vectorIcon: {
    top: 561,
    width: 400,
    left: 0,
  },
  frameIcon: {
    left: 18,
    overflow: "hidden",
  },
  image15Icon: {
    left: 123,
    width: 65,
    height: 61,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_mid,
    width: "100%",
  },
  image18: {
    left: 312,
    height: 62,
  },
  lomaboldhomeIcon: {
    left: 5,
  },
  home: {
    top: 24,
    left: 0,
  },
  homeIconAndText: {
    width: 33,
    height: 40,
  },
  categoriesIconAndTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  categoriesIconAndTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  categories1: {
    top: 25,
    left: 0,
  },
  iconlycurvedcategory: {
    width: "38.1%",
    right: "31.75%",
    left: "30.16%",
  },
  categoriesIconAndText: {
    marginLeft: 74,
  },
  iconlytwoToneheart: {
    width: "45.28%",
    right: "30.19%",
    left: "24.53%",
  },
  favouriteIconAndText: {
    marginLeft: 74,
  },
  cartIcon: {
    left: 0,
  },
  cartParent: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  groupWrapper: {
    marginLeft: 74,
  },
  homeIconAndTextParent: {
    left: 31,
  },
  frameLineargradient: {
    top: 885,
    width: 466,
  },
  iphone11ProX1Child3: {
    left: 361,
  },
  lomaboldhomeIcon1: {
    width: "72.73%",
    right: "12.12%",
    left: "15.15%",
  },
  home1: {
    top: "60%",
    left: "0%",
  },
  categoriesIconAndText1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  categoriesIconAndText1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  categories2: {
    top: "60.98%",
    left: "0%",
  },
  categoriesIconAndText1: {
    marginLeft: 66,
  },
  favouriteIconAndText1: {
    marginLeft: 66,
  },
  cartIcon1: {
    width: "96%",
    right: "4%",
    left: "0%",
  },
  groupContainer: {
    marginLeft: 66,
  },
  homeIconAndTextGroup: {
    left: 27,
  },
  iphone11ProX1Inner1: {
    top: 805,
    width: 412,
  },
  iphone11ProX1: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProX;
