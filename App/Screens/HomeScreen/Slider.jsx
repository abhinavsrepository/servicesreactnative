import { View, Text } from 'react-native'
import React from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {

    useEffect(()=>{
        getSlider();

    },[])
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp)
        })

    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}