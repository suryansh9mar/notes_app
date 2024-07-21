import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors'
import {AntDesign} from '@expo/vector-icons'

export default function SearchBar({containerStyle,value,changeText,clearText}) {
  return (
    <View  style={styles.container}>
    <TextInput 
    placeholder='search here..'
    value={value}
    onChangeText={changeText}
    style={[styles.searchbar,{...containerStyle}]}/>
    {value?<AntDesign size={20} color={colors.PRIMARY} name='close' onPress={clearText} style={styles.closeIcon}/>:null}
    
    </View>
  )
}

const styles = StyleSheet.create({
    searchbar:{
        borderWidth:1,
        borderColor:colors.PRIMARY,
        height:40,
        borderRadius:40,
        fontSize:25,
        paddingLeft:15,
       
        


    },
    closeIcon:{
      position:'absolute',
      right:10,
    },
    container:{
      justifyContent:'center',
    }
   

})