import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TabButton extends React.Component {
    render() {
        return(
            <View style={tabButtonStyle.buttonStyle}>
                <Text>#인생</Text>
            </View>
        )
    }
}

const tabButtonStyle = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        backgroundColor: 'silver',
        borderTopWidth: 1,
        borderWidth: 0.3,
        alignContent: 'center',
        justifyContent: 'center'
    },
    textStyle: {

    }
})