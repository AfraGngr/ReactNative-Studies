import React from 'react';
import {SafeAreaView, View, Text } from 'react-native';

const Post = (props) => {
    return(
        <SafeAreaView>
            <View>
                <Text style ={{fontSize: 40}}>Post</Text>
                <Button
                    title ="Back"
                    onPress ={() => props.navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    )
}

export { Post }