import React from 'react';
import { mainPageStyles } from './styles/MainPageStyles';
import TabButton from './TabButton';
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

export default class Navigation extends React.Component {
    render() {
        return(
            <View style={mainPageStyles.navigationArea}>
                <View style={navAreaStyle.navMainArea}>
                    <Text style={navAreaStyle.navMainText}>TODO APP</Text>
                </View>
                <View style={navAreaStyle.navTabsArea}>
                    <TabButton/>
                    <TabButton/>
                    <TabButton/>
                    <TabButton/>
                </View>
            </View>
        )
    }
}

const navAreaStyle = StyleSheet.create({
    navMainArea: {
        flex: 55
    },
    navTabsArea: {
        flex: 45,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white'
    },
    navMainText: {
        paddingTop: '4%',
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        alignContent: 'center'
    }
})
