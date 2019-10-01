import React from 'react';
import { mainPageStyles } from './styles/MainPageStyles';
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

export default class Navigation extends React.Component {
    render() {
        return(
            <View style={mainPageStyles.navigationArea}>
                <Text style={navTextStyle.navMainText}>TODO APP</Text>
            </View>
        )
    }
}

const navTextStyle = StyleSheet.create({
    navMainText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
    }
})
