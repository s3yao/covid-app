import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderSpace from '../components/HeaderSpace';

const ProfileScreen = () => {
    return <>
        <HeaderSpace/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Log Out</Text>
        </TouchableOpacity>
    </>
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        margin: 40,
        borderRadius: 5,
        backgroundColor: '#fd5870',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});

export default ProfileScreen;