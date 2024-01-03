import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../assets/images/login.jpg")}
        style={styles.loginImage}
      />
      <View styles={styles.subContainer}>
         

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    marginTop:-20
    
  }


});
