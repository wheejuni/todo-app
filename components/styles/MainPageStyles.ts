import { StyleSheet, StyleProp, ViewStyle } from'react-native';

interface NavStyleSheets {
    container: StyleProp<ViewStyle>,
    navigationArea: StyleProp<ViewStyle>,
    listingsArea: StyleProp<ViewStyle>
}

export const mainPageStyles: NavStyleSheets = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver'
    },
    navigationArea: {
        height: '15%',
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listingsArea : {
        height: '85%',
        backgroundColor: 'white',
        padding: '5%'
    }
    
})