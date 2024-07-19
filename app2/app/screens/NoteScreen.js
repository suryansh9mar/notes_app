import { FlatList, Keyboard, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../misc/colors'
import SearchBar from '../components/SearchBar'
import RoundBtn from '../components/RoundBtn'
import NoteInputModal from '../components/NoteInputModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Note from '../components/Note'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { contextProvider } from '../../context/NotesProvider'

export default function NoteScreen({ user, navigation }) {

    const {notes,setNotes} = contextProvider();
    const [modalVisible, setModalVisible] = useState(false);
    const handleOnSubmit = async (tittle, desc) => {
        const note = { id: Date.now(), tittle, desc, time: Date.now() };
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
    };
    const openNote = (note) => {
        navigation.navigate('NoteDetails',{note})
    }


    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.LIGHt} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.NoteScreen} >
                    <Text style={styles.header}>{`Hello ${user.name}`}</Text>
                    {notes.length ? <SearchBar containerStyle={{ marginVertical: 15, }} /> : null}

                    <FlatList
                        data={notes}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Note onPress={() => openNote(item)} item={item} />} />
                    {!notes.length ? <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                        <Text style={styles.emptyHeader}>
                            Add Notes
                        </Text>

                    </View> : null}


            <RoundBtn AntIconName='plus' style={styles.AddBtn} onPress={() => setModalVisible(true)} />
                </View>
            </TouchableWithoutFeedback>

            <NoteInputModal visible={modalVisible} onClose={() => setModalVisible(false)} onSubmit={handleOnSubmit} />
        </>
    )
}

const styles = StyleSheet.create({
    NoteScreen: {
        marginTop: 5,
        paddingHorizontal: 15,
        zIndex: 1,
        flex: 1,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    emptyHeader: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.2,



    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,


    },
    AddBtn: {
        position: 'absolute',
        right: 20,
        bottom: 50,
    }
})