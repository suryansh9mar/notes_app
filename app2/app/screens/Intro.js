import { Dimensions, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors';
import RoundBtn from '../components/RoundBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Intro({onFinish}) {
    const[user,setUser]=useState('');
    const changeText=(text)=>setUser(text);
    const handleSubmit =async()=>{
      const name ={name: user};
      await AsyncStorage.setItem('user',JSON.stringify(name));
      if(onFinish) onFinish();
      
    }
    
    
    
  
    return (
      <>
      <StatusBar hidden/>
        <View style={styles.container}>
          <Text style={styles.inputTitle}>Enter Your Name To Continue</Text>
          <TextInput 
          value={user}
          placeholder='Your Name'
          onChangeText={changeText}
          style={styles.inputbox}/>
        {user.trim().length >= 3? <RoundBtn AntIconName='arrowright' onPress={handleSubmit} />:null}
        </View>
        
        
      </>
    )
  }
  const width = Dimensions.get('window').width - 50
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    inputbox:{
      borderColor:colors.ERROR,
      borderWidth:2,
      width,
      borderRadius:6,
      fontSize:20,
      paddingLeft:15,
      height:50,
      color:colors.ERROR,
      marginBottom:19,
  
    },
    inputTitle:{
      marginBottom:5,
      fontWeight:'800',
      fontSize:20,
      
  
    }
  })