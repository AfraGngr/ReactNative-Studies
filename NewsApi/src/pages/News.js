import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, Dimensions, TouchableHighlight } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// import { CityItem, SearchBar } from '../components'

// let originalList = []
// let originnewsList = [];

const News = (props) => {
    const [newsList, setnewsList] = useState([]);
   

    // ASYNC-AWAIT 
    
    // const fetchData = () => {
    //        axios.post(
    //            'https://worldwide-restaurants.p.rapidapi.com/search',
    //            {
    //                "limit": "30",
    //                "language": "en_US",
    //                "location_id": "297704",
    //                "currency": "USD"
    //            },
    //            {
    //                headers: {
    //                    "content-type": "application/json",
    //                    "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
    //                    "x-rapidapi-key": "0166bfd020msh2af84d5a89becb9p16e63djsn8256b0c41551",
    //                }
    //            }
    //        )
    //            .then(response => setList(response.data.results.data))
    //            .catch(error => console.log(error))
    //    }

    const fetchMainData = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=tr&apiKey=0cc009db5ead40c58b83c3f17ba1f5bd");
      console.log (response);
      setnewsList(response.data.articles);
     ;}

      // var url = 'http://newsapi.org/v2/top-headlines?' +
      //     'country=us&' +
      //     'apiKey=0cc009db5ead40c58b83c3f17ba1f5bd';
      //   var req = new Request(url);
      //   const fetchMainData = ()=> { fetch(req)
      //   .then(function(response) {
      //   console.log(response.JSON.stringify(data));
      //   })}
     
      

      useEffect(() => {  fetchMainData();
      }, [])
      

    renderItemNews = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => { alert(item.source.name) }}>
          <View style={{ flex: 1, flexDirection: "row", padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
            <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={{ flexWrap: "wrap" }}>{item.title}</Text>
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                <Text>{item.source.name}</Text>
                <Text>{item.publishedAt}</Text>
              </View>
            </View>
          </View>
          
          </TouchableHighlight>
          );
      }
     
      return (
        <SafeAreaView>
          <FlatList
            data={newsList}
            renderItem={renderItemNews}
            keyExtractor={(item, index) => item.toString()}
          />
        </SafeAreaView>
      );
    };
     
    

    
export {News};