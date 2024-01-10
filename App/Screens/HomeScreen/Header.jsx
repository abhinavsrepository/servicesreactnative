import { View, Text,StyleSheet,Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";

export default function Header() {
  const { user, isloading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={{color:Colors.WHITE,fontSize:15}}>Welcome,</Text>
            <Text style={{color:Colors.WHITE,fontSize:20}}>{user?.fullName}</Text>
          </View>
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
    borderBotttomLeftRadius:25,
    borderBottomRightRadius:25,
  },
  profileContainer:{
    display:'flex',
    alignItem:'center',
    flexDirection:'row',
    gap:13

  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
