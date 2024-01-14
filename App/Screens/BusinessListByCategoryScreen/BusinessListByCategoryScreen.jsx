import { View, Text } from 'react-native'
import React from 'react'
import { useRoute,useEffect } from '@react-navigation/native';

export default function BusinessListByCategoryScreen() {
  const param=useRoute().params;
  useEffect(()=>{
    console.log("Category",param.category)
  })
  return (
    <View>
      <Text>BusinessListByCategoryScreen</Text>
    </View>
  )
}