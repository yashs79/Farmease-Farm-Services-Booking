import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TrackService = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.trackService}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.body}>
        <View style={styles.orderheadPosition}>
          <View style={[styles.orderheadChild, styles.orderheadPosition]} />
          <View style={styles.service90897Parent}>
            <Text style={styles.service90897}>{`Service #90897 `}</Text>
            <Text style={[styles.placedOnApril, styles.placedOnAprilTypo]}>
              Placed on April 28 2024
            </Text>
          </View>
          <Image
            style={[styles.orderheadItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-1421.png")}
          />
        </View>
        <View style={[styles.orderstatus, styles.orderstatusLayout]}>
          <View style={[styles.orderstatusChild, styles.orderstatusLayout]} />
          <View style={styles.orderstatusItem} />
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <View
              style={[
                styles.serviceRequestedParent,
                styles.farmzParentPosition,
              ]}
            >
              <Text style={styles.service90897}>Service Requested</Text>
              <Text style={[styles.octobar212021, styles.trackBookingTypo]}>
                Octobar 21 2021
              </Text>
            </View>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-147.png")}
            />
            <View style={styles.groupItem} />
          </View>
          <View style={[styles.groupContainer, styles.groupParentLayout]}>
            <View
              style={[
                styles.serviceRequestConfirmedParent,
                styles.farmzParentPosition,
              ]}
            >
              <Text style={styles.service90897}>Service Request Confirmed</Text>
              <Text style={[styles.octobar212021, styles.trackBookingTypo]}>
                Octobar 21 2021
              </Text>
            </View>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-1471.png")}
            />
            <View style={styles.groupItem} />
          </View>
          <View style={[styles.groupView, styles.groupParentLayout]}>
            <View
              style={[
                styles.assigningYouAFarmzParent,
                styles.farmzParentPosition,
              ]}
            >
              <Text style={styles.service90897}>Assigning you a FarmZ</Text>
              <Text style={[styles.octobar212021, styles.trackBookingTypo]}>
                Octobar 21 2021
              </Text>
            </View>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-1475.png")}
            />
            <View style={styles.groupItem} />
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <View
              style={[styles.farmzOnTheirWayParent, styles.farmzParentPosition]}
            >
              <Text style={styles.service90897}>FarmZ on their way</Text>
              <Text style={[styles.octobar212021, styles.trackBookingTypo]}>
                Pending
              </Text>
            </View>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-1473.png")}
            />
            <View style={styles.groupItem} />
          </View>
          <View style={[styles.groupParent2, styles.groupLayout]}>
            <View
              style={[
                styles.serviceCompletedParent,
                styles.farmzParentPosition,
              ]}
            >
              <Text style={styles.service90897}>Service Completed</Text>
              <Text style={[styles.octobar212021, styles.trackBookingTypo]}>
                Pending
              </Text>
            </View>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-1474.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.titlebarPosition}>
        <View style={[styles.titlebarChild, styles.titlebarPosition]} />
        <Text style={[styles.trackBooking, styles.trackBookingTypo]}>
          Track Booking
        </Text>
        <Pressable
          style={styles.backarrow}
          onPress={() => navigation.navigate("IPhone11ProX")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backarrow.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderheadPosition: {
    height: 107,
    width: 380,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placedOnAprilTypo: {
    color: Color.colorGray_200,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 0,
  },
  groupLayout: {
    height: 66,
    position: "absolute",
  },
  orderstatusLayout: {
    height: 553,
    width: 380,
    left: 0,
    position: "absolute",
  },
  groupParentLayout: {
    height: 76,
    width: 361,
    left: 19,
    position: "absolute",
  },
  farmzParentPosition: {
    height: 40,
    top: 13,
    left: 81,
    position: "absolute",
  },
  trackBookingTypo: {
    fontFamily: FontFamily.paragraph1,
    fontWeight: "500",
    position: "absolute",
  },
  titlebarPosition: {
    height: 118,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backgroundIcon: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  orderheadChild: {
    backgroundColor: Color.white,
  },
  service90897: {
    fontSize: FontSize.paragraph1_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0.5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placedOnApril: {
    top: 23,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  service90897Parent: {
    left: 100,
    width: 126,
    height: 38,
    top: 25,
    position: "absolute",
  },
  orderheadItem: {
    top: 21,
    width: 66,
    height: 66,
    left: 19,
  },
  orderstatusChild: {
    top: 0,
    height: 553,
    backgroundColor: Color.white,
  },
  orderstatusItem: {
    top: 89,
    left: 52,
    borderRightWidth: 1,
    width: 1,
    height: 415,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    position: "absolute",
  },
  octobar212021: {
    color: Color.colorGray_200,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 0,
    top: 25,
  },
  serviceRequestedParent: {
    width: 149,
  },
  groupChild: {
    width: 66,
    height: 66,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 76,
    borderTopWidth: 1,
    width: 281,
    height: 1,
    left: 81,
    borderColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    position: "absolute",
  },
  groupParent: {
    top: 28,
  },
  serviceRequestConfirmedParent: {
    width: 218,
  },
  groupContainer: {
    top: 136,
  },
  assigningYouAFarmzParent: {
    width: 183,
  },
  groupView: {
    top: 244,
  },
  farmzOnTheirWayParent: {
    width: 154,
  },
  groupParent1: {
    top: 352,
  },
  serviceCompletedParent: {
    width: 153,
  },
  groupParent2: {
    top: 460,
    width: 234,
    left: 19,
  },
  orderstatus: {
    top: 126,
  },
  body: {
    top: 138,
    height: 679,
    width: 380,
    left: 17,
    position: "absolute",
  },
  titlebarChild: {
    backgroundColor: Color.white,
  },
  trackBooking: {
    top: 63,
    left: 140,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0.5,
    fontWeight: "500",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backarrow: {
    top: 68,
    width: 23,
    height: 16,
    left: 17,
    position: "absolute",
  },
  trackService: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default TrackService;
