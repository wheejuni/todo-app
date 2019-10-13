import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import HeaderComponent from './HeaderComponent';
import BottomComponent from './BottomComponent';

export default class Mainpage extends React.Component {
    render() {
        return(
            <ThemeProvider>
                <HeaderComponent/>
                <BottomComponent/>
            </ThemeProvider>
        )
    }
}

