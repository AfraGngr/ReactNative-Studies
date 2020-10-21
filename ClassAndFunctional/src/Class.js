import React, { Component } from "react";
import {SafeAreaView, View, Text, Button} from "react-native";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter : 0 
        }

    }

    render () {
        return (
            <SafeAreaView style ={{flex:1}}>
                <View style ={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Button
                    title = "Go Up !!"
                    onPress = {() => this.setState(
                       { counter: this.state.counter + 1}
                    )}   
                    
                />

                <Text style = {{fontSize : 150 }}>{this.state.counter}</Text>      

                 <Button
                    title = "Reset"
                    onPress = {() => this.setState({
                        counter: 0
                    })}   
                />
                </View>
            </SafeAreaView>
        )
    }

}


export default App ;

// setState React.Components içinde bir method