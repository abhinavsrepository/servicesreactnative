import { View, Text,StyleSheet,Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";

import { FontAwesome } from '@expo/vector-icons';
export default function Header() {
  const { user, isloading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* profile section */}
        <View style={styles.profileMainContainer} >
        <View style={styles.profileContainer}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={{color:Colors.WHITE,fontSize:15,fontFamily:'outfit-medium'}}>Welcome,</Text>
            <Text style={{color:Colors.WHITE,fontSize:20,fontFamily:'outfit'}}>{user?.fullName}</Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white"/>
        </View> 
        {/* search bar section */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder='Search' style={styles.textInput}/>
          <FontAwesome name="search" style={styles.searchbtn}
           size={24} color={Colors.PRIMARY} />

          
        </View>
      </View>
    )
   );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor:Colors.PRIMARY,
    borderBotttomLeftRadius:-25,
    borderBottomRightRadius:30,
  },
  profileMainContainer:{
    display:'flex',
    alignItem:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  profileContainer:{
    display:'flex',
    
    alignItem:'center',
    flexDirection:'row',
    gap:13

  },
  textInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:Colors.WHITE,
    borderRadius:8,
    width:'85%',fontSize:16,fontFamily:'outfit'


  },
  searchBarContainer:{
    marginTop :15,
    display:'flex',
    flexDirection:'row',
    gap:10,
    marginBottom:10


  },
  searchbtn:{
    backgroundColor:Colors.WHITE,
    padding:10,
    borderRadius:8

  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
