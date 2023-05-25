import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreContextProvider, { StoreContext } from "./src/Context/StoreContext";
import PurchaseHistoryDetails from "./src/Screens/Client/PurchaseHistoryDetails";
import Login from "./src/Screens/FirstPage/Login";
import CartItem from "./src/Components/Client/CartItem";
import Store from "./src/Screens/Client/Store";
import Profil from "./src/Screens/Client/Profil";
import Received from "./src/Screens/Admin/Received";
import Closed from "./src/Screens/Admin/Closed";
import Packed from "./src/Screens/Admin/Packed";
import Card from "./src/Screens/Client/Card";
import { useContext } from "react";
import ItemProfilCard from "./src/Components/Client/ItemProfilCard";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#212A3E" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ClientInterface" component={ClientInterface} />
          <Stack.Screen name="AdminInterface" component={AdminInterface} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContextProvider>
  );
}

// CLIENT
export const ClientInterface = () => {
  const { nbrsProductsBag } = useContext(StoreContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Store") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          } else if (route.name === "Card") {
            iconName = focused ? "ios-card" : "ios-card-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "ios-person-circle"
              : "ios-person-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "white",
        tabStyle: {
          backgroundColor: "#212A3E",
        },
      }}
    >
      <Tab.Screen
        name="Store"
        component={ClientBye}
        options={{
          headerStyle: {
            height: 50, // Set custom header height
            backgroundColor: "#212A3E", // Set custom background color for the header
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitle: "Store",
        }}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            height: 50, // Set custom header height
            backgroundColor: "#212A3E", // Set custom background color for the header
          },
          tabBarBadge: nbrsProductsBag,
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitle: "Card",
        }}
        name="Card"
        component={Card}
      />
      <Tab.Screen
        name="Profile"
        component={Profil}
        options={{
          headerStyle: {
            height: 50, // Set custom header height
            backgroundColor: "#212A3E", // Set custom background color for the header
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitle: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};
// ADMIN
export const AdminInterface = () => {
  const { received, allClosed, packed } = useContext(StoreContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Received") {
            iconName = focused ? "ios-send" : "ios-send-outline";
          } else if (route.name === "Closed") {
            iconName = focused ? "ios-archive" : "ios-archive-outline";
          } else if (route.name === "Packed") {
            iconName = focused ? "ios-cube" : "ios-cube-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "white",
        tabStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Received"
        options={{ tabBarBadge: received.length }}
        component={Received}
      />
      <Tab.Screen
        name="Closed"
        options={{ tabBarBadge: allClosed.length }}
        component={Closed}
      />
      <Tab.Screen
        name="Packed"
        options={{ tabBarBadge: packed.length }}
        component={Packed}
      />
    </Tab.Navigator>
  );
};

// CLIENT SCREEN ALL PRODUCT (STORE) && SCREEN CLICK ON PRODUCT ZOOM (CartItem)
export const ClientBye = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StoreStack"
        component={Store}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartItem"
        component={CartItem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="purchaseHistoryDetails"
        component={PurchaseHistoryDetails}
      />
      <Stack.Screen
        name="ItemProfilCard"
        component={ItemProfilCard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
