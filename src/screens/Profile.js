import React from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    StatusBar,
    Image
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

// const picture = require('./../asset/blank-profile.png')

const ProfileScreen = () => {
    const Auth = useSelector(state=>state.Auth)
    // console.log(Auth)

    return ( 
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source=
                {
                    Auth.picture?
                    {uri: Auth.picture}
                    :
                    require('./../asset/defaultpicture.jpg')
                } style={{height:180, width:150, height:150, borderRadius:75}}/>
            <Text style={{color:'black', fontSize:20}}>{Auth.username}</Text>
        </View>
    );
}

export default ProfileScreen;