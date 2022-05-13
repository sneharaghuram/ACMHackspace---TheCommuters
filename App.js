// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduledTrips from './components/ScheduleTrips';
import { initializeApp } from 'firebase/app';

import LoginScreen from './components/LoginScreen';
import LoadingScreen from './components/LoadingScreen';
import firebaseConfig from './config';
import { createNativeWrapper } from 'react-native-gesture-handler';

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();




export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name = "ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name = "LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name = "LoginScreen" component={LoginScreen} />
          <Stack.Screen name = "ScheduledTrips" component={ScheduledTrips} />          
        </Stack.Navigator>
      </NavigationContainer>

  );
}








// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: "100%",
//     backgroundColor: '#CAFFF2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


