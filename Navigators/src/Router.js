// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import First from "./pages/First";
import Second from "./pages/Second";

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen name="FirstPage" component={First} options ={{title:"Gönderiler"}} />
        <Stack.Screen name="SecondPage" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


{/* <Stack.Navigator 
        initialRouteName="SecondPage"
        screenOptions = {{
            headerShown: true,
            gestureEnabled: true
        }}
    ></Stack.Navigator> */}