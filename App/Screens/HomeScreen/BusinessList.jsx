import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import BusinesListItemSmall from './BusinesListItemSmall'

export default function BusinessList() {
    const [businessList,setBusinessList]=useState([]);
    useEffect(()=>{
        getBusinessList();

    },[])
    // get business list from API
    const getBusinessList =()=>{
        GlobalApi.getBusinessList().then(resp=>{
            console.log(resp);
            setBusinessList(resp.businessLists)
        })
    }
  return (
    <View style ={{marginTop:10}}>
      <Heading text={'Complete design solution'} isViewAll={true}/>
      <FlatList
      data={businessList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        
        <View style={{marginRight:10}}>
            <BusinesListItemSmall business={item}/>
            </View>
      )}
      />
    </View>
  )
}