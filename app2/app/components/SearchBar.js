import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors'

export default function SearchBar({containerStyle}) {
  return (
    <View >
    <TextInput 
    placeholder='search here..'
    style={[styles.searchbar,{...containerStyle}]}/>
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
   

})