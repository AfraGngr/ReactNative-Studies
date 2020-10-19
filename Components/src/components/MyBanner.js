import React from "react";
import { View, StyleSheet, Text} from "react-native";

const MyBanner = (props) =>{
    // function checkActiveStatus(){
    //     if(props.isActive){
    //         return null
    //     }
    //     else{
    //         return <Text style ={{color: "white"}}>Aktif Değil</Text>
    //     }
    // } -- 1



    return (
        <View style = {[styles.container, {backgroundColor: props.color}]}>
            <View style = {{flexDirection : "row", justifyContent: "space-between", alignItems:"center"}}>
                <View>
                    <Text style = {styles.text}>{props.title}</Text>
                    <Text style = {styles.desc}>{props.desc}</Text>
                </View>
                {/* {checkActiveStatus()} --1 */}

                {/* --2 */}
                {/* {props.isActive ? null : <Text style ={{color: "white"}}>Aktif Değil</Text>} */}
                {/* --2 */}

                {/* --3 */}
                {!props.isActive && <Text style ={{color: "white"}}>Aktif Değil</Text>}
                {/* --3 */}
            </View>   
        </View>
    )
}

export default MyBanner;

const styles = StyleSheet.create({
    container : {
        backgroundColor : "pink",
        padding: 10,
        margin : 10,
        borderRadius: 25,
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },

    desc:{
        margin: 3,
        fontSize: 15,
        color: "white"
    }
})