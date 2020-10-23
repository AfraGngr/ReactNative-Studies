  
import React from 'react';
import { SafeAreaView, View, Text, Button} from 'react-native';

const Main = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Text style ={{fontSize: 40}}>Main</Text>
                <Button 
                    title = "Go !"
                    onPress = {() => props.navigation.navigate("PostPage")}
                />
            </View>
        </SafeAreaView>
    )
}

export { Main }