import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

const BottomTab = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: "#d6d6d6",
        height: 100,
        marginBottom: -15,
      }}
      labeled={false}
      tabBarOptions={{
        showLabel: false,
        style: {},
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "#d6d6d6",
                padding: 10,
                borderRadius: 20,
                width: 60,
                height: 60,
              }}
            >
              <MaterialCommunityIcons
                name={"contacts-outline"}
                size={40}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "#d6d6d6",
                padding: 10,
                borderRadius: 20,
                width: 60,
                height: 60,
              }}
            >
              <MaterialCommunityIcons
                name={"text-box-multiple-outline"}
                size={40}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "#d6d6d6",
                padding: 10,
                borderRadius: 20,
                width: 60,
                height: 60,
              }}
            >
              <MaterialCommunityIcons
                name={"search-web"}
                size={40}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused ? "white" : "#d6d6d6",
                padding: 10,
                borderRadius: 20,
                width: 60,
                height: 60,
              }}
            >
              <MaterialCommunityIcons
                name={"web-box"}
                size={40}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
