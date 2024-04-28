import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TrackOrder = () => {
  return (
    <View style={styles.trackOrder}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.body}>
        <View style={styles.orderheadPosition}>
          <View style={[styles.orderheadChild, styles.orderheadPosition]} />
          <View style={styles.order90897Parent}>
            <Text style={styles.order90897}>{`Order #90897 `}</Text>
            <Text style={[styles.placedOnApril, styles.placedOnAprilTypo]}>
              Placed on April 28 2024
            </Text>
          </View>
          <Image
            style={[styles.orderheadItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-142.png")}
          />
        </View>
        <View style={[styles.orderstatus, styles.orderstatusLayout]}>
          <View style={[styles.orderstatusChild, styles.orderstatusLayout]} />
          <View style={styles.orderstatusItem} />
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <View
              style={[styles.orderPlacedParent, styles.orderParentPosition]}
            >
              <Text style={styles.order90897}>Order Placed</Text>
              <Text style={[styles.octobar212021, styles.trackOrder1Typo]}>
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
              style={[styles.orderConfirmedParent, styles.orderParentPosition]}
            >
              <Text style={styles.order90897}>Order Confirmed</Text>
              <Text style={[styles.octobar212021, styles.trackOrder1Typo]}>
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
              style={[styles.orderShippedParent, styles.orderParentPosition]}
            >
              <Text style={styles.order90897}>Order Shipped</Text>
              <Text style={[styles.octobar212021, styles.trackOrder1Typo]}>
                Octobar 21 2021
              </Text>
            </View>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-1472.png")}
            />
            <View style={styles.groupItem} />
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <View
              style={[styles.outForDeliveryParent, styles.orderParentPosition]}
            >
              <Text style={styles.order90897}>Out for Delivery</Text>
              <Text style={[styles.octobar212021, styles.trackOrder1Typo]}>
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
              style={[styles.orderDeliveredParent, styles.orderParentPosition]}
            >
              <Text style={styles.order90897}>Order Delivered</Text>
              <Text style={[styles.octobar212021, styles.trackOrder1Typo]}>
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
        <Text style={[styles.trackOrder1, styles.trackOrder1Typo]}>
          Track Order
        </Text>
        <Image
          style={styles.backarrowIcon}
          resizeMode="cover"
          source={require("../assets/backarrow.png")}
        />
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
  orderParentPosition: {
    height: 40,
    top: 13,
    left: 81,
    position: "absolute",
  },
  trackOrder1Typo: {
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
  order90897: {
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
  order90897Parent: {
    left: 100,
    height: 58,
    width: 126,
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
  orderPlacedParent: {
    width: 104,
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
  orderConfirmedParent: {
    width: 136,
  },
  groupContainer: {
    top: 136,
  },
  orderShippedParent: {
    width: 115,
  },
  groupView: {
    top: 244,
  },
  outForDeliveryParent: {
    width: 125,
  },
  groupParent1: {
    top: 352,
  },
  orderDeliveredParent: {
    width: 126,
  },
  groupParent2: {
    top: 460,
    width: 207,
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
  trackOrder1: {
    top: 63,
    left: 151,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0.5,
    fontWeight: "500",
  },
  backarrowIcon: {
    top: 68,
    width: 23,
    height: 16,
    left: 17,
    position: "absolute",
  },
  trackOrder: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
    backgroundColor: Color.white,
  },
});

export default TrackOrder;
