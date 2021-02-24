import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function AboutStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: () => <Header navigation={navigation} title="About" />,

        // headerStyle: {
        //   backgroundColor: "#10769e",
        // },
        // headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      })}
    >
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
