import { StatusBar } from "expo-status-bar";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import Home from "./src/Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Expense from "./src/Screens/Expense";
import Settings from "./src/Screens/Settings";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={Login}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="signup"
          component={Signup}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="hometab"
          component={HomeTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTab() {
  function isIphoneWithNotch() {
    const dimen = Dimensions.get("window");
    return (
      Platform.OS === "ios" &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (dimen.height === 780 ||
        dimen.width === 780 ||
        dimen.height === 812 ||
        dimen.width === 812 ||
        dimen.height === 844 ||
        dimen.width === 844 ||
        dimen.height === 896 ||
        dimen.width === 896 ||
        dimen.height === 926 ||
        dimen.width === 926)
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarLabel: ({ focused, color, size }) => {
            let iconName;
            color = focused ? "#0053C5" : "#000";

            return (
              <Text style={{ color: color, fontSize: 11, bottom: 12 }}>
                {route.name}
              </Text>
            );
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            height: isIphoneWithNotch() ? 95 : 70,
            //position: "absolute"
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              color = focused ? "#0053C5" : "#000";
            } else if (route.name === "expense") {
              iconName = focused ? "card" : "card-outline";
              color = focused ? "#0053C5" : "#000";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog-outline";
              color = focused ? "#0053C5" : "#000";
            }
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        };
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen name="expense" component={Expense} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
