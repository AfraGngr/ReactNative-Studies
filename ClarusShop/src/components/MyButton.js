import React from "react";
import {SafeAreaView, View, TouchableOpacity, Text, StyleSheet} from "react-native";

const MyButton = (props) =>{
    // If the color is not defined in Main.js within the MyButton tag ;
    let selectedColor = props.color 

    if (props.color === undefined)
        selectedColor = "#a5d6a7"


    return(
        <TouchableOpacity style = {
            [styles.buttonContainer, 
            {
                backgroundColor: selectedColor
                /**
                backgroundColor : props.color ==== undefined ? "a5d6a7" : props.color -- if kullanmadan tek satırda yazmak istersek bu şekilde yazabiliriz
                */
            }
            ]}
            onPress = {props.sayingHi}
            >
            <Text style = {styles.text}>{props.banner}</Text> 
        </TouchableOpacity>
    )
}


export default MyButton;

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor : "#a5d6a7",
        padding : 10,
        margin : 5,
        borderRadius : 10,
        alignItems : "center",
    },

    text :{
        fontSize: 25,
        color : "antiquewhite",
    }
})