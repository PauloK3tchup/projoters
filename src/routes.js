import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Perfil from "./pages/Perfil";
import Pedidos from "./pages/Pedidos";
import Carteira from "./pages/Carteira";

const BottomTab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        ScreenOptions={{
          style: {
            backgroundColor: "#252525",
            borderTopColor: "#252525",
          },
          activeTintColor: "#fff",
          inactiveTintColor: "#999",
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Busca"
          component={Busca}
          options={{
            tabBarLabel: "Busca",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Pedidos"
          component={Pedidos}
          options={{
            tabBarLabel: "Pedidos",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="assignment" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={24} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
