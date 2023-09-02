import { StyleSheet, View, Text, StatusBar, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import {React, useState} from 'react';

import { defcolors } from '../assets/colors/colors';
import { textInputStyles } from '../assets/styles/textInputStyles';
import { buttonStyles } from '../assets/styles/buttons';
import { BottomSheet } from 'react-native-btr';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const SummerizedPageScreen = () => {
    const navigation = useNavigation();
    const [sheetVisible, setSheetVisible] = useState(false);
    const [summerizedText,setSummerizedText]=useState('briefly summerized doc');
    const [selectedButton,setSelectedButton]=useState(0);
    const toggleBottomNavigationView = () => { 
        setSheetVisible(!sheetVisible);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={defcolors.midnightGray} />

            {/* begining of top section */}
            <View style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                <Image source={(require('../assets/images/icons/logo.png'))} style={{width:30, height:30,marginRight:20}}/>
                <Text style={styles.appName}>SnapRead</Text>
            </View>
            {/* end of top section */}

            {/* beging of topic section */}
            <View style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent:'space-between', paddingTop:'10%' }}>
                <Text style={[styles.appName, { fontSize: 15}]}>Summarized Document</Text>
                <Image source={(require('../assets/images/icons/volume.png'))} style={{width:30, height:20}} onClick={()=>setSheetVisible(true)}/>
            </View>
            {/* end of topic section */}

            {/* begining of content section */}
            <SafeAreaView style={{flex:1,marginTop:20}}>
                <ScrollView style={{height:'50%'}}>
                    <Text style={styles.content}>
                    {summerizedText}
                    </Text>
                </ScrollView>
            </SafeAreaView>
            {/* end of content section */}

            {/* begining of button option section */}
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-evenly'}}> 
                <TouchableOpacity
                style={[styles.optionBtns,(selectedButton==0)? styles.selectedBtn:null]}
                onPress={() => {
                setSummerizedText("briefly summerized doc");
                setSelectedButton(0);
                }}>
                <Text style={styles.optionBtnsText}>Briefly</Text></TouchableOpacity>
                <TouchableOpacity
                style={[styles.optionBtns,(selectedButton==1)? styles.selectedBtn:null]}
                onPress={() => {
                setSummerizedText("moderately summerized doc");
                setSelectedButton(1);
                }}>
                <Text style={styles.optionBtnsText}>Moderately</Text></TouchableOpacity>
                <TouchableOpacity
                style={[styles.optionBtns,(selectedButton==2)? styles.selectedBtn:null]}
                onPress={() => {
                setSummerizedText("Lengthily summerized doc");
                setSelectedButton(2);
                }}>
                <Text style={styles.optionBtnsText}>Lengthily</Text></TouchableOpacity>
            </View>
            {/* end of button option section */}

            {/* begining of bottom section */}
            <View style={{alignItems: 'center', justifyContent:'center', marginTop:20}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Image source={(require('../assets/images/icons/Home.png'))} style={{width:18, height:18}}/></TouchableOpacity>
            </View>
            {/* end of bottom section */}
            <BottomSheet
                    visible={sheetVisible}
                    //setting the visibility state of the bottom shee
                    onBackButtonPress={toggleBottomNavigationView}
                    //Toggling the visibility state on the click of the back botton
                    onBackdropPress={toggleBottomNavigationView}
                //Toggling the visibility state on the clicking out side of the sheet
                >
                    {/*Bottom Sheet inner View*/}
                    <View style={styles.bottomNavigationView}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                alignItems:'center'
                            }}>
                                <View style={styles.bottomSheetLine}></View>
                                <Image source={(require('../assets/images/icons/volumeUpWhite.png'))} style={{width:30, height:20,marginVertical:'100%'}}/>
                                
                        </View>
                    </View>
                </BottomSheet>
        </View>
    )
}

export default SummerizedPageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defcolors.midnightGray,
        display: 'flex',
        flexDirection: 'column',
        padding: '7.0%',
    },
    appName: {
        color: defcolors.purple,
        fontSize: 30,
        fontWeight: 'bold',

    },
    content:{
        color:defcolors.white,
        marginRight:8,
        paddingTop: 20,
        textAlign:'justify',
        lineHeight:25,
    },
    optionBtns:{
        borderWidth:1,
        borderColor: defcolors.purple,
        borderRadius:20,
        marginTop:20,
        padding:10,
        width:80,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    selectedBtn:{
        borderColor: defcolors.white,
    },
    optionBtnsText:{
        color: defcolors.gray,
        fontSize:10,
    },
    bottomNavigationView: {
        backgroundColor: defcolors.purple,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    bottomSheetLine:{
        height:4,
        width:80,
        marginTop:14,
        borderRadius:10,
        backgroundColor:defcolors.gray
    }
})
