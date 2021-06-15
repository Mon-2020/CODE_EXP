import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Korean from './categories/KoreanResults';
import Western from './categories/WesternResults';
import Chinese from './categories/ChineseResults';
import Indian from './categories/IndianResults';
import Thai from './categories/ThaiResults';
import Bugis from './locations/Bugis';
import Chinatown from './locations/Chinatown';
import Jurong from './locations/Jurong';
import Serangoon from './locations/Serangoon';
import Tampines from './locations/Tampines';

export default function App() {

  return (
    <View style={{flex: 1, justifyContent: "center", paddingHorizontal: 10,  margin: 20}}>
      <View style={{alignItems: "center", padding: 10}}>
          <Text>Cuisines</Text>
      </View>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Chinese}>
      <Text>Chinese</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Indian}>
      <Text>Indian</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Korean}>
      <Text>Korean</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Thai}>
      <Text>Thai</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Western}>
      <Text>Western</Text></TouchableOpacity>



    <View style={{alignItems: "center", padding: 10}}>
      <Text>Locations</Text>
    </View>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Bugis}>
      <Text>Bugis</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Chinatown}>
      <Text>Chinatown</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Jurong}>
      <Text>Jurong</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Tampines}>
      <Text>Tampines</Text></TouchableOpacity>

    <TouchableOpacity style={{alignItems: "center", backgroundColor: "#DDDDDD",padding: 10, margin: 5}} onPress={Serangoon}>
      <Text>Serangoon</Text></TouchableOpacity>


  </View>
  )
} 

// return (
//     <View style={styles.container}>
//       <Text style={styles.text1}>Cuisines </Text>
//       <TouchableOpacity></TouchableOpacity>
//       <Text style={styles.text2}>Locations</Text>
//     </View>
//   );


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    margin: 40,
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'left',
  }, 

  text2: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'left',
  }
});