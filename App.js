import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import Login from './App/Screens/LoginScreen/Login';
export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_Ym9zcy1mZXJyZXQtNjYuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
      <Login/>
      {/* sign in compoenent */}
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        {/* Signout */}
        <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:20,
    
    
  },
});
