import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '../screens/Home'
import DetailScreen from './../screens/Detail'

const StackRoot = createStackNavigator()

const StackRootNav = () => {
    
    return (
        <StackRoot.Navigator headerMode='none' initialRouteName='logout'>
            <StackRoot.Screen name='home' component={HomeScreen} />
            <StackRoot.Screen name='detail' component={DetailScreen} />
        </StackRoot.Navigator>
    )
}

export default StackRootNav