import * as React from "react";
import {
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Onboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboard}>
      <Pressable
        style={[styles.farmerParent, styles.parentShadowBox]}
        onPress={() => navigation.navigate("Onboard1")}
      >
        <ImageBackground
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/farmer.png")}
        />
        <Text style={styles.farmer}>Farmer</Text>
        <Text
          style={[
            styles.lookingToUtilizeContainer,
            styles.lookingContainerTypo,
          ]}
        >
          <Text style={styles.lookingTo}>{`looking to `}</Text>
          <Text style={styles.utilizeYourSkills}>{`utilize your skills `}</Text>
          <Text
            style={styles.lookingTo}
          >{`at right place? or looking for a `}</Text>
          <Text style={styles.skillfullFarmz}>skillfull farmz</Text>
          <Text style={styles.lookingTo}> to solve your farm problems.</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.landlordParent, styles.parentShadowBox]}
        onPress={() => navigation.navigate("VEGETABLEMENU")}
      >
        <ImageBackground
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/landlord1.png")}
        />
        <Text style={styles.farmer}>Retailers</Text>
        <Text
          style={[
            styles.lookingForCapableContainer,
            styles.lookingContainerTypo,
          ]}
        >
          <Text style={styles.lookingTo}>{`Looking for capable `}</Text>
          <Text style={styles.skillfullFarmz}>network of farmers</Text>
          <Text style={styles.lookingTo}>
            {" "}
            to trade agricultural farm grown products
          </Text>
        </Text>
      </Pressable>
      <Text style={styles.whoAreYou}>who are you?</Text>
      <Text style={styles.selectAnyOne}>*select any one below</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    paddingHorizontal: 11,
    justifyContent: "center",
    alignItems: "center",
    height: 240,
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
  lookingContainerTypo: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 14,
  },
  farmerIcon: {
    width: 50,
    height: 50,
  },
  farmer: {
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    marginTop: 14,
    textAlign: "left",
    color: Color.colorDimgray_100,
    lineHeight: 18,
    fontSize: FontSize.size_xl,
  },
  lookingTo: {
    color: Color.colorGray_100,
  },
  utilizeYourSkills: {
    color: Color.colorYellowgreen_400,
  },
  skillfullFarmz: {
    color: Color.colorYellowgreen_200,
  },
  lookingToUtilizeContainer: {
    width: 178,
  },
  farmerParent: {
    top: 230,
    paddingVertical: 15,
  },
  lookingForCapableContainer: {
    width: 155,
  },
  landlordParent: {
    top: 508,
    paddingTop: Padding.p_lgi,
    paddingBottom: 15,
  },
  whoAreYou: {
    top: 120,
    left: 74,
    fontSize: FontSize.size_21xl,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  selectAnyOne: {
    top: 162,
    left: 94,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 239,
    height: 15,
    textAlign: "left",
    color: Color.colorDimgray_100,
    lineHeight: 18,
    fontSize: FontSize.size_xl,
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

export default Onboard;
