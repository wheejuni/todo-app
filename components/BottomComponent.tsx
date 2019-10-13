import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { Icon } from 'react-native-vector-icons/dist/AntDesign';

export default class BottomComponent extends React.Component {
    render() {
        return(
            <TabNavigator>
                <TabNavigator.Item title={"home"}/>
                <TabNavigator.Item title={"settings"}/>

            </TabNavigator>
        )
    }
}

