import { StyleSheet, View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

import { defcolors } from '../assets/colors/colors'
import { textInputStyles } from '../assets/styles/textInputStyles';
import { buttonStyles } from '../assets/styles/buttons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={defcolors.midnightGray} />
            <Image source={require('../assets/images/icons/lock.png')} />
            <Text style={{ color: defcolors.purple, fontSize: 35, fontWeight: 'bold', marginTop: 20 }}>Forgot Password</Text>
            <Text style={{ color: defcolors.gray, fontSize: 15, marginTop: 10, marginHorizontal: 20, textAlign: 'center', paddingHorizontal: 20 }}>Enter your email address below and we'll send you a link to reset your password.</Text>

            <View style={[textInputStyles.credentialInputContainer,{marginTop:50}]}>
                <Text style={textInputStyles.credentialInputTitle}>Email</Text>
                <TextInput style={textInputStyles.credentialInput} placeholder="Enter your email" placeholderTextColor={defcolors.gray} />

                <TouchableOpacity style={buttonStyles.primaryButton} >
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

