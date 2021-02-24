import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackScreen from "./HomeStackScreen";
import AboutStackScreen from "./AboutStackScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
