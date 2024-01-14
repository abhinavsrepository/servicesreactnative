import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
;
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/login.jpg")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 20, color: Colors.WHITE, textAlign: "center" }}
        >
          Let's Connect For Professional{" "}
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Creative design ,Branding , Print Design ,Packaging and web design.
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to find services near you which deliver you a professional
          service
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ textAlign: "center", fontSize: 17, color: Colors.PRIMARY }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 330,
    height: 420,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.YELLOW,
    borderRadius: 12,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 4,
    padding: 20,
    borderColor: Colors.YELLOW,
  },
  button: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 8,
  },
});
