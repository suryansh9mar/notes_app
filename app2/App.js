import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo';
import React, { useState } from 'react'
import Intro from './app/screens/Intro'
import NoteScreen from './app/screens/NoteScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NoteDetais from './app/components/NoteDetais';
import NotesProvider from './context/NotesProvider';
import * as MediaLibrary from 'expo-media-library';










 function App() {
  // const [hasPermission, setHasPermission] = useState(null);
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };
  const RenderNoteScreen = (props) => <NoteScreen {...props} user={user} />

  useEffect(() => {
    findUser()
    // AsyncStorage.clear()
  }, [])
  useEffect(() => {
    console.log('User state:', user); // Debugging log
  }, [user]);
 
if (!user.name ) return <Intro onFinish={findUser} />;
  return (
    <>
      <NavigationContainer>
        <NotesProvider>

          <Stack.Navigator screenOptions={{ headerTitle: '', headerTransparent: true, }} >
            <Stack.Screen name='NoteScreen' component={RenderNoteScreen} />
            <Stack.Screen name='NoteDetails' component={NoteDetais} />
          </Stack.Navigator>
        </NotesProvider>
      </NavigationContainer>


    </>
  )
}

export default registerRootComponent (App);