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

const Frame4 = () => {
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
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <View
          style={[styles.harvestingAndManagementServParent, styles.parentBg]}
        >
          <Text
            style={[styles.harvestingAndManagement, styles.harvestingFlexBox]}
          >{`Harvesting and Management 
Service`}</Text>
          <View style={styles.heartParent}>
            <Image
              style={[styles.heartIcon, styles.heartIconLayout]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
            <Text style={[styles.knowMoreAbout, styles.heartIconPosition]}>
              Know more about FarmEase’s FarmZ
            </Text>
          </View>
          <View style={[styles.salePriceTagParent, styles.saleLayout1]}>
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
          <View style={[styles.salePriceTagGroup, styles.saleLayout1]}>
            <Image
              style={[styles.salePriceTag1, styles.saleLayout]}
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
            style={styles.handDrawnStar}
            resizeMode="cover"
            source={require("../assets/hand-drawn-star.png")}
          />
          <View style={[styles.kReviewsWrapper, styles.kReviewsWrapperLayout]}>
            <Text style={[styles.kReviews, styles.reviewsTypo]}>
              4.91 (5k+ reviews)
            </Text>
          </View>
        </View>
        <Image
          style={[styles.image17Icon, styles.frameChildPosition]}
          resizeMode="cover"
          source={require("../assets/image-1711.png")}
        />
        <View style={[styles.bookServicesParent, styles.parentBg]}>
          <Text style={[styles.bookServices, styles.backarrowLayout]}>
            Book Services
          </Text>
          <View style={[styles.frameGroup, styles.frameGroupLayout]}>
            <LinearGradient
              style={[
                styles.startingAtRs149HrPerSeParent,
                styles.frameGroupLayout,
              ]}
              locations={[0.01, 1]}
              colors={["#aedc81", "#6cc51d"]}
              useAngle={true}
              angle={180}
            >
              <Text style={styles.startingAtRs}>
                Starting at Rs. 149/-hr per service
              </Text>
              <Pressable style={[styles.frameWrapper, styles.wrapperFlexBox]}>
                <View style={[styles.seeDetailsWrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.seeDetails}>See Details</Text>
                </View>
              </Pressable>
            </LinearGradient>
            <Image
              style={styles.image16Icon}
              resizeMode="cover"
              source={require("../assets/image-162.png")}
            />
          </View>
          <View style={[styles.frameItem, styles.parentLayout]} />
        </View>
        <View style={[styles.harvestingParent, styles.parentLayout]}>
          <Text
            style={[styles.harvesting, styles.harvestingFlexBox]}
          >{`Harvesting `}</Text>
          <View
            style={[styles.handDrawnStarParent, styles.kReviewsWrapperLayout]}
          >
            <Image
              style={[styles.handDrawnStar1, styles.handDrawnStar1Position]}
              resizeMode="cover"
              source={require("../assets/hand-drawn-star1.png")}
            />
            <Text style={[styles.kReviews1, styles.reviewsTypo]}>
              4.91 (2.9k reviews)
            </Text>
          </View>
          <Text style={[styles.rs259hr, styles.rs259hrTypo]}>Rs.259/hr</Text>
          <Text
            style={[
              styles.timelyHarvestingOf,
              styles.timelyHarvestingOfPosition,
            ]}
          >{`Timely harvesting of crops
Efficient use of equipment
Proper handling to minimize damage`}</Text>
          <ImageBackground
            style={[styles.image18Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image18.png")}
          />
          <Pressable style={[styles.addWrapper, styles.addLayout]}>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
          <Text style={[styles.viewDetails, styles.addTypo]}>View Details</Text>
        </View>
        <View style={[styles.qualityCheckParent, styles.parentLayout]}>
          <Text style={[styles.harvesting, styles.harvestingFlexBox]}>
            Quality Check
          </Text>
          <View
            style={[styles.handDrawnStarParent, styles.kReviewsWrapperLayout]}
          >
            <Image
              style={[styles.handDrawnStar1, styles.handDrawnStar1Position]}
              resizeMode="cover"
              source={require("../assets/hand-drawn-star1.png")}
            />
            <Text style={[styles.kReviews1, styles.reviewsTypo]}>
              4.81 (2.6k reviews)
            </Text>
          </View>
          <Text style={[styles.rs199hr, styles.rs259hrTypo]}>Rs.199/hr</Text>
          <View style={styles.frameInner} />
          <Text
            style={[
              styles.timelyHarvestingOf,
              styles.timelyHarvestingOfPosition,
            ]}
          >{`Inspection procedures
Quality standards compliance
Sorting and grading`}</Text>
          <ImageBackground
            style={[styles.image19Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image19.png")}
          />
          <Pressable style={[styles.addContainer, styles.addLayout]}>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
          <Text style={[styles.viewDetails, styles.addTypo]}>View Details</Text>
        </View>
        <View style={[styles.packagingParent, styles.parentLayout]}>
          <Text style={[styles.harvesting, styles.harvestingFlexBox]}>
            Packaging
          </Text>
          <View
            style={[styles.handDrawnStarParent, styles.kReviewsWrapperLayout]}
          >
            <Image
              style={[styles.handDrawnStar1, styles.handDrawnStar1Position]}
              resizeMode="cover"
              source={require("../assets/hand-drawn-star1.png")}
            />
            <Text style={[styles.kReviews1, styles.reviewsTypo]}>
              4.72 (2.1k reviews)
            </Text>
          </View>
          <Text style={[styles.rs199hr, styles.rs259hrTypo]}>Rs.149/hr</Text>
          <Text
            style={[
              styles.packagingMaterialsSelection,
              styles.timelyHarvestingOfPosition,
            ]}
          >{`Packaging materials selection
Packaging methods
Labeling and branding`}</Text>
          <Text style={[styles.viewDetails, styles.addTypo]}>View Details</Text>
          <ImageBackground
            style={[styles.image15Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image151.png")}
          />
          <Pressable style={[styles.addFrame, styles.addLayout]}>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.backarrow, styles.backarrowLayout]}
          onPress={() => navigation.navigate("IPhone11ProX")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backarrow2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.component3}
          onPress={() => navigation.navigate("Cart2")}
        >
          <LinearGradient
            style={[styles.component3Inner, styles.cartParentPosition]}
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
              <Pressable
                style={styles.groupWrapper}
                onPress={() => navigation.navigate("Cart2")}
              >
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
  frameParentBg: {
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
  harvestingFlexBox: {
    textAlign: "left",
    lineHeight: 21,
    color: Color.labelColorLightPrimary,
  },
  heartIconLayout: {
    height: 21,
    width: 21,
  },
  heartIconPosition: {
    top: 17,
    position: "absolute",
  },
  saleLayout1: {
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
    position: "absolute",
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
  cashbackGPosition: {
    left: 38,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  kReviewsWrapperLayout: {
    height: 19,
    position: "absolute",
  },
  reviewsTypo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    height: 19,
    width: 147,
    textAlign: "left",
    lineHeight: 21,
    top: 0,
    position: "absolute",
  },
  backarrowLayout: {
    height: 24,
    position: "absolute",
  },
  frameGroupLayout: {
    height: 208,
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
  rs259hrTypo: {
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
  timelyHarvestingOfPosition: {
    left: 25,
    top: 73,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    position: "absolute",
  },
  iconLayout2: {
    height: 92,
    width: 163,
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
    height: 254,
  },
  harvestingAndManagement: {
    width: 348,
    height: 52,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
    fontSize: FontSize.size_xl,
    left: 26,
    top: 11,
  },
  heartIcon: {
    left: 22,
    top: 17,
    position: "absolute",
  },
  knowMoreAbout: {
    left: 51,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 325,
    height: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    color: Color.labelColorLightPrimary,
    top: 17,
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
    left: 30,
    top: 11,
  },
  offUpto200: {
    left: 59,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
    top: 9,
    width: 136,
  },
  useCodeEasnew: {
    top: 25,
    height: 15,
    left: 59,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  salePriceTagParent: {
    left: 16,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 165,
  },
  salePriceTag1: {
    top: 13,
    left: 9,
  },
  cashbackG: {
    height: 28,
    width: 136,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.labelColorLightPrimary,
    top: 11,
  },
  useCodeEasnew1: {
    top: 27,
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
    top: 53,
    left: 26,
    position: "absolute",
  },
  kReviews: {
    fontSize: FontSize.size_sm,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    left: 0,
  },
  kReviewsWrapper: {
    left: 48,
    width: 147,
    height: 19,
    top: 53,
  },
  harvestingAndManagementServParent: {
    top: 254,
    height: 256,
    width: 414,
    left: 0,
    position: "absolute",
  },
  image17Icon: {
    left: -1,
    width: 415,
  },
  bookServices: {
    top: 8,
    width: 143,
    fontFamily: FontFamily.interMedium,
    height: 24,
    fontWeight: "500",
    left: 13,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    fontSize: FontSize.size_xl,
  },
  startingAtRs: {
    fontSize: FontSize.size_lg,
    width: 132,
    height: 42,
    left: 13,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 9,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
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
    top: 171,
    left: 13,
    position: "absolute",
  },
  startingAtRs149HrPerSeParent: {
    borderRadius: Border.br_2xs,
    width: 378,
    left: 0,
    top: 0,
    height: 208,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  image16Icon: {
    left: 183,
    width: 204,
    borderRadius: Border.br_mid,
    height: 208,
    top: 0,
    position: "absolute",
  },
  frameGroup: {
    top: 42,
    width: 387,
    left: 13,
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
  harvesting: {
    top: 14,
    width: 186,
    height: 16,
    left: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  handDrawnStar1: {
    width: 14,
    height: 14,
    left: 0,
  },
  kReviews1: {
    left: 14,
    color: Color.colorGray_400,
    fontSize: FontSize.smallBodyTextLight12_size,
  },
  handDrawnStarParent: {
    top: 32,
    width: 161,
    left: 21,
  },
  rs259hr: {
    width: 67,
  },
  timelyHarvestingOf: {
    fontSize: FontSize.smallBodyTextLight12_size,
  },
  image18Icon: {
    top: 20,
    left: 223,
    height: 92,
  },
  add: {
    top: 4,
    left: 12,
    width: 35,
    height: 15,
    fontSize: FontSize.size_base,
  },
  addWrapper: {
    top: 100,
    left: 276,
  },
  viewDetails: {
    top: 136,
    width: 83,
    fontSize: FontSize.smallBodyTextLight12_size,
    left: 21,
    height: 18,
  },
  harvestingParent: {
    top: 770,
  },
  rs199hr: {
    width: 71,
  },
  frameInner: {
    backgroundColor: Color.colorDimgray_300,
    height: 84,
    width: 163,
    left: 223,
    borderRadius: Border.br_mid,
    top: 27,
    position: "absolute",
    overflow: "hidden",
  },
  image19Icon: {
    left: 223,
    height: 92,
    top: 27,
  },
  addContainer: {
    top: 102,
    left: 279,
  },
  qualityCheckParent: {
    top: 942,
  },
  packagingMaterialsSelection: {
    fontSize: FontSize.size_xs_5,
  },
  image15Icon: {
    top: 30,
    left: 221,
  },
  addFrame: {
    top: 108,
    left: 277,
  },
  packagingParent: {
    top: 1114,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    left: 20,
    top: 26,
    width: 34,
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
    left: 31,
    width: 405,
    flexDirection: "row",
  },
  component3Inner: {
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
    top: 2,
    left: 7,
    zIndex: 1,
  },
  ellipseParent: {
    height: "39.62%",
    width: "4.51%",
    right: "6.65%",
    bottom: "60.38%",
    left: "88.84%",
    flexDirection: "row",
  },
  component3: {
    top: 1271,
    left: -23,
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

export default Frame4;
