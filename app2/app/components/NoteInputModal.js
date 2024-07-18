import { Modal, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors'
import RoundBtn from './RoundBtn';

export default function NoteInputModal({ visible ,onClose,onSubmit}) {
    const [tittle, setTittle] = useState('');
    const [desc, setDesc] = useState('');
    const handleChnageText = (text, valueFor) => {

        if (valueFor === 'tittle') setTittle(text);
        if (valueFor === 'desc') setDesc(text);

    };
    const modalclose = () => {
        Keyboard.dismiss();
    };
    const handleSubmit=()=>{
        if(!tittle.trim() && !desc.trim()) return onClose();
        onSubmit(tittle,desc);
        setTittle('');
        setDesc('');
        onClose();
        
    }
    const handleClose=()=>{
        onClose();
        setDesc('');
        setTittle('');
    }
    return (<>
         
        <Modal visible={visible} animationType='slide'>
            <View style={styles.container}>

                <TextInput
                    value={tittle}
                    placeholder='Tittle'
                    style={[styles.input, styles.title]}
                    onChangeText={(text) => handleChnageText(text, 'tittle')} />
                <TextInput
                    value={desc}
                    multiline
                    placeholder='Note'
                    onChangeText={(text) => handleChnageText(text, 'desc')}
                    style={[styles.input, styles.desc]} />
                <View style={styles.submitCancelContainer}>

                    <RoundBtn 
                    AntIconName='check' 
                    size={15} 
                    style={styles.submit}
                    onPress={handleSubmit}
                     />
                    {tittle.trim() || desc.trim() ? <RoundBtn AntIconName='close' 
                    size={15} 
                    style={styles.cancel}
                    onPress={handleClose} 
                    
                     />:null}
                </View>
            </View>
            <TouchableWithoutFeedback onPress={modalclose}>
                <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />

            </TouchableWithoutFeedback>
        </Modal>
    </>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: colors.PRIMARY,
        fontSize: 20,
        color: colors.DARK,

    },
    title: {
        height: 40,
        marginBottom: 15,
        fontWeight: 'bold',

    },
    desc: {
        height:100,
    },
    modalBG: {
        flex: 1,
        zIndex: -1,
    },
    submitCancelContainer: {
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:15,
        
        
        

    },
    submit:{
        marginHorizontal:20,
    },
    cancel:{

    },
})