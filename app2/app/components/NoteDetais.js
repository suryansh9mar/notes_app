import {  Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements';
import colors from '../misc/colors';
import RoundBtn from './RoundBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { contextProvider } from '../../context/NotesProvider';

const createdTime =(time)=>{
    const date = new Date(time);
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yy = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${dd}/${mm}/${yy} - ${hrs}:${min}:${sec}`
}

export default function NoteDetais(note) {
    const {setNotes} = contextProvider();
    const notes = note.route.params.note;
    const headerHeight = useHeaderHeight();
    const [isBtnVisible,setIsBtnVisible]=useState(true);
    const deleteNote =async()=>{
        const result = await AsyncStorage.getItem('notes');
        let data = [];
        if(result!==null) data=JSON.parse(result);
        const newNote= data.filter(n=>n.id !== notes.id);
        setNotes(newNote)
         await AsyncStorage.setItem('notes',JSON.stringify(newNote));
         note.navigation.goBack()


    }
    const displayDeleteAlert = ()=>{
        Alert.alert(
            'Are you sure!',
            'This action will kill this note permanently',
            [
                {   text:'Kill It',
                    onPress:deleteNote,
                },
                {
                    text:'Leave It',
                    onPress:()=>console.log('bach gya saala'),
                },
            ],
            {
                cancelable:true,
                    
            }
        )
    }

    
    
  return (
   
   <>
     
 <View style={[StyleSheet.absoluteFillObject,styles.container]} onTouchEnd={()=>setIsBtnVisible((prev)=>!prev)}>

    <ScrollView   contentContainerStyle={[styles.noteDetails,{paddingTop:headerHeight,}]}>
        <Text style={styles.time}>{` ${createdTime(notes.time)}`}</Text>
      <Text style={styles.tittle}>{notes.tittle}</Text>
      <Text style={styles.desc}>{notes.desc}</Text>
   
    </ScrollView>
     
 </View>
 {isBtnVisible?<View style={styles.btnContainer}>
        <RoundBtn AntIconName='edit' 
        style={{  marginBottom:15,width:60,height:60}}/> 
        <RoundBtn AntIconName='delete' 
        onPress={displayDeleteAlert}
        style={{backgroundColor:colors.ERROR , marginBottom:15,width:60,height:60,}}/> 

    </View>:null}
    
   
   </>
   
  )
}
 const height= Dimensions.get('window').height ;
 const width= Dimensions.get('window').width ;
const styles = StyleSheet.create({
    container:{
       flex:1,
      
        
        
    },
    noteDetails:{
      
        paddingHorizontal:20,


    },
    tittle:{
        color:colors.PRIMARY,
        fontWeight:'bold',
        fontSize:35,

    },
    desc:{
        color:colors.DARK,
        fontSize:20,

    },
    time:{
        textAlign:'right',
        fontSize:15,
        opacity:0.5,
    },
    btnContainer:{
        position:'absolute',
        bottom:height/2-200,
        
        left:width-75,
        height:0,
        width:0,
        
        
       
       

        

        
        
    
    }

})