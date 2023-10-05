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
    const[password,setPassword] = useState('123456');
    
    const [email, setEmail] = useState("test@gmail.com");
    
    const auth=getAuth();
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.email);
                navigation.replace('Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode==="auth/user-not-found"){
                    alert("User not found,Please check your email.");
                }
                else if(errorCode==="auth/wrong-password"){
                    alert("Wrong credentials");
                }
                else if(errorCode==="auth/missing-password"){
                    alert("Please enter a password");
                }
                else if(errorCode==="auth/user-disabled"){
                    alert("User disabled.contact customer support");
                }
                else if(errorCode==="auth/network-request-failed"){
                    alert("Please check your internet connection");
                }
                else {
                    alert(error.message);
                }
                
            });
    };

    const validateLogin =() =>{
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert('Entered email is invalid!');
        }
        else if(password==""){
            alert('Please enter password');
        }
        else{
            handleLogin();
        }
    }

    
    

    return(
        <View style={styles.container2}>
            <StatusBar backgroundColor={defcolors.midnightGray}/>
            <Text style={{color:defcolors.purple,fontSize : 35, fontWeight: 'bold' ,paddingTop: 40}}>Log In</Text>

            <View style={[textInputStyles.credentialInputContainerForFullPage,{marginTop:40}]}>
                <Text style={textInputStyles.credentialInputTitle}>Email</Text>  
                <TextInput  value={email} onChangeText={text => setEmail(text)} style={textInputStyles.credentialInput} placeholder="Enter your Email" placeholderTextColor={defcolors.gray} /> 
                <Text style={[textInputStyles.credentialInputTitle,{marginTop:15}]}>Password</Text>  
                <TextInput value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} style={textInputStyles.credentialInput}  placeholder="Enter your Password" placeholderTextColor={defcolors.gray} />  

                <TouchableOpacity 
                onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={{ color: defcolors.gray, fontSize: 15, marginTop: 20, textAlign: 'center'}}>Forgot your password?</Text>
                </TouchableOpacity>

                <Text style={textInputStyles.credentialInputTitle}></Text>
                <TouchableOpacity  style={buttonStyles.primaryButton}
                
                onPress={validateLogin}
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