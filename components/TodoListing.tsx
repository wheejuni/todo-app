import React from 'react';
import { mainPageStyles } from './styles/MainPageStyles';
import {View, Text} from 'react-native';

export default class TodoListing extends React.Component {
    render() {
        return(
            <View style={mainPageStyles.listingsArea}>
                <Text>This will be the todo listings.</Text>
            </View>
        )
    }
}