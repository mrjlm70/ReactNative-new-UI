import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#fc9372" }]}>
    <View
      style={{
        backgroundColor: "#f7f7f5",
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      }}
    >
      <Card />
      <View style={{ flex: 1 }}></View>

      <View style={{ backgroundColor: "#d6d6d6", width: "100%", height: 70 }}>
        <View
          style={{
            width: "100%",
            height: 70,
            borderBottomRightRadius: 5000,
            borderBottomLeftRadius: 5000,
            backgroundColor: "#f7f7f5",
          }}
        >
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons name="plus" size={24} color="white" />
            <Text style={{ color: "white", margin: 5, fontSize: 18 }}>
              New Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);
export default FirstRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flexDirection: "row",
    borderWidth: 2,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 45,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
});
