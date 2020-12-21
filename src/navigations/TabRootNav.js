import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import LogoutScreen from './../screens/Logout'
import ProfileScreen from './../screens/Profile'
import StackRootNav from './../navigations/StackRootNav'
import ProfileDrawer from './ProfileDrawer'
import { Icon } from 'react-native-elements';

const TabRoot = createBottomTabNavigator()

const TabRootNav = () => {
    
    return (
        <TabRoot.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({focused, color, size})=> {
                    let iconName;
                    let type;
                    if (route.name === 'stackroot') {
                        iconName = focused? 'home': 'home';
                        type = 'entypo'
                    } else if (route.name === 'profile') {
                        iconName = focused ? 'user-circle' : 'user-circle';
                        type = 'font-awesome-5'
                    } else if (route.name === 'profiledrawer') {
                        iconName = focused ? 'sign-out-alt' : 'sign-out-alt';
                        type = 'font-awesome-5'
                    }
                    return <Icon name={iconName} type={type} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                inactiveTintColor: 'gray',
                activeTintColor: '#3DDC84',
                showLabel: false
            }}
        >
            <TabRoot.Screen name='stackroot' component={StackRootNav} />
            <TabRoot.Screen name='profile' component={ProfileScreen} />
            <TabRoot.Screen name='profiledrawer' component={ProfileDrawer} />
            

        </TabRoot.Navigator>
    )
}

export default TabRootNav