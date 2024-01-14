import { View, Text ,StyleSheet, FlatList,Image} from 'react-native'
import React, { useEffect ,useState,useRoute} from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function Categories() {
    const[categories,setCategories]=useState([]);
    const navigation =useNavigation()
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
    <View style={{marginTop:10}}>
      <Heading text={'Categories'} isViewAll={true}/>
      <FlatList
      data={categories}
      numColumns={4}
      renderItem={({item,index})=>index<=3&&(
        <TouchableOpacity style={styles.Container}
        onPress={()=>navigation.push('business-list',{
            category:item.name
        })}>
            <View style ={styles.iconContainer}>
                <Image source={{uri:item?.icon?.url}}
                style={{width:30,height:30}}
                />
            </View>
            <Text style={{fontFamily:'outfit-medium',marginTop:5}}>{item?.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}
const styles =StyleSheet.create({
    iconContainer:{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:29,
        borderRadius:99,
        

    },
    Container:{
        flex:1,
        alignItems:'center',
        

    }
})