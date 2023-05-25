import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import ItemCard from "../../Components/Client/ItemCard";
import { Text, Button } from "@react-native-material/core";
import Ionicons from "react-native-vector-icons/Ionicons";

const Card = () => {
  const {
    basket,
    totalPrice,
    setPurchaseHistory,
    setBasket,
    setNbrsProductbag,
    setTotalPrice,
    setNbrsPurchaseHistory,
    nbrsProductsBag,
    dateTime,
    RandomOrderNumber,
  } = useContext(StoreContext);

  const paiement = () => {
    setPurchaseHistory((prev) => [
      ...prev,
      { ...basket, option: basket.length, ordNo: RandomOrderNumber(100000) },
    ]);
    setBasket([]);
    setNbrsProductbag(0); // tab icon = 0
    setTotalPrice(0); // total price text into Card components = 0
    dateTime();
    alert("Payment successful");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {totalPrice == 0 ? null : (
        <Text style={styles.center}>Total: {totalPrice}</Text>
      )}

      {basket.length != 0 ? (
        <View style={styles.pd}>
          <FlatList
            data={basket}
            renderItem={({ item }) => <ItemCard {...item} />}
            keyExtractor={(item) => item.id}
          />

          <Pressable style={styles.button} onPress={paiement}>
            <Text style={styles.text}>PAYMENT</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.msgEmpty}>Empty Bag</Text>
          <Ionicons name="cart" size={30} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F1F6F9",
  },
  center: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "black",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  pd: {
    backgroundColor: "#C4DFDF",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  msgEmpty: {
    fontSize: 28,
    paddingBottom: 10,
  },
});

export default Card;
