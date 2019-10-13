import React from 'react';
import { Header } from 'react-native-elements';

export default class HeaderComponent extends React.Component {
    render() {
        return(
            <Header centerComponent={{text: "TODO APP", style:{color: "yellow"}}}>
            </Header>
        )
    }
}