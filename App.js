const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Splash2 from "./screens/Splash2";
import Splash24 from "./screens/Splash24";
import Frame from "./screens/Frame";
import User1 from "./components/User1";
import AEDC81Text from "./components/AEDC81Text";
import CC51DText from "./components/CC51DText";
import Splash21 from "./screens/Splash21";
import Splash22 from "./screens/Splash22";
import Splash1 from "./screens/Splash1";
import FarmerProfile from "./screens/FarmerProfile";
import CategoriesIconAndText from "./components/CategoriesIconAndText";
import HomeIconAndText from "./components/HomeIconAndText";
import FavouriteIconAndText from "./components/FavouriteIconAndText";
import AboutMe from "./screens/AboutMe";
import User2 from "./components/User2";
import Frame1 from "./screens/Frame1";
import WeOfferText from "./components/WeOfferText";
import PrimaryButton1 from "./components/PrimaryButton1";
import MyCards from "./components/MyCards";
import AddCard from "./screens/AddCard";
import Notifications from "./screens/Notifications";
import FarmerForm from "./screens/FarmerForm";
import Auth1Welcome from "./screens/Auth1Welcome";
import Splash23 from "./screens/Splash23";
import Auth1Login from "./screens/Auth1Login";
import Onboard from "./screens/Onboard";
import Onboard1 from "./screens/Onboard1";
import RectangleComponent from "./components/RectangleComponent";
import Auth1Signup from "./screens/Auth1Signup";
import CoffeeMenuText from "./components/CoffeeMenuText";
import KindlySelectYour from "./components/KindlySelectYour";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent2 from "./components/FrameComponent2";
import FrameComponent3 from "./components/FrameComponent3";
import VEGETABLEMENU from "./screens/VEGETABLEMENU";
import Cart1 from "./screens/Cart1";
import ServiceSuccess from "./screens/ServiceSuccess";
import TrackOrder from "./screens/TrackOrder";
import ShippingMethod from "./screens/ShippingMethod";
import ShippingInformation from "./screens/ShippingInformation";
import AddAddress from "./screens/AddAddress";
import PaymentMethod1 from "./screens/PaymentMethod1";
import TrackService from "./screens/TrackService";
import OrderSuccess from "./screens/OrderSuccess";
import Cart from "./screens/Cart";
import Cart2 from "./screens/Cart2";
import PaymentMethod from "./screens/PaymentMethod";
import Frame11 from "./components/Frame1";
import IPhone11ProX from "./screens/IPhone11ProX";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import Frame4 from "./screens/Frame4";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Splash2"
                component={Splash2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash24"
                component={Splash24}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame"
                component={Frame}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash21"
                component={Splash21}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash22"
                component={Splash22}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash1"
                component={Splash1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FarmerProfile"
                component={FarmerProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AboutMe"
                component={AboutMe}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame1"
                component={Frame1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddCard"
                component={AddCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FarmerForm"
                component={FarmerForm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Auth1Welcome"
                component={Auth1Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splash23"
                component={Splash23}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Auth1Login"
                component={Auth1Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboard"
                component={Onboard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboard1"
                component={Onboard1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Auth1Signup"
                component={Auth1Signup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VEGETABLEMENU"
                component={VEGETABLEMENU}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cart1"
                component={Cart1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ServiceSuccess"
                component={ServiceSuccess}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrackOrder"
                component={TrackOrder}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ShippingMethod"
                component={ShippingMethod}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ShippingInformation"
                component={ShippingInformation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddAddress"
                component={AddAddress}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PaymentMethod1"
                component={PaymentMethod1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrackService"
                component={TrackService}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OrderSuccess"
                component={OrderSuccess}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cart2"
                component={Cart2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PaymentMethod"
                component={PaymentMethod}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame11"
                component={Frame11}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone11ProX"
                component={IPhone11ProX}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame2"
                component={Frame2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame3"
                component={Frame3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame4"
                component={Frame4}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
