import * as React from "react";
import {
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Onboard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboard}>
      <Pressable
        style={[styles.farmerParent, styles.parentShadowBox]}
        onPress={() => navigation.navigate("FarmerForm")}
      >
        <ImageBackground
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/farmer.png")}
        />
        <Text style={[styles.farmingJob, styles.farmingJobFlexBox]}>
          Farming job
        </Text>
        <Text style={styles.seekingYourNextContainer}>
          <Text style={styles.seekingYourNext}>{`Seeking your next farming gig?
 Join `}</Text>
          <Text style={styles.farmease}>FarmEase</Text>
          <Text style={styles.seekingYourNext}>{` and become a valued `}</Text>
          <Text style={styles.farmease}>FarmZ</Text>
          <Text style={styles.seekingYourNext}>!</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.landlordParent, styles.parentShadowBox]}
        onPress={() => navigation.navigate("IPhone11ProX")}
      >
        <ImageBackground
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/landlord2.png")}
        />
        <Text style={[styles.farmingJob, styles.farmingJobFlexBox]}>
          Agri services
        </Text>
        <Text style={styles.seekingYourNextContainer}>
          <Text
            style={styles.seekingYourNext}
          >{`Looking for capable farmers to `}</Text>
          <Text style={styles.tendYourLand}>tend your land</Text>
          <Text
            style={styles.seekingYourNext}
          >{`? Connect with our network of `}</Text>
          <Text style={styles.tendYourLand}>skilled</Text>
          <Text style={styles.seekingYourNext}> farmers.</Text>
        </Text>
      </Pressable>
      <Text
        style={[styles.whatBringsYou, styles.farmingJobFlexBox]}
      >{`what brings you
 here?`}</Text>
      <Text style={[styles.selectAnyOne, styles.farmingJobFlexBox]}>
        *select any one below
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    paddingHorizontal: 11,
    justifyContent: "center",
    alignItems: "center",
    width: 216,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs_3,
    shadowOpacity: 1,
    elevation: 7.3,
    shadowRadius: 7.3,
    shadowOffset: {
      width: 0,
      height: 7.2953338623046875,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    left: 99,
    position: "absolute",
  },
  farmingJobFlexBox: {
    textAlign: "left",
    lineHeight: 18,
  },
  farmerIcon: {
    width: 50,
    height: 50,
  },
  farmingJob: {
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    marginTop: 14,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 18,
  },
  seekingYourNext: {
    color: Color.colorGray_100,
  },
  farmease: {
    color: Color.colorYellowgreen_300,
  },
  seekingYourNextContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    textAlign: "center",
    width: 140,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 14,
  },
  farmerParent: {
    top: 230,
    height: 240,
    paddingVertical: 15,
  },
  tendYourLand: {
    color: Color.colorYellowgreen_400,
  },
  landlordParent: {
    top: 508,
    height: 241,
    paddingTop: Padding.p_lgi,
    paddingBottom: 15,
  },
  whatBringsYou: {
    top: 94,
    left: 47,
    fontSize: FontSize.size_21xl,
    color: Color.labelColorLightPrimary,
    width: 372,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  selectAnyOne: {
    top: 168,
    left: 95,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 239,
    height: 15,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  onboard: {
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboard1;
