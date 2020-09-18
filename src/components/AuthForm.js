import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card , Input } from 'react-native-elements';
import Button from './Button';

const AuthForm = ({ email, setEmail, password, setPassword, buttonText, onButtonPress }) => {
    return <>
        <View style={styles.spacer}/>
        <Card>
            <Input
                label='Email'
                placeholder='abc@gmail.com'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label='Password'
                placeholder='password'
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.buttonContainer}>
                <Button
                    onButtonPress={() => onButtonPress(email, password)}>
                        {buttonText}
                </Button>
            </View>
        </Card>
    </>
};

const styles = StyleSheet.create({
    spacer: {
        height: 150
    },
    buttonContainer: {
        margin: 10
    }
});

export default AuthForm;