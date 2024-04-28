import React, { useState, useCallback } from "react";
import { Image, StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RectangleComponent from "../components/RectangleComponent";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const FarmerForm = () => {
  const navigation = useNavigation();
  const [primaryButtonContainerVisible, setPrimaryButtonContainerVisible] =
    useState(false);

  const openPrimaryButtonContainer = useCallback(() => {
    setPrimaryButtonContainerVisible(true);
  }, []);

  const closePrimaryButtonContainer = useCallback(() => {
    setPrimaryButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.farmerForm}>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <View style={styles.titlebarPosition}>
          <View style={[styles.titlebarChild, styles.titlebarPosition]} />
          <Text style={styles.addDetails}>Add Details</Text>
          <Pressable
            style={[styles.backarrow, styles.backarrowLayout]}
            onPress={() => navigation.navigate("Onboard1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/backarrow.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.body, styles.bodyPosition]}>
          <Pressable
            style={styles.primarybutton}
            onPress={openPrimaryButtonContainer}
          >
            <Image
              style={[styles.rectangleIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={styles.title}>Add details</Text>
          </Pressable>
          <View style={[styles.saveaddress, styles.bodyPosition]}>
            <Text style={styles.saveThisAddress}>Save this address</Text>
            <Image
              style={[styles.saveaddressChild, styles.backarrowLayout]}
              resizeMode="cover"
              source={require("../assets/group-6.png")}
            />
          </View>
          <View style={[styles.namefield, styles.namefieldPosition]}>
            <View style={[styles.namefieldChild, styles.namefieldPosition]} />
            <Image
              style={[styles.groupIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group5.png")}
            />
            <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          </View>
          <View style={[styles.emailfield, styles.namefieldPosition]}>
            <View style={[styles.namefieldChild, styles.namefieldPosition]} />
            <Image
              style={[styles.groupIcon1, styles.groupIconPosition]}
              resizeMode="cover"
              source={require("../assets/group11.png")}
            />
            <Text style={[styles.name, styles.nameTypo]}>Email address</Text>
          </View>
          <View style={[styles.phonefield, styles.namefieldPosition]}>
            <View style={[styles.namefieldChild, styles.namefieldPosition]} />
            <Image
              style={[styles.telephone1Icon, styles.fullTimePartPosition]}
              resizeMode="cover"
              source={require("../assets/telephone-1.png")}
            />
            <Text style={[styles.name, styles.nameTypo]}>Phone number</Text>
          </View>
          <View style={[styles.addressfield, styles.namefieldPosition]}>
            <View style={[styles.namefieldChild, styles.namefieldPosition]} />
            <Text style={[styles.name, styles.nameTypo]}>Address</Text>
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group21.png")}
            />
          </View>
          <View style={[styles.zipcodefield, styles.namefieldPosition]}>
            <View style={[styles.namefieldChild, styles.namefieldPosition]} />
            <Text style={[styles.fullTimePart, styles.fullTimePartPosition]}>
              Full Time/ Part Time Opportunity
            </Text>
            <Image
              style={[styles.groupIcon3, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group31.png")}
            />
          </View>
          <View style={[styles.cityfield, styles.namefieldPosition]}>
            <View style={[styles.namefieldChild, styles.namefieldPosition]} />
            <Text style={[styles.fullTimePart, styles.fullTimePartPosition]}>
              Past Experience
            </Text>
            <Image
              style={[styles.groupIcon4, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/group41.png")}
            />
          </View>
          <View style={[styles.countryfield, styles.namefieldPosition]}>
            <View style={[styles.namefieldChild, styles.namefieldPosition]} />
            <Image
              style={styles.countryfieldItem}
              resizeMode="cover"
              source={require("../assets/polygon-21.png")}
            />
            <Text style={[styles.fullTimePart, styles.fullTimePartPosition]}>
              Country
            </Text>
            <Image
              style={[styles.vectorIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={primaryButtonContainerVisible}
      >
        <View style={styles.primaryButtonContainerOverlay}>
          <Pressable
            style={styles.primaryButtonContainerBg}
            onPress={closePrimaryButtonContainer}
          />
          <RectangleComponent onClose={closePrimaryButtonContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  titlebarPosition: {
    height: 118,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backarrowLayout: {
    height: 16,
    position: "absolute",
  },
  bodyPosition: {
    left: 16,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  namefieldPosition: {
    left: "50%",
    width: 380,
    position: "absolute",
  },
  iconLayout: {
    bottom: "30%",
    width: "6.32%",
    height: "40%",
  },
  nameTypo: {
    color: Color.colorGray_200,
    left: 62,
    textAlign: "left",
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  groupIconPosition: {
    right: "89.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fullTimePartPosition: {
    top: 18,
    position: "absolute",
  },
  iconPosition: {
    right: "88.95%",
    top: "30%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backgroundIcon: {
    width: 414,
    top: 0,
    left: 0,
    position: "absolute",
    height: 896,
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  addDetails: {
    top: 63,
    left: 153,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    letterSpacing: 0.5,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    left: 17,
    top: 68,
    width: 23,
  },
  primaryButtonContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  primaryButtonContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleIcon: {
    right: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  title: {
    left: "38.68%",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    fontSize: FontSize.paragraph1_size,
    top: "30%",
    textAlign: "center",
    position: "absolute",
  },
  primarybutton: {
    top: 646,
    left: 1,
    height: 60,
    width: 380,
    position: "absolute",
  },
  saveThisAddress: {
    left: 37,
    fontSize: FontSize.smallBodyTextLight12_size,
    letterSpacing: 0.4,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  saveaddressChild: {
    top: 1,
    width: 29,
    left: 0,
    height: 16,
  },
  saveaddress: {
    top: 470,
    width: 150,
    height: 18,
  },
  namefieldChild: {
    marginLeft: -190,
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
  },
  groupIcon: {
    left: "4.47%",
    right: "89.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    top: "30%",
    bottom: "30%",
    width: "6.32%",
    height: "40%",
  },
  name: {
    top: 19,
    position: "absolute",
  },
  namefield: {
    bottom: "91.5%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
    top: "0%",
  },
  groupIcon1: {
    height: "29.17%",
    width: "6.05%",
    top: "35.83%",
    bottom: "35%",
    left: "4.74%",
  },
  emailfield: {
    top: "9.21%",
    bottom: "82.29%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
  },
  telephone1Icon: {
    left: 18,
    height: 23,
    width: 23,
    overflow: "hidden",
  },
  phonefield: {
    top: "18.41%",
    bottom: "73.09%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
  },
  groupIcon2: {
    height: "43.83%",
    width: "5.32%",
    top: "28.33%",
    right: "89.45%",
    bottom: "27.83%",
    left: "5.24%",
  },
  addressfield: {
    top: "27.62%",
    bottom: "63.88%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
  },
  fullTimePart: {
    color: Color.colorGray_200,
    left: 62,
    textAlign: "left",
    fontSize: FontSize.paragraph1_size,
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  groupIcon3: {
    height: "29.83%",
    width: "6.71%",
    top: "35%",
    right: "88.76%",
    bottom: "35.17%",
    left: "4.53%",
  },
  zipcodefield: {
    top: "36.83%",
    bottom: "54.67%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
  },
  groupIcon4: {
    height: "40.17%",
    width: "6.34%",
    bottom: "29.83%",
    left: "4.71%",
  },
  cityfield: {
    marginLeft: -189.5,
    top: "46.03%",
    bottom: "45.47%",
    height: "8.5%",
    left: "50%",
  },
  countryfieldItem: {
    top: 24,
    left: 343,
    width: 14,
    height: 11,
    position: "absolute",
  },
  vectorIcon: {
    left: "4.74%",
    bottom: "30%",
    width: "6.32%",
    height: "40%",
  },
  countryfield: {
    top: "55.24%",
    bottom: "36.26%",
    marginLeft: -190.5,
    left: "50%",
    height: "8.5%",
  },
  body: {
    top: 154,
    width: 381,
    height: 706,
  },
  farmerForm: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default FarmerForm;
