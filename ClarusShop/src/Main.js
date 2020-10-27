import React from "react";
import {SafeAreaView, View, TouchableOpacity, Text, StyleSheet} from "react-native";

import Button from "./components/Button"

const App = () =>{
    return (
        <SafeAreaView>
            <View>
                <Text style = {{fontSize :50, textAlign: "center"}}> Hello World</Text>
            </View>

            <Button title = "Press Me !"/>
            <Button title = "Hit the button !"/>

            {/* <TouchableOpacity style = {styles.buttonContainer}>
                <Text style = {styles.text}>Press Me !</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default App;

