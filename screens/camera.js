import { StyleSheet, View, StatusBar,Text, Image} from 'react-native';
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import React, { useState , useEffect } from 'react';

import { defcolors } from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import CameraButton from "../assets/styles/cameraButton";

const cameraScreen = () => {
    const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [type, setType] = React.useState(Camera.Constants.Type.back);
    const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off);
    const cameraRef = React.useRef(null);
  
    useEffect(() => {
      (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
      })();
    }, []);


    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    const savePicture = async () => {
        if(image){
            try{
                await MediaLibrary.createAssetAsync(image);
                alert('Image saved to Home screen');
                setImage(null);
            }
            catch(error){
                console.log(error);
            }
        }
    };


    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={defcolors.midnightGray} />

            {/* begining of top section */}
            <View style={{display: 'flex', flexDirection:'row', alignItems: 'center',marginTop:15,marginBottom:15}}>
                <Image source={(require('../assets/images/icons/logo.png'))} style={{width:40, height:40,marginLeft:20}}/>
                <Text style={{color:defcolors.purple,fontSize:30,fontWeight:"bold",paddingLeft:15}}>SnapRead</Text>
            </View>
            {/* end of top section */}

            {! image ?
                <Camera style={styles.Camera} type={type} flashMode={flash} ref={cameraRef}>
                    <View style={{flexDirection:'row', justifyContent:'flex-end',padding:30}}>
                    <CameraButton  
                    icon ={flash === Camera.Constants.FlashMode.off ? "flash-off" : "flash"}
                    onPress={()=>{
                        setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off);
                    }} />
                    </View>
                </Camera>
                :
                <Image source={{uri: image}} style={styles.Camera}/>
            }
            <View>
            {image ? 
                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{marginLeft:30}} >
                        <CameraButton icon="camera-retake" onPress={()=> setImage(null)}/>                
                    </View>
                    <View style={{marginRight:30}} >
                        <CameraButton icon="check" onPress={savePicture}/>
                    </View>
                </View>
                :
                <CameraButton icon="camera" onPress={takePicture}/>
            }
            </View>
        </View>
    );

};


export default cameraScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defcolors.midnightGray,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Camera:{
        width: '100%',
        flex: 1,
    },

});