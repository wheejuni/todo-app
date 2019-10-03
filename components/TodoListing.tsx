import React from 'react';
import TodoArticle from './TodoArticle';
import { mainPageStyles } from './styles/MainPageStyles';
import {ScrollView, Text} from 'react-native';

export default class TodoListing extends React.Component {
    render() {
        return(
            <ScrollView style={mainPageStyles.listingsArea}>
                <TodoArticle/>
                <TodoArticle/>
                <TodoArticle/>
                <TodoArticle/>
                <TodoArticle/>
            </ScrollView>
        )
    }
}