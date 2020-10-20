import React from "react";
import {
    SafeAreaView, 
    View, 
    Text, 
    Image, 
    StyleSheet,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import {Input, Button} from "./components" //teker teker import etmek yerine index dosyasında export ediyoruz. Burada import ediyoruz.

const Login = () => {

    return (
        <SafeAreaView style = {{flex:1, backgroundColor:"#e1bee7"}}>
            <KeyboardAvoidingView style = {{flex:1}} behavior={Platform.OS == "android" ? null : "padding"}>
                <ScrollView style = {{flex:1}} bounces = {false}>
                    <View style = {{flex:1}}>
                        <Image 
                            source ={require("./image/shopping2.png")}
                            style = {styles.logoStyle}
                        />

                        <Input holder= "E-posta giriniz"/>
                        <Input holder= "Şifre giriniz"/>

                        <Button/>
                    </View>
                </ScrollView> 
            </KeyboardAvoidingView>    
        </SafeAreaView>
    )
};

export default Login;

const styles = StyleSheet.create ({
    logoStyle: {
        resizeMode:"contain",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.40, //ekranın 40% sini kaplamasını istiyorum
        tintColor:"black"
    }
})