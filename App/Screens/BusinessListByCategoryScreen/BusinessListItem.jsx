import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
export default function BusinessListItem({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}/>
      <View style={styles.subContainer}>
        <Text style={{fontFamily:'outfit-bold',color:Colors.LIGHT_GRAY}}>{business.contactPerson}</Text>
        <Text style={{fontFamily:'outfit-medium',fontSize:18}}>{business.name}</Text>
        <Text style={{fontFamily:'outfit',color:Colors.LIGHTBLACK,fontSize:16}}><Ionicons name="location-sharp" size={20} color={Colors.PRIMARY}  />{business.address}</Text>
      </View>
    </View>

  )
}
const styles =StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:Colors.WHITE,
    borderRadius:15,marginBottom:15,
    display:'flex',
    flexDirection:'row',
    gap:10,

  },
  subContainer:{
    display:'flex',
    gap:8,

  },
  image:{
    height:100,
    width:100,
    borderRadius:15
  }
})