import React from 'react';
import { View } from 'react-native';
import { mainPageStyles } from './styles/MainPageStyles'
import Navigation from './Navigation';
import TodoListing from './TodoListing';

export default class Mainpage extends React.Component {
    render() {
        return(
            <View style={mainPageStyles.container}>
                <Navigation/>
                <TodoListing/>
            </View>
        )
    }
}

