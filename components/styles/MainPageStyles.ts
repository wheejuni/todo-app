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
        flex: 1.2,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listingsArea : {
        flex: 8.8,
        backgroundColor: 'white'
    }
    
})