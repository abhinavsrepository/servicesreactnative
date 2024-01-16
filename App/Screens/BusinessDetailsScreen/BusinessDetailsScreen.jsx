import { View, Text ,Image ,StyleSheet} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation,useRoute } from '@react-navigation/native'
import { useEffect,useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function BusinessDetailsScreen() {
  const param =useRoute().params
  const[business,setBusiness]=useState(param.business);
  useEffect(()=>{

  },[])
  return business&&(
    <View>
      <TouchableOpacity style={styles.backBtnContainer}>
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <Image source={{uri:business?.images[0]?.url}}
      style ={{width:'100%',height:300}}/>
      
    </View>
  )
}
const styles =StyleSheet.create({
  backBtnContainer:{
    position:'absolute',
    padding:20,
    zIndex:10
  }
})