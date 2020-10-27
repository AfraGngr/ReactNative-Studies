import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Component_B = () => {
    const ourCounter = useSelector(myGlobalState => myGlobalState.counter)
    const myUserName = useSelector(otherState => otherState.userName)

    return (
        <View style={{ backgroundColor: '#c0b3c2', flex: 1 }}>
            <Text>Component_B</Text>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>Counter: {ourCounter} </Text>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>Name: {myUserName} </Text>

        </View>
    );
};

export default Component_B;