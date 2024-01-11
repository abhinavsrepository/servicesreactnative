import { View, Text, FlatList ,StyleSheet,Image} from 'react-native'

import React, { useState,useEffect } from 'react';

import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
    const[slider,setSlider]=useState([])

    useEffect(()=>{
        getSliders();

    },[])
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp.sliders)
            setSlider(resp?.sliders)
        })

    }
  return (
    <View>
      <Text style={styles.heading}>Offers for you</Text>
      <FlatList
      data={slider}
      horizontal={true}
      renderItem={({item,index})=>{
        <View>
            {/* <Image source={{uri:item?.image?.url}}
            style={styles.sliderImage}/> */}
            <Text>{item.name}</Text>
            </View>
      }}
      />
    </View>
  )
}
const styles =StyleSheet.create({
    heading:{
        fontSize:20,
        fontFamily:"outfit-medium",
        marginBottom:10,
    },
    sliderImage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:'contain'
}}
)
