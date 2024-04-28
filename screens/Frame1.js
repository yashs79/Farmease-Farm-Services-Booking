import React, { useState, useCallback } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Frame11 from "../components/Frame1";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame1 = () => {
  const [categoriesIconAndTextVisible, setCategoriesIconAndTextVisible] =
    useState(false);
  const navigation = useNavigation();

  const openCategoriesIconAndText = useCallback(() => {
    setCategoriesIconAndTextVisible(true);
  }, []);

  const closeCategoriesIconAndText = useCallback(() => {
    setCategoriesIconAndTextVisible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={[styles.frameParent, styles.frameParentBg]}
        locations={[0.01, 1]}
        colors={["#aedc81", "#6cc51d"]}
        useAngle={true}
        angle={180}
      >
        <View style={[styles.image9Parent, styles.parentPosition1]}>
          <Image
            style={[styles.image9Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image-9.png")}
          />
          <Image
            style={[styles.image17Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image-17.png")}
          />
          <Image
            style={styles.image13Icon}
            resizeMode="cover"
            source={require("../assets/image-13.png")}
          />
          <Image
            style={[styles.image17Icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image-171.png")}
          />
        </View>
        <View
          style={[
            styles.comprehensiveFarmSetupManParent,
            styles.parentPosition1,
          ]}
        >
          <Text
            style={styles.comprehensiveFarmSetup}
          >{`Comprehensive Farm Setup & 
Management Solution Package`}</Text>
          <Image
            style={styles.handDrawnStar}
            resizeMode="cover"
            source={require("../assets/hand-drawn-star.png")}
          />
          <View style={[styles.kReviewsWrapper, styles.reviewsLayout]}>
            <Text style={[styles.kReviews, styles.kReviewsTypo]}>
              4.93 (7k+ reviews)
            </Text>
          </View>
          <Text
            style={[styles.interestedInFarming, styles.kReviewsTypo]}
          >{`Interested in farming or cultivation business but don’t have 
time or the :required skill then you landed at the right place.
We currently aim to have a collaborative setup to run the 
whole thing in partnership, we provide you with all the 
dependencies and services that you’ll be needing
to do this business. We also offer you am strong network of 
retailers to get your grown crops directly in the market reducing
the involvement of middlemen in this process.
`}</Text>
        </View>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("IPhone11ProX")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backarrow1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.component1}
          onPress={() => navigation.navigate("Cart2")}
        >
          <LinearGradient
            style={[styles.component1Inner, styles.cartParentPosition]}
            locations={[0.01, 1]}
            colors={["#aedc81", "#6cc51d"]}
            useAngle={true}
            angle={90}
          >
            <View style={styles.homeIconAndTextParent}>
              <Pressable
                style={styles.homeIconAndText}
                onPress={() => navigation.navigate("IPhone11ProX")}
              >
                <Image
                  style={[styles.lomaboldhomeIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/lomaboldhome.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </Pressable>
              <Pressable
                style={[styles.categoriesIconAndText, styles.iconLayout]}
                onPress={openCategoriesIconAndText}
              >
                <Text style={[styles.categories, styles.homeTypo]}>
                  Categories
                </Text>
                <Image
                  style={[
                    styles.iconlycurvedcategory,
                    styles.iconlytwoToneheartPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlycurvedcategory.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.favouriteIconAndText, styles.iconLayout]}
              >
                <Text style={[styles.categories, styles.homeTypo]}>
                  Favourite
                </Text>
                <Image
                  style={[
                    styles.iconlytwoToneheart,
                    styles.iconlytwoToneheartPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/iconlytwotoneheart.png")}
                />
              </Pressable>
              <Pressable style={styles.groupWrapper}>
                <View style={[styles.cartParent, styles.parentPosition]}>
                  <Image
                    style={[styles.cartIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/cart1.png")}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Cart</Text>
                </View>
              </Pressable>
            </View>
          </LinearGradient>
          <Pressable
            style={[styles.ellipseParent, styles.parentPosition]}
            onPress={() => navigation.navigate("Cart2")}
          >
            <Image
              style={styles.instanceChild}
              resizeMode="cover"
              source={require("../assets/ellipse-34.png")}
            />
            <Text style={[styles.text, styles.homeTypo]}>0</Text>
          </Pressable>
        </Pressable>
        <Text style={styles.interestedRequestA}>
          Interested? Request a Call back
        </Text>
        <TextInput
          style={[styles.frameChild, styles.frameTypo]}
          placeholder="Name"
          placeholderTextColor="#868889"
        />
        <TextInput
          style={[styles.frameItem, styles.frameTypo]}
          placeholder="Phone Number "
          placeholderTextColor="#868889"
        />
      </LinearGradient>

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
    </>
  );
};

const styles = StyleSheet.create({
  frameParentBg: {
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  parentPosition1: {
    width: 414,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout2: {
    height: 211,
    width: 207,
    position: "absolute",
  },
  reviewsLayout: {
    height: 19,
    width: 147,
  },
  kReviewsTypo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  cartParentPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "40%",
    height: "60%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.smallBodyTextLight12_size,
    position: "absolute",
  },
  iconLayout: {
    height: 41,
    marginLeft: 74,
  },
  iconlytwoToneheartPosition: {
    bottom: "41.46%",
    height: "58.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    top: "0%",
    position: "absolute",
  },
  frameTypo: {
    fontFamily: FontFamily.paragraph1,
    width: 380,
    left: "50%",
    marginLeft: -193,
    height: "7.41%",
    fontSize: FontSize.paragraph1_size,
    fontWeight: "500",
    position: "absolute",
  },
  image9Icon: {
    top: -22,
    left: 207,
    height: 211,
  },
  image17Icon: {
    top: 94,
    left: 0,
  },
  image13Icon: {
    top: -34,
    height: 128,
    width: 207,
    left: 0,
    position: "absolute",
  },
  image17Icon1: {
    top: 159,
    left: 207,
    height: 211,
  },
  image9Parent: {
    backgroundColor: Color.colorSilver_100,
    height: 254,
    top: 0,
  },
  comprehensiveFarmSetup: {
    top: 6,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    width: 668,
    height: 52,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    left: 26,
    position: "absolute",
  },
  handDrawnStar: {
    top: 61,
    width: 22,
    height: 20,
    left: 26,
    position: "absolute",
  },
  kReviews: {
    height: 19,
    width: 147,
    left: 0,
    top: 0,
  },
  kReviewsWrapper: {
    top: 62,
    left: 48,
    position: "absolute",
  },
  interestedInFarming: {
    top: 92,
    left: 7,
  },
  comprehensiveFarmSetupManParent: {
    top: 254,
    backgroundColor: Color.white,
    height: 286,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    left: 14,
    top: 21,
    width: 34,
    height: 24,
    position: "absolute",
  },
  lomaboldhomeIcon: {
    width: "72.73%",
    right: "12.12%",
    left: "15.15%",
  },
  home: {
    top: "60%",
    left: "0%",
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
  categories: {
    top: "60.98%",
    left: "0%",
  },
  iconlycurvedcategory: {
    width: "38.1%",
    right: "31.75%",
    left: "30.16%",
  },
  categoriesIconAndText: {
    width: 63,
    marginLeft: 74,
  },
  iconlytwoToneheart: {
    width: "45.28%",
    right: "30.19%",
    left: "24.53%",
  },
  favouriteIconAndText: {
    width: 53,
    marginLeft: 74,
  },
  cartIcon: {
    width: "96%",
    right: "4%",
    left: "0%",
  },
  cartParent: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
  },
  groupWrapper: {
    width: 25,
    marginLeft: 74,
    height: 40,
  },
  homeIconAndTextParent: {
    top: 3,
    left: 31,
    width: 405,
    flexDirection: "row",
    position: "absolute",
  },
  component1Inner: {
    height: "88.68%",
    top: "11.32%",
    left: "0%",
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  instanceChild: {
    width: 21,
    height: 21,
    zIndex: 0,
  },
  text: {
    top: 2,
    zIndex: 1,
    left: 7,
  },
  ellipseParent: {
    height: "39.62%",
    width: "4.51%",
    right: "6.65%",
    bottom: "60.38%",
    left: "88.84%",
    flexDirection: "row",
  },
  component1: {
    top: 757,
    left: -22,
    width: 466,
    height: 53,
    position: "absolute",
  },
  interestedRequestA: {
    top: 545,
    left: 103,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemiBold,
    width: 332,
    height: 39,
    fontSize: FontSize.paragraph1_size,
    lineHeight: 21,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  frameChild: {
    top: "70.86%",
    bottom: "21.73%",
  },
  frameItem: {
    top: "79.26%",
    bottom: "13.33%",
  },
  frameParent: {
    flex: 1,
    height: 810,
    width: "100%",
  },
});

export default Frame1;
