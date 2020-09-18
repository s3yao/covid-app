import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SymptomButton from './SymptomButton';

const LogForm = ({ data }) => {
    return <>
        <Text style={styles.title}>Entry Date: {data.date}</Text>
        <View>
            <View style={styles.subcontainer}>
                <SymptomButton name='Fever' icon='thermometer' selected={data.fever}/>
                <SymptomButton name='Cough' icon='chart-bubble' selected={data.cough}/>
            </View>
            <View style={styles.subcontainer}>
                <SymptomButton name='Fatigue' icon='power-sleep' selected={data.fatigue}/>
                <SymptomButton name='Headache' icon='face-outline' selected={data.headache}/>
            </View>
        </View>
        <Text style={styles.comment}>Comments: {data.comments}</Text>
    </>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
        margin: 10,
        marginBottom: 15
    },
    subcontainer: {
        flexDirection: 'row',
    },
    comment: {
        fontSize: 16,
        color: 'grey',
        margin: 10
    }
});

export default LogForm;