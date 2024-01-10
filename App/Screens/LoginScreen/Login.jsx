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
      <View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height:450,
    marginTop:70,
    borderWidth:4,
    borderColor:Colors.BLACK,
    borderRadius :12
  },
  subContainer :{
    width:'100%',
    backgroundColor:Colors.PRIMARY
  }
});
