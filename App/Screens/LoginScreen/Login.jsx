import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
export default function Login() {
  return (
    <View style={{alignItems :'center'}}>
      <Image
        source={require("./../../../assets/images/login.jpg")}
        style={styles.loginImage}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 230,
  },
});
