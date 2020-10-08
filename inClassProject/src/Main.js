import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import MyBanner from "./components/MyBanner"
import MyButton from "./components/MyButton"

const food_data = [
    {
        id :0,
        title :"Çorbalar",
        desc :"Birbirinden leziz çorbalar!",
        color : "#e57373",
        isActive: false,
    },
    {
        id :1,
        title :"Ara Sıcaklar",
        desc :"Lezzetli Aperatifler!",
        color :"#81d4fa",
        isActive: true,
    },
    {
        id :2,
        title :"Ana Yemekler",
        desc :"Doyurucu Lezzetler!",
        color:"#ffd54f",
        isActive: false,
    },
    {
        id :3,
        title :"Alkolsüz İçecekler",
        desc :"Buz gibi serinletici lezzetler",
        color :"#cfd8dc",
        isActive:true,
    },
    {
        id :3,
        title :"Alkollü İçecekler",
        desc :"Buz gibi serinletici alkollü lezzetler",
        color :"#c5e1a5",
        isActive:false,
    },
]

const App = () => {
    return(
        <SafeAreaView  style={{flex:1}}>
            <View>
                {food_data.map((food) =>{
                    return (
                        <MyBanner
                            title={food.title}
                            desc={food.desc}
                            color={food.color}
                            isActive={food.isActive}
                        />
                    );
                })}
            </View>

            <MyButton/>
            
            {/* <MyBanner 
                title = "Çorbalar"
                desc = "Birbirinden leziz çorbalar!"
                color = "#e57373"
                isActive = {false}
            />
            <MyBanner 
                title = "Ara Sıcaklar"
                desc= "Lezzetli Aperatifler!"
                color = "#81d4fa"
                isActive = {true}
            />
            <MyBanner 
                title = "Ana Yemekler"
                desc= "Doyurucu Lezzetler!"
                color = "#ffd54f"
                isActive = {false}
            /> */}
            {/* title = attribute içine yazdıklarım MyBanner fonksyonundaki "props" a gidiyor */}
        </SafeAreaView>
    )
}


export default App;