import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderSpace from '../components/HeaderSpace';
import Button from '../components/Button';
import firebase from 'firebase';

const ProfileScreen = () => {

    const signOut = () => {
        firebase.auth().signOut()
        .catch((error) => console.log(error))
    }

    return <>
        <HeaderSpace/>
        <View 
            style={styles.buttonContainer}>
            <Button onButtonPress={signOut}>Log Out</Button>
        </View>
    </>
};

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 40
    }
});

export default ProfileScreen;