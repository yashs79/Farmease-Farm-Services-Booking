import * as React from "react";
import { View, Pressable, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame11 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <Pressable style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={styles.groupItem} />
        <Text style={[styles.harvest, styles.pestFlexBox]}>Harvest</Text>
        <Pressable
          style={[styles.image19, styles.image19Layout]}
          onPress={() => navigation.navigate("Frame2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/image-15.png")}
          />
        </Pressable>
      </Pressable>
      <Pressable
        style={styles.groupContainer}
        onPress={() => navigation.navigate("Frame3")}
      >
        <View style={[styles.rectangleGroup, styles.pestLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.pest, styles.pestLayout]}>{`Pest
`}</Text>
        </View>
        <Image
          style={[styles.image13Icon, styles.image191Layout]}
          resizeMode="cover"
          source={require("../assets/image-131.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.groupPressablePosition]}
        onPress={() => navigation.navigate("Frame3")}
      >
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Text style={[styles.maintenance, styles.plantingFlexBox]}>
          Maintenance
        </Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPressablePosition]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Text style={[styles.planting, styles.plantingFlexBox]}>Planting</Text>
        <View style={[styles.groupChild2, styles.frameViewPosition]} />
        <Image
          style={[styles.image10Icon, styles.image19Layout]}
          resizeMode="cover"
          source={require("../assets/image-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.seeAllParent, styles.categoriesFlexBox]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <Text style={[styles.seeAll, styles.seeAllLayout]}>See all</Text>
        <Image
          style={styles.chevronRightIcon}
          resizeMode="cover"
          source={require("../assets/chevronright.png")}
        />
      </Pressable>
      <Text style={[styles.categories, styles.seeAllLayout]}>Categories</Text>
      <Pressable
        style={[styles.image191, styles.image191Layout]}
        onPress={() => navigation.navigate("Frame4")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-18.png")}
        />
      </Pressable>
      <Image
        style={styles.closeWindowIcon}
        resizeMode="cover"
        source={require("../assets/close-window.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    display: "none",
    backgroundColor: Color.colorSilver_200,
    height: 123,
    width: 88,
    position: "absolute",
  },
  pestFlexBox: {
    justifyContent: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    fontSize: FontSize.smallBodyTextLight12_size,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.gray1,
  },
  image19Layout: {
    height: 61,
    width: 65,
    position: "absolute",
  },
  pestLayout: {
    height: 39,
    width: 51,
    position: "absolute",
  },
  image191Layout: {
    height: 62,
    width: 64,
    position: "absolute",
  },
  groupPressablePosition: {
    top: 57,
    height: 123,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 123,
    top: 0,
    width: 88,
    position: "absolute",
  },
  frameViewPosition: {
    top: 14,
    height: 58,
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  plantingFlexBox: {
    top: 81,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.gray1,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    fontSize: FontSize.smallBodyTextLight12_size,
    position: "absolute",
  },
  categoriesFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  seeAllLayout: {
    letterSpacing: 0,
    lineHeight: 18,
  },
  groupChild: {
    top: -14,
    left: 184,
  },
  groupItem: {
    height: 58,
    borderRadius: Border.br_mini,
    width: 63,
    backgroundColor: Color.colorMediumseagreen_200,
    left: 208,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  harvest: {
    width: 71,
    height: 19,
    top: 67,
    left: 208,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    fontSize: FontSize.smallBodyTextLight12_size,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_mid,
  },
  image19: {
    left: 0,
    top: 0,
  },
  rectangleParent: {
    top: 71,
    left: 119,
    width: 279,
    height: 86,
    position: "absolute",
  },
  groupInner: {
    top: -80,
    left: -19,
  },
  pest: {
    left: 0,
    justifyContent: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    fontSize: FontSize.smallBodyTextLight12_size,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.gray1,
    top: 0,
  },
  rectangleGroup: {
    left: 7,
    top: 69,
    width: 51,
  },
  image13Icon: {
    borderRadius: Border.br_mid,
    left: 0,
    top: 0,
  },
  groupContainer: {
    left: 222,
    height: 108,
    width: 64,
    top: 69,
    position: "absolute",
  },
  rectangleView: {
    left: 3,
    top: 0,
  },
  frameView: {
    left: 16,
    width: 63,
    backgroundColor: Color.colorMediumseagreen_200,
    top: 14,
  },
  maintenance: {
    width: 94,
    left: 0,
    height: 19,
  },
  rectangleContainer: {
    left: 105,
    width: 94,
  },
  groupChild1: {
    left: 0,
    top: 0,
  },
  planting: {
    width: 74,
    height: 20,
    left: 7,
  },
  groupChild2: {
    left: 14,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 62,
  },
  image10Icon: {
    top: 11,
    left: 13,
    borderRadius: Border.br_mid,
  },
  groupPressable: {
    left: 5,
    width: 88,
    top: 57,
  },
  seeAll: {
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorYellowgreen_100,
    letterSpacing: 0,
    textAlign: "center",
  },
  chevronRightIcon: {
    width: 20,
    marginLeft: 2,
    height: 20,
    overflow: "hidden",
  },
  seeAllParent: {
    top: 26,
    left: 315,
    width: 86,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  categories: {
    top: 27,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    width: 106,
    left: 7,
    alignItems: "center",
    position: "absolute",
    display: "flex",
    color: Color.gray1,
    letterSpacing: 0,
  },
  image191: {
    left: 327,
    top: 67,
  },
  closeWindowIcon: {
    top: -2,
    left: 389,
    width: 26,
    height: 26,
    position: "absolute",
  },
  groupParent: {
    backgroundColor: Color.white,
    width: 413,
    height: 157,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default Frame11;
