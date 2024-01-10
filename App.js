import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import Login from './App/Screens/LoginScreen/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key , value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  return (
    

    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_Ym9zcy1mZXJyZXQtNjYuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
     
      {/* sign in compoenent */}
      <SignedIn>

        <NavigationContainer><TabNavigation/></NavigationContainer>
          <Text>You are Signed in with abhinav</Text>
        </SignedIn>
        {/* Signout */}
        <SignedOut>
        <Login/>
        <Text>You are Signed out</Text>
        {/* storing the cache is in cache token */}
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
