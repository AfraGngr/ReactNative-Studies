import React, {useState} from "react";
import {SafeAreaView, View, Text, Button, } from "react-native";

const App = () => {
    const [counter, setCounter] = useState(0)

    const updateCounter = () => setCounter (counter +1) 

    const resetCounter = () => setCounter(0)
    return (
        <SafeAreaView style ={{flex:1}}>
            <View style ={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Button
                    title = "Go Up !!"
                    onPress = {updateCounter}   
                    
                />

                <Text style = {{fontSize : 150 }}>{counter}</Text>      

                 <Button
                    title = "Reset"
                    onPress = {resetCounter}   
                />
            </View>
        </SafeAreaView>
    )
}

export default App;


// onPress = {() => setCounter(counter+1)} fonksyonu yularıda tanımlamazsak bu şekilde yapıyoruz.