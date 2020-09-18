import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SymptomButton  = ({ name, icon, selected }) => {
    const color = selected ? '#fd5870' : 'grey'
    return <TouchableOpacity>
        <View style={styles.container} borderColor={color}>
            <MaterialCommunityIcons 
                name={icon} 
                size={100} 
                color={color}/>
            <Text style={ selected ? styles.selectedText : styles.text}>{name}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    container: {
        height: 175,
        width: 150,
        borderWidth: 5,
        borderRadius: 7,
        margin: 5,
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        color: 'grey'
    },
    selectedText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        color: '#fd5870'
    }
});

export default SymptomButton;