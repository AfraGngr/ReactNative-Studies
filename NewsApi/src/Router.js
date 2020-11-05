import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import  {Main, News, Details} from './pages'

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NewsPage">
                <Stack.Screen
                    name="MainPage"
                    component={Main}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="NewsPage"
                    component={News}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DetailsPage"
                    component={Details}
                    options={{ headerShown: false }}

                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
