import React from "react";
import {SafeAreaView, View, Text} from "react-native";

import MyBanner from "./components/MyBanner";
import MyButton from "./components/MyButton";


const foodData = [
    {
        id : 0,
        title : "Çorbalar",
        desc: "Birbirinden leziz çorbalar",
        color :"#6f79a8",
        isActive : true,
    },
   
    {
        id : 1,
        title : "Ara Sıcak",
        desc: "Lezzetli aperatifler !",
        color :"#b4004e",
        isActive : false,
    },
    {
        id : 2,
        title : "Ana Yemek",
        desc: "Lezzetli aperatifler !",
        color :"#ff94c2",
        isActive : true,
    },
    {
        id : 3,
        title : "İçecekler",
        desc: "Buz gibi soğuk içecekler !",
        color :"#4b636e",
        isActive : false,
    }
   
]


const App = () => {
    return (
        <SafeAreaView style = {{flex:1}}>
            <View>
               {foodData.map((food) => {
                   return (
                   <MyBanner
                    title = {food.title}
                    desc = {food.desc}
                    color= {food.color}
                    isActive = {food.isActive}
                    />
                   )
               })}
            </View>
            <MyButton buttonTitle = "Yenile"/>
        </SafeAreaView>
    )
}

export default App;




// <MyBanner 
// title = "Çorbalar"
// desc = "Birbirinden leziz çorbalar."
// color = "#6f79a8"
// isActive = {false}
// />
// <MyBanner 
// title = "Salatalar"
// desc = "Çeşit çeşit salatalar."
// color = "#ff94c2"
// isActive = {true}
// />
// <MyBanner 
// title = "Ara Sıcak"
// desc = "Biraz da ara sıcak."
// color = "#b4004e"
// isActive = {false}
// />
// <MyBanner 
// title = "İçecekler"
// desc = ""
// color = "#4b636e"
// isActive = {true}
// />