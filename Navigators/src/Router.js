// Bu sayfa başlangıç sayfamız.
// Stack.Navigator sayfalar arasında geçiş yapmamı sağlayan component
// initialRouteName within the Stack.Navigator determines the start page

/* 

1.lazy : sayfa sadece aktifken yüklenir..
2.tabBar kullanarak kendi tabBarımızı oluşturabiliriz...
 
 */

 
{/* <Stack.Navigator 
        initialRouteName="SecondPage"
        screenOptions = {{
            headerShown: true,
            gestureEnabled: true
        }}
    ></Stack.Navigator> */}

import * as React from 'react';
import { SafeAreaView,View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Main , Post, Friends} from "./pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const First = () => {
//   return(
//     <SafeAreaView>
//       <Text>First</Text>
//     </SafeAreaView>   
//   )}
// const Second = () => {
//   return(
//     <SafeAreaView>
//       <Text>Second</Text>
//     </SafeAreaView>   
//   )}


/** 
 *      Tab.Navigator
 *        - Friends
 *        - MainComponent
 *          + Main
 *          + Post  
*/

//MainComponent Tab.Screen deki "MainPage" in componenti olacak !
function MainComponent(){
  return(
  <Stack.Navigator>
    <Stack.Screen name ="MainPage" component ={Main}/>
    <Stack.Screen name ="PostPage" component ={Post}/>
  </Stack.Navigator>
  )
}


function Router() {
  return (
    <NavigationContainer> 
      <Tab.Navigator 
        tabBarOptions = {{
          activeTintColor: "purple"
        }}
      > 
        <Tab.Screen name="FriendsPage" component={Friends} options={{title :"Arkadaşlar"}}/>
        <Tab.Screen name="MainPage" component={MainComponent}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;



const styles = StyleSheet.create({

})


/** 
 * uygulama ilk açıldığında post page i görmek için ;
   Tab.Navigator initialRouteName = "MainPage"
   Stack.Navigator initialRouteName = "PostPage"
*/
  