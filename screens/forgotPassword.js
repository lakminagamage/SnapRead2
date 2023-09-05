import { StyleSheet, View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { defcolors } from '../assets/colors/colors'
import { textInputStyles } from '../assets/styles/textInputStyles';
import { buttonStyles } from '../assets/styles/buttons';
import { useNavigation } from '@react-navigation/native';

import { getAuth,sendPasswordResetEmail } from '@firebase/auth';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email,setEmail]=useState('');
    const authentication=getAuth();


    const handleForgotPassword =()=>{
        sendPasswordResetEmail(authentication,email)
        .then((email) =>{
            alert('Password reset link is sent to your email');
        })
    }
    const validateForgotPassword =()=>{
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert('Entered email is invalid!');
        }
        else{
            handleForgotPassword();
        }
    }
     

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={defcolors.midnightGray} />
            <Image source={require('../assets/images/icons/lock.png')} />
            <Text style={{ color: defcolors.purple, fontSize: 35, fontWeight: 'bold', marginTop: 20 }}>Forgot Password</Text>
            <Text style={{ color: defcolors.gray, fontSize: 15, marginTop: 10, marginHorizontal: 20, textAlign: 'center', paddingHorizontal: 20 }}>Enter your email address below and we'll send you a link to reset your password.</Text>

            <View style={[textInputStyles.credentialInputContainer,{marginTop:50}]}>
                <Text style={textInputStyles.credentialInputTitle}>Email</Text>
                <TextInput value={email} style={textInputStyles.credentialInput} placeholder="Enter your email" placeholderTextColor={defcolors.gray} onChangeText={(text) => setEmail(text)} />

                <TouchableOpacity onPress={validateForgotPassword} style={buttonStyles.primaryButton} >
                    <Text style={{color:defcolors.white, fontSize:17,fontWeight:'500'}}>Reset Your Password</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}>
                    <Text style={{color:defcolors.gray, fontSize:17, textAlign:'center', marginTop:15}}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defcolors.midnightGray,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    sampleClass:{
        
    }

});

