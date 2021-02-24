import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  function addReview(review) {
    review.key = new Date().getTime().toString();
    setReviews((currentReviews) => [review, ...currentReviews]);
    setOpenModal(false);
  }

  function renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ReviewDetail", {
            item,
          })
        }
      >
        <Card>
          <Text>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }

  return (
    <View style={globalStyles.container}>
      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={24}
        onPress={() => setOpenModal(true)}
      />
      <FlatList data={reviews} renderItem={({ item }) => renderItem(item)} />

      <Modal visible={openModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={24}
              onPress={() => setOpenModal(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalContent: { flex: 1 },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
