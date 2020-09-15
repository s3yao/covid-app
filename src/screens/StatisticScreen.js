import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderSpace from '../components/HeaderSpace';
import RNPickerSelect from 'react-native-picker-select';
import InfoCard from '../components/InfoCard';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const StatisticScreen = () => {
    const [currentData, setCurrentData] = useState(null);
    const [countryList, setCountryList] = useState([]);
    const [countryData, setCountryData] = useState([]);

    const onCountryChange = (name) => {
        const temp = countryData.find(element => element.Slug === name);
        setCurrentData(temp);
    }

    const placeholder = {
      label: 'Select a country...',
    };

    const parseFunction = (data) => {
        return {
            label: data.Country,
            value: data.Slug,
            key: data.CountryCode
        }
    };

    const getData = async (url = '') => {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer'
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    useEffect( () => {
        getData("https://api.covid19api.com/summary")
        .then(response => {
            const temp = response.Countries.map(parseFunction);
            setCountryList(temp);
            setCountryData(response.Countries);
        })
        .catch(error => console.log('error', error));
    }, []);

    return <>
        <HeaderSpace/>
        <Text style={styles.text}>Country: </Text>
        <RNPickerSelect
            style={{...pickerStyles}}
            placeholder={placeholder}
            onValueChange={onCountryChange}
            items={countryList}
            Icon={() => {
              return <View style={styles.icon}>
                  <SimpleLineIcons name="arrow-down" size={24} color="#fd5870" />
                </View>
            }}
        />
        <InfoCard data={currentData}/>
    </>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'grey',
        marginHorizontal: 40,
        marginBottom: 10,
        marginTop: 20
    },
    icon: {
        paddingRight: 60,
        paddingTop: 15
    }
});

const pickerStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#fd5870',
        height: 50,
        marginBottom: 20,
        marginHorizontal: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'grey'
    }
})

export default StatisticScreen;