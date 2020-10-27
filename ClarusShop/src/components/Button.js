import React from "react";
import {SafeAreaView, View, TouchableOpacity, Text, StyleSheet} from "react-native";

const Button = (props) =>{
    return(
        <TouchableOpacity style = {styles.buttonContainer}>
            <Text style = {styles.text}>{props.title}</Text> 
        </TouchableOpacity>
    )
}


export default Button;

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