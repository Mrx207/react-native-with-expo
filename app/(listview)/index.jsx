import icedCoffeeImage from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={styles.titleContainer}>Coffee shop</Text>
        <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>
        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  titleContainer: {
    width: "100%",
    fontSize: 42,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  link: {
    width: "100%",
    fontSize: 42,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textDecorationLine: "underline",
  },
  buttonText: {
    width: "100%",
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    padding: 4,


  },
  button:{
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding:6
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    opacity: 0.8,
  },
});
