import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const InfoCard = ({ data }) => {
    console.log(data);

    if (!data) {
        return <Card>
            <Text style={styles.text}>Select a country to begin.</Text>
        </Card>
    }
    return <>
        <Card>
            <Card.Title>Info Card: {data.Country}</Card.Title>
            <Card.Divider/>
            <Text style={styles.text}>Date Updated: {data.Date}</Text>
            <Text style={styles.text}>Total Confirmed Cases: {data.TotalConfirmed}</Text>
            <Text style={styles.text}>Total Deaths: {data.TotalDeaths}</Text>
            <Text style={styles.text}>Total Recovered: {data.TotalRecovered}</Text>
        </Card>
    </>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: 'grey'
    }
});

export default InfoCard;