import React from "react";
import {StyleSheet,View, TextInput, Platform} from "react-native";


const Input = (props) => {
    const {holder} = props //Destruction method.
    
    return(
        <View style = {styles.container}>
            <TextInput
                placeholder= {holder}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: "#eceff1",
        padding: Platform.OS == "iOS" ? 15 : 5,
        margin: 30,
        borderRadius:10,
        marginVertical:20,
    }
})

export { Input }