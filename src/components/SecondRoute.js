import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import Card from "./Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#fc9372" }]}>
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      }}
    >
      <Card />
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity style={styles.btn}>
        <MaterialCommunityIcons name="plus" size={24} color="white" />
        <Text style={{ color: "white", margin: 5 }}>New Trip</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default SecondRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flexDirection: "row",
    borderWidth: 2,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 40,
    borderRadius: 10,
    alignSelf: "center",
  },
});
