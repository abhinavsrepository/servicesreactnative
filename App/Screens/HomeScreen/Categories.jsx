import { View, Text ,StyleSheet} from 'react-native'
import React, { useEffect ,useState} from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Categories() {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        getCategories();

    },[])
    // get category list
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            
            setCategories(resp.categories);
        })
    }
  return (
    <View>
      <Text>Categories</Text>
    </View>
  )
}
const styles =StyleSheet.create({
    heading:{
        fontSize:20,
        fontFamily:"outfit-medium",
        marginBottom:10,
    },
})