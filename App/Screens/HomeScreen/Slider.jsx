import { View, Text, FlatList ,StyleSheet} from 'react-native'
import React from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
    const[slider,setSlider]=useState([])

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
      <Text style={styles.heading}>Offers for you</Text>
      <FlatList
      data={slider}
      />
    </View>
  )
}
const styles =StyleSheet.create({
    heading:{
        fontSize:20,
        fontFamily:"outfit-medium",
        marginBottom:10,
    }
})