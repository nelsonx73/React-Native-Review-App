import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  requireNativeComponent,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  function pressHandler() {
    navigation.openDrawer();
  }

  return (
    <ImageBackground
      style={styles.header}
      source={require("../assets/images/game_bg.png")}
    >
      <MaterialIcons
        style={styles.icon}
        name="menu"
        size={28}
        onPress={pressHandler}
      />

      <View style={styles.header_title}>
        <Image
          style={styles.header_image}
          source={require("../assets/images/heart_logo.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  header_title: {
    flexDirection: "row",
  },
  header_image: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
