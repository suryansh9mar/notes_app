import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NothingFound() {
  return (
    <View style={styles.container}>
      <Text>NothingFound</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    zIndex:-1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    fontSize:30,

   }
})