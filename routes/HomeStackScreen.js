import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail";

import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      //   screenOptions={({ navigation, route }) => ({
      //     headerTitle: () => <Header navigation={navigation} />,
      // headerStyle: {
      //   backgroundColor: "#10769e",
      // },
      // headerTintColor: "#fff",
      // headerTitleStyle: {
      //   fontWeight: "bold",
      // },
      //   })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header navigation={navigation} title="Reviews" />,
        })}
      />

      <Stack.Screen
        name="ReviewDetail"
        component={ReviewDetail}
        options={{ title: "Review Detail" }}
      />
    </Stack.Navigator>
  );
}
