import { firebase } from '@react-native-firebase/auth';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
//import firebase from 'firebase';s
//import {View, Text, StyleSheet} from 'react-native'
import { getAuth, onAuthStateChanged } from 'firebase/auth' ; 

export default function LoadingScreen(props)
{
    useEffect(() => {
        checkIfLoggedIn();
    }, []);

    const checkIfLoggedIn = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, function(user)
        {
            if(user)
            {
                props.navigation.navigate('ProfileScreen');
            }
            else
            {
                props.navigation.navigate('LoginScreen');
            }
        });

    }




    return (
        <View style={styles.container}>
    
            <Text> Loading screen </Text>        
        </View>
    );

}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 

