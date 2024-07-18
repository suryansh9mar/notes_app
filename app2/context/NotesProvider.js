import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const noteContext = createContext();
export default function NotesProvider({children}) {
    const [notes, setNotes] = useState([]);

    const findNotes = async () => {
        const result = await AsyncStorage.getItem('notes')
        if (result != null) setNotes(JSON.parse(result));
        console.log(JSON.parse(result));

    };
    useEffect(() => {
        findNotes()
    }, []);

  return (
    <noteContext.Provider value={{notes,setNotes,findNotes}}>
      {children}
    </noteContext.Provider>
  )
}

export const contextProvider = ()=>useContext(noteContext);