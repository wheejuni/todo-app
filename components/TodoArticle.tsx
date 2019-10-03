import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TodoArticle extends React.Component {
    render() {
        return(
            <View style={todoArticleStyle.todoArticleItem}>
                <Text>This is todo article.</Text>
            </View>
        )
    }
}

const todoArticleStyle = StyleSheet.create({
    todoArticleItem: {
        flex: 1,
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10
    }
})