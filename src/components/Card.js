import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../../assets/index.jpg")}
          resizeMode="cover"
        />

        <View style={styles.txt}>
          <View style={{}}>
            <Text style={styles.title}>January Fun</Text>
            <Text style={styles.author}>Maria Lopez</Text>
            <Text style={styles.content}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity style={styles.button}>
              <Text>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ color: "white" }}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#ECECEC",
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
  },
  image: {
    height: 150,
    width: 120,
    margin: 15,
    borderRadius: 15,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 30,
    marginTop: 30,
  },
  txt: {
    overflow: "scroll",

    marginRight: 40,
  },
  button: {
    borderWidth: 2,
    padding: 7,
    borderRadius: 10,
    marginRight: 10,
    width: 70,
    alignItems: "center",
  },
  button1: {
    borderWidth: 2,
    padding: 7,
    borderRadius: 10,
    marginRight: 50,
    backgroundColor: "black",
    width: 70,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  author: {
    fontSize: 16,
    color: "gray",
  },
  content: {
    width: "60%",
    marginTop: 10,
    color: "gray",
  },
});
