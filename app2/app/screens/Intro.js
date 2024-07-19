import { Dimensions, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import colors from '../misc/colors';
import RoundBtn from '../components/RoundBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Intro({ onFinish }) {
  const [user, setUser] = useState('');
  const changeText = (text) => setUser(text);

  const handleSubmit = async () => {
    const name = { name: user };
    await AsyncStorage.setItem('user', JSON.stringify(name));
    if (onFinish) onFinish();
  };

  return (
    <>
      <StatusBar hidden />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.inputTitle}>Enter Your Name To Continue</Text>
          <TextInput
            value={user}
            placeholder="Your Name"
            onChangeText={changeText}
            style={styles.inputbox}
            autoFocus={true}
          />
          {user.trim().length >= 3 ? (
            <TouchableOpacity onPress={handleSubmit} style={styles.roundButtonContainer}>
              <RoundBtn AntIconName="arrowright" />
            </TouchableOpacity>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputbox: {
    borderColor: colors.ERROR,
    borderWidth: 2,
    width,
    borderRadius: 6,
    fontSize: 20,
    paddingLeft: 15,
    height: 50,
    color: colors.ERROR,
    marginBottom: 19,
  },
  inputTitle: {
    marginBottom: 5,
    fontWeight: '800',
    fontSize: 20,
  },
  roundButtonContainer: {
    marginTop: 20,
  },
});
