import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native'

const ItemCard = ({ name, picture, price, id, release_date }) => {

  const navigation = useNavigation();

  const ClickImg = () => {
    navigation.navigate('CartItem', { id, picture, name, price, release_date })
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => ClickImg()}>
        <Image source={{ uri: picture }} style={styles.img} />
      </TouchableOpacity>
      {/* <Text color="gold">New</Text> */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>$ {price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5, // set to 0.5 to show 2 items in the same line
    padding: 10,
    margin:10,
    alignItems: 'center',
    flexDirection: 'column' // added to show 2 items in the same line
  },
  img: {
    width: 250,
    height: 150,
    resizeMode:'center',
    margin: 'auto',
    borderRadius:10,
  },
  name: {
    fontSize: 16,
    maxWidth: 250,
    textAlign: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 12,
    maxWidth: 150,
    textAlign: 'center',
    color: '#524b48',
    fontWeight:'bold',
  
  }
})

export default ItemCard
