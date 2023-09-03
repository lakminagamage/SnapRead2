import { Text,View,StyleSheet, StatusBar,Image,TextInput, TouchableOpacity } from "react-native";
import React from "react";

import { defcolors } from "../assets/colors/colors";
import { textInputStyles } from "../assets/styles/textInputStyles";
import { buttonStyles } from "../assets/styles/buttons";
import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
    const navigation = useNavigation();
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    
    const [email, setEmail] = useState("");
    
    const auth=getAuth();
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // Navigate to the next screen or perform any necessary actions
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle the authentication error here
                // ...
            });
    };

    
    

    return(
        <View style={styles.container2}>
            <StatusBar backgroundColor={defcolors.midnightGray}/>
            <Text style={{color:defcolors.purple,fontSize : 35, fontWeight: 'bold' ,paddingTop: 40}}>Log In</Text>

            <View style={[textInputStyles.credentialInputContainerForFullPage,{marginTop:40}]}>
                <Text style={textInputStyles.credentialInputTitle}>Email</Text>  
                <TextInput  onChangeText={text => setEmail(text)} style={textInputStyles.credentialInput} placeholder="Enter your Email" placeholderTextColor={defcolors.gray} /> 
                <Text style={[textInputStyles.credentialInputTitle,{marginTop:15}]}>Password</Text>  
                <TextInput secureTextEntry={true} onChangeText={text => setPassword(text)} style={textInputStyles.credentialInput}  placeholder="Enter your Password" placeholderTextColor={defcolors.gray} />  

                <TouchableOpacity 
                onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={{ color: defcolors.gray, fontSize: 15, marginTop: 20, textAlign: 'center'}}>Forgot your password?</Text>
                </TouchableOpacity>

                <Text style={textInputStyles.credentialInputTitle}></Text>
                <TouchableOpacity  style={buttonStyles.primaryButton}
                
                onPress={() => navigation.navigate('handleLogin')}
                >
                    <Text style={{color:defcolors.white, fontSize:17,fontWeight:'bold'}}>Log In</Text>
                </TouchableOpacity>
           
            </View>
            
            <View style={{justifyContent:'center',display:'flex',flexDirection:'row',marginTop:25}}>
            <Text style={{ color: defcolors.gray, fontSize: 15}}>Don't have an account? </Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={{color:defcolors.gray, fontSize:16,fontWeight:'bold',paddingRight:30}}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ color: defcolors.gray, fontSize: 15, marginTop: 150, textAlign: 'center', paddingRight:30 }}>Log In with one of the following options</Text>
            <View style={{justifyContent:'center',display:'flex',flexDirection:'row',marginTop:30,paddingRight:30}}>
                <TouchableOpacity >
                    <Image source={require('../assets/images/icons/google.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
                <Text style={{paddingLeft:20,paddingRight:20}}></Text>
                <TouchableOpacity >
                    <Image source={require('../assets/images/icons/f.png')} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container2 : {
        flex: 1,
        backgroundColor: defcolors.midnightGray,
        display:'flex',
        flexDirection: 'column',
        paddingLeft: 30, 
    },
});