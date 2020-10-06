import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerOne}>
        <View style={{backgroundColor: 'red', flex:1}} />
        <View style={{backgroundColor: 'blue', flex:1}} />
      </View>
      <View style={styles.containerTwo}>
        <View style={ {backgroundColor: 'yellow', flex:1}} />
        <View style={{ backgroundColor: 'green', flex:1}} />
        <View style={{backgroundColor: 'blue', flex:1}} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    flexDirection: 'row',
  },
  containerTwo :{
    flex: 1,   
  },
});
