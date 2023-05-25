import { FlatList } from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import Item from "../../Components/Client/Item";

const Store = () => {
  const { data } = useContext(StoreContext);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: "#F1F6F9" }}
    />
  );
};

export default Store;
