import { StyleSheet, View, Text , StatusBar, Image, TextInput, TouchableOpacity } from "react-native";
import React from 'react';

import { defcolors } from '../assets/colors/colors'
import { textInputStyles } from '../assets/styles/textInputStyles';
import { buttonStyles } from '../assets/styles/buttons';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container1}>
            <StatusBar backgroundColor={defcolors.midnightGray} />
            <Text style={{color:defcolors.purple,fontSize : 35, fontWeight: 'bold' ,paddingTop: 40}}>Sign Up</Text>

            <View style={[textInputStyles.credentialInputContainerForFullPage,{marginTop:30}]}>
                <Text style={textInputStyles.credentialInputTitle}>Name</Text>  
                <TextInput style={textInputStyles.credentialInput} placeholder="Enter your Name" placeholderTextColor={defcolors.gray} />
                <Text style={textInputStyles.credentialInputTitle}>Email</Text>
                <TextInput style={textInputStyles.credentialInput} placeholder="Enter your Email" placeholderTextColor={defcolors.gray} />
                <Text style={textInputStyles.credentialInputTitle}>Password</Text>
                <TextInput style={textInputStyles.credentialInput} placeholder="Enter your Password" placeholderTextColor={defcolors.gray} />
                <Text style={textInputStyles.credentialInputTitle}>Confirm Password</Text>
                <TextInput style={textInputStyles.credentialInput} placeholder="Enter your Password" placeholderTextColor={defcolors.gray} />

                <Text style={textInputStyles.credentialInputTitle}></Text>
                <TouchableOpacity style={buttonStyles.primaryButton}>
                    <Text style={{color:defcolors.white, fontSize:17,fontWeight:'bold'}}>Create Account</Text>
                </TouchableOpacity>
            </View>

            <View style={{justifyContent:'center',display:'flex',flexDirection:'row',marginTop:25}}>           
            <Text style={{ color: defcolors.gray, fontSize: 15}}>Already have an account? </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{color:defcolors.gray, fontSize:16,fontWeight:'bold',paddingRight:30}}>Log In</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ color: defcolors.gray, fontSize: 15, marginTop: 35, textAlign: 'center', paddingRight:30 }}>Sign up with one of the following options</Text>
            <View style={{justifyContent:'center',display:'flex',flexDirection:'row',marginTop:30,paddingRight:30}}>
                <TouchableOpacity >
                    <Image source={require('../assets/images/icons/google.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
                <Text style={{paddingLeft:30,paddingRight:30}}></Text>
                <TouchableOpacity >
                    <Image source={require('../assets/images/icons/f.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
                  
        </View>
    );
}


export default SignupScreen;

const styles = StyleSheet.create({
    container1 : {
        flex: 1,
        backgroundColor: defcolors.midnightGray,
        display:'flex',
        flexDirection: 'column',
        paddingLeft: 30, 
    },
});