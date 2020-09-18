import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card, Overlay } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LogForm from '../components/LogForm';

const ListScreen = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const fakeData = [
        {
            date: '9/16/2020',
            fever: true,
            cough: false,
            fatigue: false,
            headache: true,
            comments: 'Feeling tired as well'
        },
        {
            date: '9/15/2020',
            fever: false,
            cough: true,
            fatigue: true,
            headache: false,
            comments: 'I ate breakfast late.'
        }
    ];

    const toggleOverlay = (item = null) => {
        setOpen(!open);
        if (item) {
            setData(item);
        }
    };

    return <>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => toggleOverlay()}
        >
            <AntDesign name='pluscircleo' size={40} color='#fd5870'/>
        </TouchableOpacity>
        <View style={styles.listContainer}>
            <FlatList
                data={fakeData}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => toggleOverlay(item)}>
                        <Card>
                            <View style={styles.card}>
                                <Text style={styles.text}>Entry Date: {item.date}</Text>
                                <Feather name='edit-3' size={25} color='#fd5870'/>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.date }
            />
        </View>
        <Overlay isVisible={open} onBackdropPress={toggleOverlay}>
            <LogForm data={data}/>
        </Overlay>
    </>
};

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        marginTop: 20
    },
    listContainer: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        marginVertical: 8,
        width: '90%'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default ListScreen;