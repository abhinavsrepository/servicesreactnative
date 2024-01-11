import { View, Text } from 'react-native'
import React from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
    const[slider,setSlider]=useState()

    useEffect(()=>{
        getSlider();

    },[])
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp.sliders)
            setSlider(response?.slider)
        })

    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}