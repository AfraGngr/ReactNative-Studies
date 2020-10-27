import React from "react";
import {SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Alert} from "react-native";

import MyButton from "./components/MyButton"

const App = () =>{

    const sayHello = () =>{
        alert("Hello there !")
    }

    return (
        <SafeAreaView>
            <View>
                <Text style = {{fontSize :50, textAlign: "center"}}> Hello World</Text>
            </View>

            <MyButton 
                sayingHi = {sayHello}
                color = "#4f9a94" 
                banner= "Press Me !"
            />
            <MyButton 
                sayingHi ={() => {Alert.alert("Clarusway", "FullStack 4ever")}}
                banner= "Hit the button !"
            />

            {/* <TouchableOpacity style = {styles.buttonContainer}>
                <Text style = {styles.text}>Press Me !</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default App;

