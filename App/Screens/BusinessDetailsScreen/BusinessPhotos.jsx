import { View, Text } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'
import { FlatList } from 'react-native-gesture-handler'

export default function BusinessPhotos({business}) {
  return (
    <View>
     <Heading text={'Photos'}/>
     <FlatList
     data={business.images}
     renderItem0={({item})=>(
       < Image source={{uri:item.url}}
       style={{width:'100%',height:120}}/>
     )}/>
    </View>
  )
}