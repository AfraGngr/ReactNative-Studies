import * as React from 'react';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SavedJobs, Jobs, Introduction } from './pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function IntroPage(){
  return(
    <Stack.Navigator screenOptions ={{headerShown :false}} initialRouteName ="Introduction">
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Jobs" component={Jobs} />
    </Stack.Navigator>
  )
}

function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen  
        name = "Introduction" 
        component={IntroPage} 
        options ={{
          drawerIcon : config => <Icon name = "info" size = {20}/>
        }}
        />
        <Drawer.Screen  
          name = "SavedJobs" 
          component={SavedJobs} 
          options ={{
            drawerIcon : config => <Icon name = "save" size = {20} color ="black" />
          }}
        />
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default Router;


{/* <Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen name="Intro" component={Introduction} />
<Stack.Screen name="Jobs" component={Jobs} />
<Stack.Screen name="SavedJobs" component={SavedJobs} />
</Stack.Navigator> */}