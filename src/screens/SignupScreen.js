import React, {useState} from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import firebase from 'firebase';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onButtonPress = (emailString, passwordString) => {
        console.log('Signup');
        firebase.auth().createUserWithEmailAndPassword(emailString, passwordString)
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
    }

    return <>
        <AuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            buttonText='Sign Up'
            onButtonPress={onButtonPress}/>
        <TouchableOpacity>
            <Text 
                style={styles.text}
                onPress={() => navigation.navigate('Login')}>
                    Already have an account? Log in.
            </Text>
        </TouchableOpacity>
    </>
};

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginVertical: 10,
        color: '#fd5870'
    }
});

export default SignupScreen;