import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import { Icon, Input } from 'react-native-elements'

const LoginScreen = () => {
    const dispatch = useDispatch()
    const [datauser, setdatauser] = useState({
        username: ''
    })

    const onInputUsername = (text) => {
        setdatauser({...datauser, username: text})
    }

    const loginPress = async () => {
        try {
            await AsyncStorage.setItem('username', datauser.username)
            dispatch({type: 'LOGIN', payload: datauser.username})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <StatusBar backgroundColor='#3DDC84' barStyle="light-content" />
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20}}>
                    <View style={{paddingVertical: 20}}>
                        <Text style={{color: '#3DDC84', fontSize: 35, paddingVertical: 5, fontWeight: 'bold'}}>KucingApp</Text>
                        <Icon 
                            type='material-community'
                            name='cat'
                            size={75}
                            color='#3DDC84'
                        />
                    </View>
                    <Input 
                        value = {datauser.username}
                        placeholder = {'Username'}
                        leftIcon = {{type: 'font-awesome-5', name: 'cat', color: '#3DDC84'}}
                        onChangeText = {onInputUsername}
                    />
                    <View style={{width: '20%', paddingTop: 20,}}>
                        <Button 
                            title='Login'
                            onPress={loginPress}
                            color='#3DDC84'
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

export default LoginScreen