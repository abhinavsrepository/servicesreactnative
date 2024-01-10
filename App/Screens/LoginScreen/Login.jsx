import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
export default function Login() {
  return (
    <View style={{alignItems :'center'}}>
      <Image
        source={require("./../../../assets/images/login.jpg")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text  style ={{fontSize:20,color:Colors.WHITE,textAlign :'center'}}>
            Let's Connect For Professional <Text style={{fontWeight:'bold'}}> Creative design ,Branding , Print Design ,Packaging and web design.</Text>
        </Text>
        <Text style={{fontSize:17,color:Colors.BLACK,textAlign:'center',marginTop:20}}>
            Best App to find services near you which deliver you a professional service 
        </Text>
         
        <View style={styles.button}>
            <Text style={{textAlign:'center',fontSize:17,color:Colors.PRIMARY}}>Let's Get Started</Text>
        </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 330,
    height:420,
    marginTop:70,
    borderWidth:4,
    borderColor:Colors.WHITE,
    borderRadius :12
  },
  subContainer :{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
  },
  button:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderRadius:99,
    marginTop:40

  }
});
