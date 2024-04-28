import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FarmerProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.farmerProfile, styles.farmerProfileBg]}>
      <View style={[styles.farmerProfileChild, styles.backgroundPosition]} />
      <View style={[styles.body, styles.bodyLayout]}>
        <Pressable
          style={[styles.aboutme, styles.aboutmeLayout]}
          onPress={() => navigation.navigate("AboutMe")}
        >
          <Text style={[styles.aboutMe, styles.aboutMeTypo]}>About me</Text>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.groupIcon1, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
        </Pressable>
        <Pressable style={[styles.myorders, styles.aboutmeLayout1]}>
          <Text style={[styles.aboutMe, styles.aboutMeTypo]}>My Services</Text>
          <Image
            style={[styles.groupIcon2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <Image
            style={[styles.myordersChild, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-202.png")}
          />
        </Pressable>
        <Pressable style={[styles.myfav, styles.myfavLayout]}>
          <Text style={[styles.myFavorites, styles.aboutMeTypo]}>
            My Favorites
          </Text>
          <Image
            style={[styles.groupIcon3, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.myaddress, styles.aboutmeLayout]}
          onPress={() => navigation.navigate("AddAddress")}
        >
          <Text style={[styles.myAddress, styles.aboutMeTypo]}>My Address</Text>
          <Image
            style={[styles.groupIcon4, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.myaddressChild, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-203.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.creditcards, styles.myfavLayout]}
          onPress={() => navigation.navigate("MyCards")}
        >
          <Text style={[styles.paymentMethods, styles.aboutMeTypo]}>
            Payment Methods
          </Text>
          <Image
            style={[styles.groupIcon5, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.creditcardsChild, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-130.png")}
          />
        </Pressable>
        <Pressable style={[styles.transaction, styles.bodyLayout]}>
          <Text style={[styles.transactions, styles.signOutTypo]}>
            Transactions
          </Text>
          <Image
            style={[styles.groupIcon6, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={[styles.transactionChild, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-204.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.notification, styles.aboutmeLayout1]}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Text style={[styles.notifications, styles.aboutMeTypo]}>
            Notifications
          </Text>
          <Image
            style={[styles.groupIcon7, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group4.png")}
          />
          <Image
            style={[styles.myordersChild, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-205.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.signout, styles.aboutmeLayout]}
          onPress={() => navigation.navigate("Auth1Welcome")}
        >
          <Text style={[styles.signOut, styles.signOutTypo]}>Sign out</Text>
          <Image
            style={[styles.signoutChild, styles.iconChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-206.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.farmerXyz, styles.farmerXyzFlexBox]}>
        FARMER XYZ
      </Text>
      <Text style={[styles.farmerxyzgmailcom, styles.farmerXyzFlexBox]}>
        farmerxyz@gmail.com
      </Text>
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={[styles.backgroundParent, styles.backgroundPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.backgroundPosition]}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
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
          <Pressable style={[styles.categoriesIconAndText, styles.iconLayout]}>
            <Text style={[styles.categories, styles.homeTypo]}>Categories</Text>
            <Image
              style={[
                styles.iconlycurvedcategory,
                styles.iconlytwoToneheartPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/iconlycurvedcategory.png")}
            />
          </Pressable>
          <Pressable style={[styles.favouriteIconAndText, styles.iconLayout]}>
            <Text style={[styles.categories, styles.homeTypo]}>Favourite</Text>
            <Image
              style={[
                styles.iconlytwoToneheart,
                styles.iconlytwoToneheartPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/iconlytwotoneheart.png")}
            />
          </Pressable>
          <Pressable style={[styles.groupWrapper, styles.cartParentLayout]}>
            <View style={[styles.cartParent, styles.cartParentLayout]}>
              <Image
                style={[styles.cartIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/cart.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Cart</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  farmerProfileBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  backgroundPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  bodyLayout: {
    width: 342,
    position: "absolute",
  },
  aboutmeLayout: {
    height: 20,
    position: "absolute",
  },
  aboutMeTypo: {
    textAlign: "left",
    letterSpacing: 0.4,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.smallBodyTextLight12_size,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  iconChildPosition: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutmeLayout1: {
    width: 341,
    left: 1,
  },
  myfavLayout: {
    height: 18,
    position: "absolute",
  },
  groupIconPosition: {
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  signOutTypo: {
    top: 2,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    letterSpacing: 0.4,
    fontSize: FontSize.smallBodyTextLight12_size,
    position: "absolute",
  },
  farmerXyzFlexBox: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    color: Color.greyScaleBlack03,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.smallBodyTextLight12_size,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 41,
    marginLeft: 59,
  },
  iconlytwoToneheartPosition: {
    bottom: "41.46%",
    height: "58.54%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cartParentLayout: {
    width: 25,
    height: 40,
  },
  farmerProfileChild: {
    height: 145,
    top: 0,
    backgroundColor: Color.white,
    width: 414,
  },
  aboutMe: {
    left: 35,
    top: 1,
    letterSpacing: 0.4,
  },
  groupIcon: {
    left: "96.92%",
    width: "3.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    bottom: "5%",
    top: "5%",
    height: "90%",
  },
  groupIcon1: {
    bottom: "0%",
    right: "94.13%",
    width: "5.87%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  aboutme: {
    width: 341,
    left: 1,
    top: 0,
  },
  groupIcon2: {
    height: "94.74%",
    top: "5.26%",
    bottom: "0%",
    left: "96.92%",
    width: "3.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
  },
  myordersChild: {
    width: "5.58%",
    right: "94.42%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  myorders: {
    top: 47,
    height: 19,
    position: "absolute",
  },
  myFavorites: {
    left: 34,
    top: 0,
  },
  groupIcon3: {
    width: "3.09%",
    left: "96.91%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "88.89%",
    width: "5.3%",
    top: "11.11%",
    right: "94.7%",
    bottom: "0%",
  },
  myfav: {
    top: 93,
    left: 2,
    width: 340,
  },
  myAddress: {
    left: 32,
    top: 1,
    letterSpacing: 0.4,
  },
  groupIcon4: {
    width: "3.11%",
    left: "96.89%",
    bottom: "5%",
    top: "5%",
    height: "90%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
  },
  myaddressChild: {
    width: "4.3%",
    right: "95.7%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  myaddress: {
    top: 138,
    left: 4,
    width: 338,
  },
  paymentMethods: {
    left: 35,
    top: 0,
  },
  groupIcon5: {
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    left: "96.92%",
    width: "3.08%",
  },
  creditcardsChild: {
    height: "73.89%",
    top: "15%",
    bottom: "11.11%",
    right: "94.13%",
    width: "5.87%",
    left: "0%",
  },
  creditcards: {
    top: 185,
    width: 341,
    left: 1,
  },
  transactions: {
    left: 36,
  },
  groupIcon6: {
    height: "81.82%",
    width: "3.07%",
    top: "9.09%",
    bottom: "9.09%",
    left: "96.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
  },
  transactionChild: {
    width: "6.44%",
    right: "93.56%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  transaction: {
    top: 230,
    height: 22,
    left: 0,
  },
  notifications: {
    top: 3,
    left: 35,
  },
  groupIcon7: {
    height: "78.26%",
    top: "10.87%",
    bottom: "10.87%",
    left: "96.92%",
    width: "3.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
  },
  notification: {
    top: 279,
    height: 23,
    position: "absolute",
  },
  signOut: {
    left: 35,
  },
  signoutChild: {
    width: "24.14%",
    right: "75.86%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  signout: {
    top: 329,
    width: 87,
    left: 1,
    height: 20,
  },
  body: {
    top: 262,
    height: 349,
    left: 36,
  },
  farmerXyz: {
    top: 192,
    left: 164,
    fontSize: FontSize.paragraph1_size,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
  },
  farmerxyzgmailcom: {
    top: 213,
    left: 144,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.smallBodyTextLight12_size,
  },
  avatarIcon: {
    top: 70,
    left: 150,
    width: 114,
    height: 117,
    position: "absolute",
  },
  backgroundIcon: {
    top: -844,
    height: 896,
  },
  lomaboldhomeIcon: {
    left: 5,
  },
  home: {
    top: 24,
  },
  homeIconAndText: {
    width: 33,
    height: 40,
  },
  categories: {
    top: 25,
  },
  iconlycurvedcategory: {
    width: "38.1%",
    right: "31.75%",
    left: "30.16%",
  },
  categoriesIconAndText: {
    width: 63,
    marginLeft: 59,
  },
  iconlytwoToneheart: {
    width: "45.28%",
    right: "30.19%",
    left: "24.53%",
  },
  favouriteIconAndText: {
    width: 53,
    marginLeft: 59,
  },
  cartIcon: {
    left: 0,
  },
  cartParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    marginLeft: 59,
  },
  homeIconAndTextParent: {
    top: 7,
    left: 14,
    width: 370,
    flexDirection: "row",
    paddingLeft: 11,
    position: "absolute",
  },
  backgroundParent: {
    top: 841,
    height: 55,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  farmerProfile: {
    flex: 1,
    width: "100%",
    height: 896,
  },
});

export default FarmerProfile;
