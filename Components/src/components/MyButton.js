import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";


const MyButton = (props) => {
    return (
        <TouchableOpacity 
            style = {styles.container}
            onPress = {() => alert("Hello")}
        >
            <Text style = {styles.text}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    );
};


export default MyButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#002f6c",
        padding: 10,
        marginHorizontal: 100,
        marginVertical: 20,
        borderRadius:15,
    },

    text:{
        textAlign: "center",
        color: "white",
        fontWeight:"bold",
    }
})