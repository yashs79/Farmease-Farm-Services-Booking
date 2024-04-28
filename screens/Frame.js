import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frame21}>
      <View style={styles.farmerParent}>
        <Image
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/farmer1.png")}
        />
        <Text style={[styles.farmer, styles.farmerClr]}>Farmer</Text>
        <Text style={[styles.lookingOutFor, styles.lookingTypo]}>
          looking out for a job or finding a solution for your farm
        </Text>
      </View>
      <View style={styles.landlordParent}>
        <Image
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/landlord.png")}
        />
        <Text style={[styles.farmer, styles.farmerClr]}>Landlord</Text>
        <Text style={[styles.lookingOutFor, styles.lookingTypo]}>
          looking out for a job or finding a solution for your farm
        </Text>
      </View>
      <View style={[styles.getCashParent, styles.parentShadowBox]}>
        <Image
          style={styles.getCashIcon}
          resizeMode="cover"
          source={require("../assets/get-cash.png")}
        />
        <Text style={[styles.consumer, styles.farmerClr]}>Consumer</Text>
        <Text style={[styles.lookingOutFor2, styles.lookingTypo]}>
          looking out for a job or finding a solution for your farm
        </Text>
      </View>
      <View style={[styles.budgetParent, styles.parentShadowBox]}>
        <Image
          style={styles.farmerIcon}
          resizeMode="cover"
          source={require("../assets/budget.png")}
        />
        <Text style={[styles.businessman, styles.farmerClr]}>Businessman</Text>
        <Text style={[styles.lookingOutFor3, styles.lookingTypo]}>
          looking out for a job or finding a solution for your farm
        </Text>
      </View>
      <View style={[styles.frame25, styles.frameLayout1]}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <View style={styles.russellShieldsParent}>
            <Text style={[styles.russellShields, styles.text4Typo]}>
              Russell Shields
            </Text>
            <View style={styles.instanceParent}>
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/star-1.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/star-2.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/star-3.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/star-4.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/star-5.png")}
              />
              <Text style={[styles.text, styles.textTypo1]}>4.95</Text>
              <Text style={styles.reviews}>(234 reviews)</Text>
            </View>
          </View>
          <View style={styles.activeWrapper}>
            <Text style={styles.active}>Active</Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameShadowBox1]}>
          <View style={styles.frameGroup}>
            <View style={styles.statsCharWrapper}>
              <Text style={styles.statsChar}>Stats char</Text>
            </View>
            <Text style={[styles.january2023, styles.january2023Typo]}>
              January 2023
            </Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text1, styles.textTypo1]}>{`60
40
20
00`}</Text>
            <View style={styles.rectangleParent}>
              <View style={[styles.rectangleView, styles.frameChildLayout6]} />
              <View style={[styles.frameChild3, styles.frameChildLayout6]} />
              <View style={[styles.frameChild4, styles.frameChildLayout6]} />
              <View style={[styles.frameChild5, styles.frameChildLayout6]} />
              <View style={[styles.frameChild6, styles.frameChildLayout6]} />
            </View>
            <View style={styles.group}>
              <Text style={styles.text2}>53,200</Text>
              <Image
                style={styles.polygonIcon}
                resizeMode="cover"
                source={require("../assets/polygon-2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameShadowBox]}>
          <View style={styles.rectangleGroup}>
            <View style={[styles.frameChild7, styles.frameChildLayout5]} />
            <View style={[styles.frameChild8, styles.frameChildLayout4]} />
            <View style={[styles.frameChild9, styles.frameChildLayout3]} />
            <View style={[styles.frameChild10, styles.frameChildLayout4]} />
            <View style={[styles.frameChild11, styles.frameChildLayout4]} />
            <View style={[styles.frameChild12, styles.frameChildLayout2]} />
            <View style={[styles.frameChild13, styles.frameChildLayout4]} />
          </View>
          <Text style={[styles.profileViews, styles.farmerClr]}>
            Profile views
          </Text>
          <Text style={[styles.m, styles.mTypo]}>80m+</Text>
        </View>
        <View style={[styles.frameView, styles.frameShadowBox1]}>
          <View style={styles.frameShadowBox}>
            <View style={styles.rectangleGroup}>
              <View style={[styles.frameChild14, styles.frameChildLayout5]} />
              <View style={[styles.frameChild15, styles.frameChildLayout4]} />
              <View style={[styles.frameChild11, styles.frameChildLayout4]} />
              <View style={[styles.frameChild17, styles.frameChildLayout4]} />
              <View style={[styles.frameChild18, styles.frameChildLayout3]} />
              <View style={[styles.frameChild19, styles.frameChildLayout2]} />
              <View style={[styles.frameChild20, styles.frameChildLayout4]} />
            </View>
            <Text style={[styles.profileViews, styles.farmerClr]}>
              Regular user
            </Text>
            <Text style={[styles.m, styles.mTypo]}>24m</Text>
          </View>
          <View style={styles.frameWrapper}>
            <View>
              <Text style={styles.mTypo}>Top Freelancers</Text>
              <View style={styles.ellipseGroup}>
                <Image
                  style={styles.ellipseIconLayout}
                  resizeMode="cover"
                  source={require("../assets/ellipse-2.png")}
                />
                <Image
                  style={[styles.frameChild21, styles.ellipseIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-3.png")}
                />
                <Image
                  style={[styles.frameChild21, styles.ellipseIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-4.png")}
                />
                <Image
                  style={[styles.frameChild21, styles.ellipseIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-5.png")}
                />
                <Image
                  style={[styles.frameChild21, styles.ellipseIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-6.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame26, styles.frameLayout1]}>
        <View style={[styles.frameParent2, styles.frameParentShadowBox]}>
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-39877.png")}
            />
            <Text style={[styles.recentActivities, styles.text4Clr]}>
              Recent Activities
            </Text>
          </View>
          <View style={[styles.frameWrapper1, styles.frameParentSpaceBlock]}>
            <View style={styles.frameParent3}>
              <View
                style={[styles.rectangleParent1, styles.rectangleParentFlexBox]}
              >
                <View style={[styles.frameChild25, styles.frameChildLayout1]} />
                <Text style={styles.am}>3am</Text>
              </View>
              <View style={[styles.rectangleParent2, styles.parentSpaceBlock]}>
                <View style={[styles.frameChild26, styles.frameChildLayout1]} />
                <Text style={styles.am}>5am</Text>
              </View>
              <View style={[styles.rectangleParent2, styles.parentSpaceBlock]}>
                <View style={[styles.frameChild27, styles.frameChildLayout1]} />
                <Text style={styles.am}>9am</Text>
              </View>
              <View style={[styles.rectangleParent2, styles.parentSpaceBlock]}>
                <View style={[styles.frameChild28, styles.frameChildLayout1]} />
                <Text style={styles.am}>11am</Text>
              </View>
              <View style={[styles.rectangleParent2, styles.parentSpaceBlock]}>
                <View style={[styles.frameChild29, styles.frameChildLayout1]} />
                <Text style={styles.am}>12pm</Text>
              </View>
              <View style={[styles.rectangleParent2, styles.parentSpaceBlock]}>
                <View style={[styles.frameChild28, styles.frameChildLayout1]} />
                <Text style={styles.am}>5am</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <View style={styles.container}>
              <Text style={styles.text3}>50.4%</Text>
              <Text style={[styles.successRate, styles.successRateSpaceBlock]}>
                Success Rate
              </Text>
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text style={styles.text3}>3.2B</Text>
              <Text style={[styles.successRate, styles.successRateSpaceBlock]}>
                Selling Profit
              </Text>
            </View>
          </View>
          <View style={[styles.arrowRightParent, styles.frameParentSpaceBlock]}>
            <Image
              style={styles.arrowRightIcon}
              resizeMode="cover"
              source={require("../assets/arrowright.png")}
            />
            <Text style={styles.moreActivities}>more activities</Text>
          </View>
        </View>
        <View style={[styles.frameParent5, styles.frameParentShadowBox]}>
          <View style={styles.container}>
            <View style={styles.parent1}>
              <Text style={[styles.text4, styles.text4Clr]}>4.5</Text>
              <Image
                style={styles.frameChild31}
                resizeMode="cover"
                source={require("../assets/star-11.png")}
              />
            </View>
            <View style={styles.reviewsWrapper}>
              <Text style={styles.reviews1}>653 reviews</Text>
            </View>
          </View>
          <View style={styles.frameParent7}>
            <View style={styles.groupParent}>
              <View>
                <Text style={styles.textTypo}>5</Text>
                <Text style={[styles.text6, styles.textTypo]}>4</Text>
                <Text style={[styles.text6, styles.textTypo]}>3</Text>
                <Text style={[styles.text6, styles.textTypo]}>2</Text>
                <Text style={[styles.text6, styles.textTypo]}>1</Text>
              </View>
              <View style={styles.instanceGroup}>
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/star-21.png")}
                />
                <Image
                  style={[styles.frameChild33, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/star-31.png")}
                />
                <Image
                  style={[styles.frameChild33, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/star-41.png")}
                />
                <Image
                  style={[styles.frameChild33, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/star-51.png")}
                />
                <Image
                  style={[styles.frameChild33, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/star-21.png")}
                />
              </View>
            </View>
            <View style={styles.rectangleParent7}>
              <LinearGradient
                style={styles.rectangleLineargradient}
                locations={[0, 1]}
                colors={["#6d21b1", "#5d5dff"]}
                useAngle={true}
                angle={269.85}
              />
              <LinearGradient
                style={[styles.frameChild37, styles.frameChildLayout]}
                locations={[0, 1]}
                colors={["#6d21b1", "#5d5dff"]}
                useAngle={true}
                angle={269.85}
              />
              <LinearGradient
                style={[styles.frameChild38, styles.frameChildLayout]}
                locations={[0, 1]}
                colors={["#6d21b1", "#5d5dff"]}
                useAngle={true}
                angle={269.85}
              />
              <LinearGradient
                style={[styles.frameChild39, styles.frameChildLayout]}
                locations={[0, 1]}
                colors={["#6d21b1", "#5d5dff"]}
                useAngle={true}
                angle={269.85}
              />
              <LinearGradient
                style={[styles.frameChild40, styles.frameChildLayout]}
                locations={[0, 1]}
                colors={["#6d21b1", "#5d5dff"]}
                useAngle={true}
                angle={269.85}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent9, styles.frameParentShadowBox]}>
          <View style={styles.ellipseContainer}>
            <Image
              style={styles.frameChild41}
              resizeMode="cover"
              source={require("../assets/ellipse-13.png")}
            />
            <Image
              style={[styles.frameChild42, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-398771.png")}
            />
          </View>
          <Text style={[styles.ametMinimMollit, styles.ametMinimMollitTypo]}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
          <Image
            style={styles.frameChild43}
            resizeMode="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <View style={styles.janStiedemannParent}>
            <Text style={[styles.janStiedemann, styles.farmerTypo]}>
              Jan Stiedemann
            </Text>
            <Text
              style={[
                styles.globalApplicationsRepresenta,
                styles.ametMinimMollitTypo,
              ]}
            >
              Global Applications Representative
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.frame21Child} />
      <Text style={[styles.whoAreYou, styles.whoAreYouTypo]}>who are you?</Text>
      <Text style={[styles.selectAnyOne, styles.whoAreYouTypo]}>
        *select any one below
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  farmerClr: {
    color: Color.colorDimgray_100,
    textAlign: "left",
  },
  lookingTypo: {
    width: 140,
    fontSize: FontSize.size_2xs_9,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 16,
  },
  parentShadowBox: {
    top: 445,
    paddingBottom: 15,
    paddingHorizontal: 11,
    justifyContent: "center",
    alignItems: "center",
    height: 181,
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
    position: "absolute",
  },
  frameLayout1: {
    height: 960,
    width: 1920,
    top: -58,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorGhostwhite_200,
  },
  text4Typo: {
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
  },
  frameLayout: {
    width: 16,
    height: 16,
  },
  textTypo1: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  frameShadowBox1: {
    borderRadius: Border.br_base,
    elevation: 40,
    shadowRadius: 40,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.2953338623046875,
    },
    position: "absolute",
  },
  january2023Typo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorDimgray_100,
  },
  frameChildLayout6: {
    width: 24,
    borderRadius: Border.br_101xl,
  },
  frameShadowBox: {
    padding: Padding.p_base,
    elevation: 24,
    shadowRadius: 24,
    borderRadius: Border.br_base,
    justifyContent: "center",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.2953338623046875,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
  },
  frameChildLayout5: {
    borderRadius: Border.br_81xl,
    width: 8,
  },
  frameChildLayout4: {
    marginLeft: 6,
    borderRadius: Border.br_81xl,
    width: 8,
  },
  frameChildLayout3: {
    height: 34,
    marginLeft: 6,
    borderRadius: Border.br_81xl,
    width: 8,
  },
  frameChildLayout2: {
    height: 32,
    marginLeft: 6,
    borderRadius: Border.br_81xl,
    width: 8,
  },
  mTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interBold,
    lineHeight: 32,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "700",
  },
  ellipseIconLayout: {
    height: 80,
    width: 80,
  },
  frameParentShadowBox: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.2953338623046875,
    },
    position: "absolute",
  },
  groupIconLayout: {
    width: 51,
    height: 51,
  },
  text4Clr: {
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  frameParentSpaceBlock: {
    marginTop: 36,
    flexDirection: "row",
  },
  rectangleParentFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  frameChildLayout1: {
    width: 18,
    borderRadius: Border.br_71xl,
  },
  parentSpaceBlock: {
    marginLeft: 36,
    alignItems: "center",
  },
  successRateSpaceBlock: {
    marginTop: 6,
    lineHeight: 12,
    textAlign: "left",
  },
  textTypo: {
    color: Color.darkGray,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 18,
  },
  frameChildLayout: {
    marginTop: 17.3,
    backgroundColor: "transparent",
    borderRadius: Border.br_5xs_5,
    height: 6,
  },
  ametMinimMollitTypo: {
    fontSize: FontSize.size_2xs_5,
    color: Color.gray,
    fontFamily: FontFamily.manropeRegular,
  },
  farmerTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  whoAreYouTypo: {
    fontFamily: FontFamily.ralewayRegular,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  farmerIcon: {
    height: 50,
    width: 50,
  },
  farmer: {
    marginTop: 14,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 18,
    fontSize: FontSize.size_mini_6,
    color: Color.colorDimgray_100,
  },
  lookingOutFor: {
    marginTop: 14,
  },
  farmerParent: {
    paddingVertical: 15,
    paddingHorizontal: 11,
    height: 181,
    borderRadius: Border.br_5xs_3,
    elevation: 7.3,
    shadowRadius: 7.3,
    top: 226,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.2953338623046875,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    left: 207,
    position: "absolute",
  },
  landlordParent: {
    paddingTop: Padding.p_lgi,
    paddingBottom: 15,
    left: 23,
    paddingHorizontal: 11,
    justifyContent: "center",
    alignItems: "center",
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
    top: 226,
    position: "absolute",
  },
  getCashIcon: {
    height: 43,
    width: 50,
  },
  consumer: {
    marginTop: 10,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 18,
    fontSize: FontSize.size_mini_6,
    color: Color.colorDimgray_100,
  },
  lookingOutFor2: {
    marginTop: 10,
  },
  getCashParent: {
    paddingTop: 14,
    left: 23,
  },
  businessman: {
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 18,
    fontSize: FontSize.size_mini_6,
    color: Color.colorDimgray_100,
  },
  lookingOutFor3: {
    marginTop: 8,
  },
  budgetParent: {
    paddingTop: Padding.p_7xs,
    left: 207,
    top: 445,
  },
  frameChild: {
    width: 90,
    zIndex: 0,
    height: 90,
  },
  russellShields: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorDimgray_100,
  },
  frameItem: {
    height: 16,
  },
  frameInner: {
    marginLeft: 2.2,
    height: 16,
  },
  text: {
    fontSize: 11,
    lineHeight: 11,
    marginLeft: 2.2,
  },
  reviews: {
    fontSize: 9,
    lineHeight: 14,
    marginLeft: 2.2,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeRegular,
  },
  instanceParent: {
    width: 172,
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  russellShieldsParent: {
    marginTop: 24,
    zIndex: 1,
    alignItems: "center",
  },
  active: {
    fontSize: 8,
    lineHeight: 4,
    height: 6,
    width: 26,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  activeWrapper: {
    top: 20,
    right: 20,
    borderRadius: 200,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    zIndex: 2,
    backgroundColor: Color.purple,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  ellipseParent: {
    top: 557,
    left: 427,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: Border.br_5xs,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.2953338623046875,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    position: "absolute",
  },
  statsChar: {
    lineHeight: 40,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "left",
  },
  statsCharWrapper: {
    paddingHorizontal: Padding.p_29xl,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.purple,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  january2023: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameGroup: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderStyle: "solid",
    borderColor: Color.purple,
    borderWidth: 2,
    justifyContent: "space-between",
    paddingRight: Padding.p_base,
    elevation: 24,
    shadowRadius: 24,
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7.2953338623046875,
    },
    overflow: "hidden",
  },
  text1: {
    fontSize: 22,
    lineHeight: 62,
    zIndex: 0,
  },
  rectangleView: {
    height: 120,
    backgroundColor: Color.darkGray,
  },
  frameChild3: {
    height: 68,
    backgroundColor: Color.blue,
    marginLeft: 48,
  },
  frameChild4: {
    height: 180,
    marginLeft: 48,
    backgroundColor: Color.purple,
  },
  frameChild5: {
    height: 160,
    backgroundColor: Color.dark,
    marginLeft: 48,
  },
  frameChild6: {
    height: 76,
    backgroundColor: Color.blue,
    marginLeft: 48,
  },
  rectangleParent: {
    marginLeft: 48,
    alignItems: "flex-end",
    flexDirection: "row",
    zIndex: 1,
    justifyContent: "center",
  },
  text2: {
    lineHeight: 12,
    fontSize: FontSize.smallBodyTextLight12_size,
    color: Color.white,
    zIndex: 0,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  polygonIcon: {
    top: 28,
    height: 8,
    width: 8,
    marginLeft: 3,
    left: "50%",
    zIndex: 1,
    position: "absolute",
  },
  group: {
    marginTop: -88.5,
    marginLeft: 9,
    top: "50%",
    borderRadius: 300,
    width: 66,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    left: "50%",
    zIndex: 2,
    backgroundColor: Color.purple,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  parent: {
    marginTop: 48,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  frameParent: {
    top: 178,
    left: 754,
    padding: 64,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: Border.br_base,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  frameChild7: {
    height: 24,
    backgroundColor: Color.purple,
  },
  frameChild8: {
    height: 22,
    backgroundColor: Color.gray,
    marginLeft: 6,
  },
  frameChild9: {
    backgroundColor: Color.purple,
  },
  frameChild10: {
    backgroundColor: Color.darkGray,
    height: 16,
  },
  frameChild11: {
    height: 24,
    backgroundColor: Color.blue,
  },
  frameChild12: {
    backgroundColor: Color.dark,
  },
  frameChild13: {
    height: 24,
    backgroundColor: Color.purple,
  },
  rectangleGroup: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  profileViews: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.smallBodyTextLight12_size,
    marginTop: 8,
    textAlign: "left",
  },
  m: {
    marginTop: 8,
  },
  frameContainer: {
    top: 634,
    left: 643,
    position: "absolute",
  },
  frameChild14: {
    backgroundColor: Color.light,
    height: 22,
  },
  frameChild15: {
    backgroundColor: Color.gray,
    marginLeft: 6,
    height: 24,
  },
  frameChild17: {
    backgroundColor: Color.purple,
    height: 16,
  },
  frameChild18: {
    backgroundColor: Color.blue,
  },
  frameChild19: {
    backgroundColor: Color.purple,
  },
  frameChild20: {
    height: 24,
    backgroundColor: Color.dark,
  },
  frameChild21: {
    marginLeft: -16,
  },
  ellipseGroup: {
    flexDirection: "row",
    marginTop: 8,
  },
  frameWrapper: {
    marginTop: 16,
  },
  frameView: {
    top: 477,
    left: 1224,
    backgroundColor: "#fefefe",
    width: 268,
    padding: Padding.p_xl,
    borderRadius: Border.br_base,
    shadowColor: "rgba(0, 0, 0, 0.16)",
  },
  frame25: {
    left: 2336,
  },
  groupIcon: {
    height: 51,
  },
  recentActivities: {
    fontSize: 27,
    lineHeight: 23,
    marginLeft: 18,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  groupParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild25: {
    backgroundColor: Color.darkGray,
    height: 90,
  },
  am: {
    lineHeight: 17,
    marginTop: 3,
    color: Color.gray,
    fontSize: FontSize.smallBodyTextLight12_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  rectangleParent1: {
    alignItems: "center",
  },
  frameChild26: {
    height: 51,
    backgroundColor: Color.blue,
  },
  rectangleParent2: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  frameChild27: {
    height: 135,
    backgroundColor: Color.purple,
  },
  frameChild28: {
    backgroundColor: Color.dark,
    height: 120,
  },
  frameChild29: {
    height: 57,
    backgroundColor: Color.blue,
  },
  frameParent3: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  frameWrapper1: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  text3: {
    lineHeight: 36,
    color: Color.purple,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  successRate: {
    fontSize: FontSize.smallBodyTextLight12_size,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorDimgray_100,
  },
  container: {
    alignItems: "center",
  },
  arrowRightIcon: {
    width: 23,
    height: 24,
    overflow: "hidden",
  },
  moreActivities: {
    lineHeight: 24,
    marginLeft: 12,
    fontSize: FontSize.size_lg,
    color: Color.purple,
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
  },
  arrowRightParent: {
    padding: Padding.p_5xs_5,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent2: {
    top: 253,
    left: 843,
    padding: Padding.p_29xl,
    elevation: 30,
    shadowRadius: 30,
    borderRadius: Border.br_5xl,
  },
  text4: {
    fontSize: 96,
    lineHeight: 96,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
  },
  frameChild31: {
    width: 42,
    height: 42,
    marginLeft: 5.3,
  },
  parent1: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviews1: {
    lineHeight: 15,
    fontSize: FontSize.smallBodyTextLight12_size,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  reviewsWrapper: {
    borderRadius: 53,
    paddingHorizontal: 18,
    paddingVertical: Padding.p_5xs_5,
    backgroundColor: Color.dark,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text6: {
    marginTop: 4.5,
  },
  frameChild33: {
    marginTop: 7.5,
    height: 16,
  },
  instanceGroup: {
    marginLeft: 3,
  },
  rectangleLineargradient: {
    width: 195,
    backgroundColor: "transparent",
    borderRadius: Border.br_5xs_5,
    height: 6,
  },
  frameChild37: {
    width: 126,
  },
  frameChild38: {
    width: 103,
  },
  frameChild39: {
    width: 61,
  },
  frameChild40: {
    width: 26,
    marginTop: 17.3,
  },
  rectangleParent7: {
    marginLeft: 9.8,
  },
  frameParent7: {
    marginLeft: 26.3,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent5: {
    top: 412,
    left: 206,
    paddingHorizontal: 60,
    paddingVertical: Padding.p_11xl,
    borderRadius: Border.br_5xl,
    elevation: 40,
    shadowRadius: 40,
    flexDirection: "row",
  },
  frameChild41: {
    width: 129,
    height: 129,
    zIndex: 0,
  },
  frameChild42: {
    top: 85,
    left: 78,
    height: 51,
    zIndex: 1,
    position: "absolute",
  },
  ellipseContainer: {
    alignItems: "center",
  },
  ametMinimMollit: {
    marginTop: 21,
    alignSelf: "stretch",
    fontSize: FontSize.size_2xs_5,
    textAlign: "center",
    lineHeight: 16,
  },
  frameChild43: {
    width: 9,
    height: 9,
    marginTop: 21,
  },
  janStiedemann: {
    fontSize: FontSize.paragraph1_size,
    color: Color.dark,
    textAlign: "left",
    lineHeight: 18,
    fontWeight: "700",
  },
  globalApplicationsRepresenta: {
    marginTop: 6,
    lineHeight: 12,
    textAlign: "left",
  },
  janStiedemannParent: {
    marginTop: 21,
    alignItems: "center",
  },
  frameParent9: {
    top: 325,
    left: 1341,
    width: 304,
    padding: Padding.p_11xl,
    elevation: 30,
    shadowRadius: 30,
    borderRadius: Border.br_5xl,
  },
  frame26: {
    left: 4466,
  },
  frame21Child: {
    top: 56,
    width: 346,
    height: 740,
    left: 23,
    position: "absolute",
  },
  whoAreYou: {
    top: 84,
    left: 91,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.labelColorLightPrimary,
  },
  selectAnyOne: {
    top: 125,
    left: 115,
    color: "#4dcd38",
    width: 205,
    height: 15,
    fontSize: FontSize.size_base,
  },
  frame21: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorGhostwhite_200,
  },
});

export default Frame;
