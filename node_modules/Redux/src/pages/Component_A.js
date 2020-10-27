import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Component_A = () => {
    const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();
 
    return (
        <View style={{ backgroundColor: '#f3e5f5', flex: 1 }}>
            <Text>Component_A</Text>
            <Text style={{ fontSize: 35, fontWeight: "bold"}}>Counter: {myCounter} </Text>
            <TouchableOpacity 
                style = {styles.buttons}
                onPress = {() => dispatch({type:"INCREASE_COUNTER"})} >
                <Text style = {styles.text}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style = {styles.buttons} 
                onPress = {() => dispatch({type:"DECREASE_COUNTER"})}>
                <Text style = {styles.text}>Decrease</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Component_A;

const styles = StyleSheet.create({
    buttons :{
        margin: 5,
        padding: 10,
        backgroundColor:"#65499c" 
    },
    text: {
        color: "antiquewhite",
        textAlign : "center",
        fontSize: 15,

    }
})
