import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';


export default function App() {

  const Stack = createStackNavigator();

  return (

    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView>


          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headershown: false,}} /> 


        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
