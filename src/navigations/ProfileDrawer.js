import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CommonActions, TabActions} from '@react-navigation/native';
import LogoutScreen from '../screens/Logout';
import { View, Text } from 'react-native';
import ProfileScreen from '../screens/Profile'


const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
return (
    <Drawer.Navigator
    initialRouteName="Setting"
    drawerType="slide"
    drawerPosition="right">
    <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
    />
    <Drawer.Screen name="Setting" component={LogoutScreen} />
    </Drawer.Navigator>
);
};

export default ProfileDrawer;
