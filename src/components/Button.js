import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ children, onButtonPress }) => {
    return <>
        <TouchableOpacity 
            style={styles.button}
            onPress={onButtonPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    </>
};

const styles = StyleSheet.create({
    button: {
        height: 50,
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

export default Button;