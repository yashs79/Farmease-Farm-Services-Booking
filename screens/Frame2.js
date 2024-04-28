import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Modal,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Frame11 from "../components/Frame1";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Frame2 = () => {
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
        style={[styles.frameParent, styles.parentBg1]}
        locations={[0.01, 1]}
        colors={["#aedc81", "#6cc51d"]}
        useAngle={true}
        angle={180}
      >
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View
          style={[styles.cropPlantingAndMaintenanceParent, styles.parentBg]}
        >
          <Text
            style={[styles.cropPlantingAnd, styles.soilTestingFlexBox]}
          >{`Crop Planting and Maintenance Service `}</Text>
          <View style={styles.heartParent}>
            <Image
              style={[styles.heartIcon, styles.heartIconLayout]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
            <Text style={[styles.knowMoreAbout, styles.soilTestingFlexBox]}>
              Know more about FarmEase’s FarmZ
            </Text>
          </View>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={styles.salePriceTagParent}>
              <Image
                style={[styles.salePriceTag, styles.saleLayout]}
                resizeMode="cover"
                source={require("../assets/sale-price-tag.png")}
              />
              <Text style={[styles.offUpto200, styles.cashbackGLayout]}>
                20% off upto 200
              </Text>
              <Text style={[styles.useCodeEasnew, styles.useLayout]}>
                Use code: Easnew
              </Text>
            </View>
          </View>
          <View style={[styles.salePriceTagGroup, styles.groupLayout]}>
            <Image
              style={[styles.salePriceTag1, styles.startingAtRsPosition]}
              resizeMode="cover"
              source={require("../assets/sale-price-tag.png")}
            />
            <Text style={[styles.cashbackG, styles.cashbackGPosition]}>
              CashBack G
            </Text>
            <Text style={[styles.useCodeEasnew1, styles.cashbackGPosition]}>
              Use code: Easnew
            </Text>
          </View>
          <Image
            style={[styles.handDrawnStar, styles.handDrawnStarPosition]}
            resizeMode="cover"
            source={require("../assets/hand-drawn-star.png")}
          />
          <View style={[styles.kReviewsWrapper, styles.reviewsLayout]}>
            <Text style={[styles.kReviews, styles.reviewsTypo]}>
              4.93 (7k+ reviews)
            </Text>
          </View>
        </View>
        <Image
          style={[
            styles.beautifulFemaleWithShoppingIcon,
            styles.frameChildPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/beautifulfemalewithshoppingcartwalkingbysupermarketfreezerchoosingwhatbuy-1.png")}
        />
        <View style={[styles.bookServicesParent, styles.parentBg]}>
          <Text style={styles.bookServices}>Book Services</Text>
          <View style={styles.frameGroup}>
            <LinearGradient
              style={[
                styles.startingAtRs149HrPerSeParent,
                styles.image8IconLayout,
              ]}
              locations={[0.01, 1]}
              colors={["#aedc81", "#6cc51d"]}
              useAngle={true}
              angle={180}
            >
              <Text style={[styles.startingAtRs, styles.startingAtRsPosition]}>
                Starting at Rs. 149/-hr per service
              </Text>
              <Pressable style={[styles.frameWrapper, styles.wrapperFlexBox]}>
                <View style={[styles.seeDetailsWrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.seeDetails}>See Details</Text>
                </View>
              </Pressable>
            </LinearGradient>
            <Image
              style={[styles.image8Icon, styles.image8IconLayout]}
              resizeMode="cover"
              source={require("../assets/image-81.png")}
            />
          </View>
          <View style={[styles.frameItem, styles.parentLayout]} />
        </View>
        <View style={[styles.soilTestingParent, styles.parentLayout]}>
          <Text style={[styles.soilTesting, styles.soilTestingFlexBox]}>
            Soil Testing
          </Text>
          <View style={styles.handDrawnStarParent}>
            <Image
              style={[styles.handDrawnStar1, styles.handDrawnStar1Position]}
              resizeMode="cover"
              source={require("../assets/hand-drawn-star1.png")}
            />
            <Text style={[styles.kReviews1, styles.kReviews1Position]}>
              4.83 (2k reviews)
            </Text>
          </View>
          <Text style={[styles.rs799, styles.rs799Typo]}>Rs.799</Text>
          <Text
            style={[styles.nutrientLevelsAssessment, styles.reviewsTypo]}
          >{`Nutrient levels assessment
pH analysis
Soil texture evaluation`}</Text>
          <ImageBackground
            style={[styles.image9Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image9.png")}
          />
          <Pressable style={[styles.addWrapper, styles.addLayout]}>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
          <Text style={[styles.viewDetails, styles.addTypo]}>View Details</Text>
        </View>
        <View style={[styles.landPreparationParent, styles.parentLayout]}>
          <Text
            style={[styles.soilTesting, styles.soilTestingFlexBox]}
          >{`Land Preparation `}</Text>
          <View style={styles.handDrawnStarParent}>
            <Image
              style={[styles.handDrawnStar1, styles.handDrawnStar1Position]}
              resizeMode="cover"
              source={require("../assets/hand-drawn-star1.png")}
            />
            <Text style={[styles.kReviews1, styles.kReviews1Position]}>
              4.9 (2.5k reviews)
            </Text>
          </View>
          <Text style={[styles.rs199hr, styles.rs799Typo]}>Rs.199/hr</Text>
          <View style={[styles.frameInner, styles.frameInnerPosition]} />
          <Text
            style={[styles.nutrientLevelsAssessment, styles.reviewsTypo]}
          >{`Clearing and leveling
Plowing and tilling
Seedbed preparation`}</Text>
          <ImageBackground
            style={[styles.image10Icon, styles.frameInnerPosition]}
            resizeMode="cover"
            source={require("../assets/image10.png")}
          />
          <Pressable style={[styles.addContainer, styles.addLayout]}>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
          <Text style={[styles.viewDetails, styles.addTypo]}>View Details</Text>
        </View>
        <View style={[styles.irrigationSystemsParent, styles.parentLayout]}>
          <Text style={[styles.soilTesting, styles.soilTestingFlexBox]}>
            Irrigation Systems:
          </Text>
          <View style={styles.handDrawnStarParent}>
            <Image
              style={[styles.handDrawnStar1, styles.handDrawnStar1Position]}
              resizeMode="cover"
              source={require("../assets/hand-drawn-star1.png")}
            />
            <Text style={[styles.kReviews1, styles.kReviews1Position]}>
              4.7 (2.2k reviews)
            </Text>
          </View>
          <Text style={[styles.rs199hr, styles.rs799Typo]}>Rs.149/hr</Text>
          <Text
            style={[styles.nutrientLevelsAssessment, styles.reviewsTypo]}
          >{`Design and installation
Drip irrigation setup
Monitoring and maintenance`}</Text>
          <Text style={[styles.viewDetails, styles.addTypo]}>View Details</Text>
          <ImageBackground
            style={[styles.image11Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image11.png")}
          />
          <Pressable style={[styles.addFrame, styles.addLayout]}>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.backarrow, styles.kReviews1Position]}
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
            <View
              style={[
                styles.homeIconAndTextParent,
                styles.handDrawnStar1Position,
              ]}
            >
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
              <Pressable style={styles.groupContainer}>
                <View style={[styles.cartParent, styles.parentPosition]}>
                  <Image
                    style={[styles.cartIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/cart.png")}
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
              style={[styles.instanceChild, styles.heartIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-34.png")}
            />
            <Text style={[styles.text, styles.homeTypo]}>0</Text>
          </Pressable>
        </Pressable>
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
  parentBg1: {
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  frameChildPosition: {
    height: 254,
    top: 0,
    position: "absolute",
  },
  parentBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  soilTestingFlexBox: {
    textAlign: "left",
    lineHeight: 21,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  heartIconLayout: {
    height: 21,
    width: 21,
  },
  groupLayout: {
    width: 246,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 165,
    height: 54,
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  saleLayout: {
    height: 31,
    width: 26,
  },
  cashbackGLayout: {
    height: 28,
    width: 136,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
  },
  useLayout: {
    width: 151,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interRegular,
    height: 15,
  },
  startingAtRsPosition: {
    top: 9,
    position: "absolute",
  },
  cashbackGPosition: {
    left: 38,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  handDrawnStarPosition: {
    top: 55,
    position: "absolute",
  },
  reviewsLayout: {
    width: 147,
    height: 19,
  },
  reviewsTypo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    textAlign: "left",
    lineHeight: 21,
  },
  image8IconLayout: {
    borderRadius: Border.br_2xs,
    height: 208,
    top: 0,
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  parentLayout: {
    height: 168,
    backgroundColor: Color.white,
    width: 414,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  handDrawnStar1Position: {
    top: 3,
    position: "absolute",
  },
  kReviews1Position: {
    left: 14,
    position: "absolute",
  },
  rs799Typo: {
    height: 11,
    top: 49,
    fontSize: FontSize.smallBodyTextLight12_size,
    left: 21,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    position: "absolute",
  },
  iconLayout2: {
    height: 92,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  addLayout: {
    height: 22,
    width: 59,
    borderWidth: 0.5,
    borderColor: Color.white,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  addTypo: {
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  frameInnerPosition: {
    top: 27,
    width: 163,
    borderRadius: Border.br_mid,
    left: 223,
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
    fontSize: FontSize.smallBodyTextLight12_size,
    fontWeight: "500",
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
  frameChild: {
    backgroundColor: Color.colorSilver_100,
    width: 414,
    left: 0,
    overflow: "hidden",
  },
  cropPlantingAnd: {
    top: 11,
    width: 348,
    height: 52,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_xl,
    left: 26,
  },
  heartIcon: {
    left: 13,
    position: "absolute",
    top: 17,
  },
  knowMoreAbout: {
    left: 42,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 325,
    height: 18,
    fontSize: FontSize.size_base,
    top: 17,
    textAlign: "left",
    lineHeight: 21,
  },
  heartParent: {
    top: 92,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_500,
    width: 371,
    height: 54,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  salePriceTag: {
    top: 2,
    left: 0,
    position: "absolute",
  },
  offUpto200: {
    left: 29,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
    top: 0,
  },
  useCodeEasnew: {
    top: 16,
    height: 15,
    left: 29,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  salePriceTagParent: {
    left: 33,
    width: 180,
    height: 33,
    top: 7,
    position: "absolute",
  },
  groupWrapper: {
    left: 16,
    width: 246,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 165,
  },
  salePriceTag1: {
    left: 9,
    height: 31,
    width: 26,
  },
  cashbackG: {
    height: 28,
    width: 136,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    top: 7,
  },
  useCodeEasnew1: {
    top: 23,
    height: 15,
    width: 151,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interRegular,
  },
  salePriceTagGroup: {
    left: 284,
  },
  handDrawnStar: {
    width: 22,
    height: 20,
    left: 26,
    top: 55,
  },
  kReviews: {
    fontSize: FontSize.size_sm,
    height: 19,
    width: 147,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    position: "absolute",
    left: 0,
    top: 0,
  },
  kReviewsWrapper: {
    left: 48,
    height: 19,
    top: 55,
    position: "absolute",
  },
  cropPlantingAndMaintenanceParent: {
    top: 254,
    height: 256,
    width: 414,
    left: 0,
    position: "absolute",
  },
  beautifulFemaleWithShoppingIcon: {
    left: -1,
    width: 415,
  },
  bookServices: {
    top: 8,
    width: 143,
    height: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 13,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  startingAtRs: {
    fontSize: FontSize.size_lg,
    width: 132,
    height: 42,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 9,
    left: 13,
    textAlign: "left",
    lineHeight: 21,
  },
  seeDetails: {
    fontSize: FontSize.size_base_5,
    lineHeight: 15,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    textAlign: "left",
  },
  seeDetailsWrapper: {
    borderRadius: 325,
    justifyContent: "center",
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  frameWrapper: {
    top: 172,
    left: 13,
    position: "absolute",
  },
  startingAtRs149HrPerSeParent: {
    width: 378,
    left: 0,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  image8Icon: {
    left: 183,
    width: 204,
  },
  frameGroup: {
    top: 42,
    width: 388,
    height: 208,
    left: 13,
    position: "absolute",
  },
  frameItem: {
    top: 275,
  },
  bookServicesParent: {
    top: 512,
    height: 258,
    width: 414,
    left: 0,
    position: "absolute",
  },
  soilTesting: {
    top: 14,
    width: 186,
    height: 16,
    left: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 21,
  },
  handDrawnStar1: {
    width: 14,
    height: 14,
    left: 0,
  },
  kReviews1: {
    color: Color.colorGray_400,
    fontSize: FontSize.smallBodyTextLight12_size,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    textAlign: "left",
    lineHeight: 21,
    height: 19,
    width: 147,
    top: 0,
  },
  handDrawnStarParent: {
    top: 32,
    width: 161,
    left: 21,
    height: 19,
    position: "absolute",
  },
  rs799: {
    width: 50,
  },
  nutrientLevelsAssessment: {
    top: 73,
    left: 25,
    fontSize: FontSize.smallBodyTextLight12_size,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    position: "absolute",
  },
  image9Icon: {
    top: 20,
    width: 163,
    left: 223,
    height: 92,
    borderRadius: Border.br_mid,
  },
  add: {
    top: 4,
    left: 12,
    width: 35,
    height: 15,
    fontSize: FontSize.size_base,
  },
  addWrapper: {
    top: 101,
    left: 272,
  },
  viewDetails: {
    top: 136,
    width: 83,
    fontSize: FontSize.smallBodyTextLight12_size,
    left: 21,
    height: 18,
  },
  soilTestingParent: {
    top: 770,
  },
  rs199hr: {
    width: 71,
  },
  frameInner: {
    backgroundColor: Color.colorDimgray_300,
    height: 84,
    overflow: "hidden",
  },
  image10Icon: {
    height: 88,
  },
  addContainer: {
    top: 104,
    left: 275,
  },
  landPreparationParent: {
    top: 942,
  },
  image11Icon: {
    top: 30,
    left: 221,
    width: 164,
    height: 92,
    borderRadius: Border.br_mid,
  },
  addFrame: {
    top: 109,
    left: 273,
  },
  irrigationSystemsParent: {
    top: 1114,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    top: 21,
    width: 34,
    height: 24,
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
  groupContainer: {
    width: 25,
    marginLeft: 74,
    height: 40,
  },
  homeIconAndTextParent: {
    left: 31,
    width: 405,
    flexDirection: "row",
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
    zIndex: 0,
  },
  text: {
    left: 7,
    zIndex: 1,
    top: 2,
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
    top: 1273,
    left: -21,
    width: 466,
    height: 53,
    position: "absolute",
  },
  frameParent: {
    flex: 1,
    height: 1324,
    width: "100%",
  },
});

export default Frame2;
