import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const RoundBtn = ({ AntIconName, size, color,style ,onPress}) => {
    return <AntDesign
     name={AntIconName}
      size={size || 25} 
      color={color || colors.LIGHt}
      style={[styles.icon ,{...style}]}
      onPress={onPress}
     />
}

const styles = StyleSheet.create({
    icon:{
        backgroundColor:colors.PRIMARY,
        padding:15,
        borderRadius:100,
        fontWeight:'bold',
        
        elevation:5,
        fontSize:30,

    }
})
export default RoundBtn;