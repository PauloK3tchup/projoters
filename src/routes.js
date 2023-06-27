import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Perfil from "./pages/Perfil";
import Pedidos from "./pages/Pedidos";
import Carteira from "./pages/Carteira";
import Pagamentos from "./pages/Pagamentos";
import PedidosAnteriores from "./pages/PedidosAnteriores";

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
          component={PedidosRouter}
          options={{
            tabBarLabel: "Pedidos",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="assignment" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="PerfilRoutes"
          component={PerfilRoutes}
          options={{
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
const PerfilStack = createStackNavigator();

function PerfilRoutes() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen name="Pagamentos" component={Pagamentos} />
    </PerfilStack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

function PedidosRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen
        name="PedidosAnteriores"
        component={PedidosAnteriores}
        options={{ tabBarLabel: "Pedidos Anteriores" }}
      />
    </Tab.Navigator>
  );
}
