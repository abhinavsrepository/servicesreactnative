import { View, Text ,Image ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation,useRoute } from '@react-navigation/native'
import { useEffect,useState } from 'react'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../Utils/Colors'
import BusinessPhotos from './BusinessPhotos'
import BusinessAboutMe from './BusinessAboutMe'

export default function BusinessDetailsScreen() {
  const param =useRoute().params
  
  const[business,setBusiness]=useState(param.business);
  const navigation =useNavigation();
  
  useEffect(()=>{

  },[])
  return business&&(
    <ScrollView>
    <View>
      <TouchableOpacity style={styles.backBtnContainer}
      onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <Image source={{uri:business?.images[0]?.url}}
      style ={{width:'100%',height:300}}/>
      <View style={styles.infoContainer}>
        <Text style={{fontFamily:'outfit-bold',
      fontSize:25}}>{business?.name}</Text>
        <View style ={styles.subContainer}><Text style={{fontFamily:'outfit-bold',color:Colors.PRIMARY,fontSize:20}}>{business?.contactPerson}🌟</Text>
        <Text style={{color:Colors.BLACK,backgroundColor:Colors.LIGHT_BLUE,padding:5,borderRadius:5}}>{business?.category.name}</Text>
        </View>
        <Text style={{fontSize:17,fontFamily:'outfit',color:Colors.LIGHT_GRAY}}>
        <Ionicons name="location-sharp" size={20} color={Colors.RED} />{business?.address}</Text>
        {/* Horizontal line */}
        <View style={{borderWidth:0.7,borderColor:Colors.LIGHT_GRAY,marginTop:20,marginBottom:20}}></View>
        {/* about me */}
      </View>
     <BusinessAboutMe business={business}/>
      <View style={{borderWidth:0.7,borderColor:Colors.LIGHT_GRAY,marginTop:20,marginBottom:20}}></View>
      <BusinessPhotos business={business}/>
    </View>
    </ScrollView>
    
    
  )

}
const styles =StyleSheet.create({
  backBtnContainer:{
    position:'absolute',
    padding:20,
    zIndex: 30,
  },infoContainer:{
    padding:20,
    display:'flex',
    gap:7
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',gap:5,
    alignItems:'center'

  }
})