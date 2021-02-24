import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/Card";

import { globalStyles, images } from "../styles/global";

export default function ReviewDetail({ route, navigation }) {
  const { title, body, rating } = route.params.item;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
