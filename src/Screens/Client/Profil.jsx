import { View, StyleSheet, FlatList ,ScrollView} from 'react-native'
import { Avatar, Stack, Text } from "@react-native-material/core";
import ItemProfilCard from '../../Components/Client/ItemProfilCard';

const Profil = () => {

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginTop: 20}}>
        <Stack center spacing={6}>
          <Avatar label="Sacha Foucard" color='grey' />
        </Stack>
        <Text style={styles.name}>Welcome</Text>
        <Text style={styles.name}>Purchase History</Text>
      </View>
      <View>
       <ItemProfilCard/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F1F6F9',
  },
  name: {
    textAlign: 'center',
    marginTop: 20
  }
})
export default Profil