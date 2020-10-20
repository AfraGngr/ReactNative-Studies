import React from "react";
import {TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native";

const Button = () =>{
    return(
        <TouchableOpacity style = {styles.container}>
            <Text style = {styles.text}>Giriş Yap</Text>
        </TouchableOpacity>

    )
}

export  { Button }

const styles = StyleSheet.create({
    container :{
        backgroundColor: "#af8eb5",
        padding:20,
        width: Dimensions.get("window").width /2,
        alignSelf: "center",
        borderRadius: 10,
    },

    text:{
        fontWeight: "bold",
        color:"white",
        textAlign: "center"
    }
})