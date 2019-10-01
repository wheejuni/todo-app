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
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    listingsArea : {
        flex: 9,
        backgroundColor: 'white'
    }
    
})