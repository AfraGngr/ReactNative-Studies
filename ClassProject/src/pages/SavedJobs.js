import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, Button} from 'react-native';

import { JobItem } from '../components'


const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([])

  AsyncStorage.getItem("@SAVED_JOBS")
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  })

  async function deleteJob (){
     return(
       await AsyncStorage.removeItem("@SAVED_JOBS")
       )
      }

  

  const removeSelectedItem = (job) => {
    let currentList = [...jobList]
    console.log(currentList)
    var index = currentList.indexOf(job);
    console.log(index)
      if (index > -1){
        currentList.splice(index, 1);
       
      }
      console.log(currentList)
      AsyncStorage.setItem("@SAVED_JOBS", JSON.stringify(currentList));
  }

  return (
    <SafeAreaView>
      <View>
      <Button 
          title ="remove"
          onPress = {deleteJob}
        />


        <FlatList
          data={jobList}
          renderItem={({item}) => <JobItem job={item} onSelect = {() => removeSelectedItem(item)} />}
        />
        
        
      </View>
    </SafeAreaView>
  );
};

export {SavedJobs};
