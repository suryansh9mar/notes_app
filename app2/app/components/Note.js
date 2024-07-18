import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors';

export default function Note({item,onPress}) {
    
    const {tittle,desc}= item;
    
  return (
    <TouchableOpacity onPress={onPress}  style={styles.container}>
      <Text style={styles.tittle} numberOfLines={2}>{tittle}</Text>
      <Text style={styles.desc} numberOfLines={3}>{desc}</Text>
    </TouchableOpacity>
  )
}
const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.PRIMARY,
    width : width / 2 -10,
    padding:10,
    borderRadius:10,
    marginBottom:20,


  },
  tittle:{
    fontWeight:'bold',
    fontSize:17,
    color:colors.LIGHt,
  },
  desc:{},
})