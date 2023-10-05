import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import { defcolors } from '../assets/colors/colors'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as DocumentPicker from 'expo-document-picker';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [recentFiles, setRecentFiles] = useState(
        [
            // {
            //     "key": 1,
            //     "fileName": "SnapRead 23-07-2023 Doc1",
            //     "date": '23-07-2023 17:12',
            //     uri: '',
            //     selected: false
            // },
        ]
    )

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
            copyToCacheDirectory: true,
            multiple: false
        });
        console.log('opening');
        if (result.type == 'cancel') {

            console.log('cancel');
        } else {
            console.log(result);

            if(result.assets[0].mimeType != 'application/pdf'){
                alert('File type not supported. Please open a PDF file')
                return
            }

            for(let file of recentFiles){
                if(file.uri == result.assets[0].uri || file.fileName == result.assets[0].name){
                    alert('File already exists')
                    return
                }
            }

            let savingJSON = {
                key: 1,
                fileName: result.assets[0].name,
                date: new Date().toLocaleString(),
                uri: result.assets[0].uri,
                selected: false
            }

            let temp = [...recentFiles]
            for (let file of temp) {
                file.key += 1
            }
            temp.unshift(savingJSON)
            // Remove last element of the array if it exceeds 15 count
            if (temp.length > 15) {
                temp.pop()
            }
            setRecentFiles([...temp])
            saveRecentFiles([...temp])
        }
    };


    const [currentMode, setCurrentMode] = useState(false) // false -> Normal mode, true -> Selection mode
    const [allSelected, setAllSelected] = useState(false) // false -> All not selected, true -> All selected



    const getSelectedCount = () => {
        let selectedCount = 0;
        for (let file of recentFiles) {
            if (file.selected) {
                selectedCount++;
            }
        }
        console.log(selectedCount);
        return selectedCount;
    }

    const deleteRecentFile = () => {
        if(currentMode){
            let temp = [...recentFiles]
            for (let file of temp) {
                if (file.selected) {
                    temp.splice(file.key - 1, 1)
                }
            }

            for(let i = 0; i < temp.length; i++){
                temp[i].key = i + 1;
            }
    
            setRecentFiles([...temp])
            setCurrentMode(false)
            setAllSelected(false)
            saveRecentFiles([...temp])
        }
    }

    useEffect(() => {
        //saveRecentFiles([]);
        getRecentFiles().then((savedRecentFiles) => {
            if (!(savedRecentFiles.length == 0 || savedRecentFiles == null)) {
                console.log(savedRecentFiles);
                setRecentFiles(savedRecentFiles)
            } else {
                setRecentFiles([]);
                console.log('empty');
            }


        });
    }, [])

    const recentFileCardView = (recentFile) => {
        // {
        //     key:1,
        //     fileName:'SnapRead 23-07-2023 Doc1',
        //     date:'23-07-2023 17:12',
        //     image:require('../assets/images/icons/Book.jpg')
        // }
        return (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', paddingVertical: 5, paddingHorizontal:20, backgroundColor: recentFile.selected ? defcolors.lightGray : 'transparent' }}
                onPress={() => {
                    console.log('pressed')
                    if (!currentMode) {
                        navigation.navigate('SummerizedPage')
                    } else {
                        let temp = [...recentFiles]
                        temp[recentFile.key - 1].selected = !temp[recentFile.key - 1].selected
                        setRecentFiles([...temp])

                        if (getSelectedCount() == 0) {
                            setCurrentMode(false)
                        }
                    }

                }}
                onLongPress={() => {
                    if (!currentMode) {
                        setCurrentMode(true)
                        let temp = [...recentFiles]
                        temp[recentFile.key - 1].selected = true
                        setRecentFiles([...temp])
                    }
                }}
                key={recentFile.key}>
                <Image source={require('../assets/images/icons/Book.jpg')} style={[styles.imageContent, styles.Border, { width: 80, height: 80, }]} />
                <View style={{ display: 'flex', flexDirection: 'coloumn' }}>

                    <Text numberOfLines={2} style={[styles.textContent, { color: defcolors.white, fontSize: 20, fontWeight: 'bold' }]}>{recentFile.fileName}</Text>
                    <Text style={[styles.textContent, { color: defcolors.gray, fontSize: 16, marginTop: 2 }]}>created {recentFile.date}</Text>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={defcolors.midnightGray} />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 15, marginHorizontal: 20 }}>
                <Image source={require('../assets/images/icons/logo.png')} style={{ width: 25, height: 25, }} />
                <Text style={{ color: defcolors.purple, fontSize: 25, fontWeight: 'bold', marginLeft: 10 }}>SnapRead</Text>

            </View>

            {/*Recent files section*/}
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 20 }}>
                <Text style={{ color: defcolors.gray, fontSize: 22, fontWeight: 'bold' }}>Recent files</Text>
                {currentMode ? (
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => deleteRecentFile()}
                            >
                            <Image source={require('../assets/images/icons/delete.png')} style={{ width: 20, height: 20, marginHorizontal: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'coloumn', alignItems: 'center', marginTop: 10 }}
                            onPress={() => {
                                if (allSelected) {
                                    let temp = [...recentFiles]
                                    for (let file of temp) {
                                        file.selected = false
                                    }
                                    setRecentFiles([...temp])
                                    setAllSelected(false)
                                    setCurrentMode(false)
                                } else {
                                    let temp = [...recentFiles]
                                    for (let file of temp) {
                                        file.selected = true

                                    }
                                    setRecentFiles([...temp])
                                    setAllSelected(true)
                                }

                            }}>
                            <Image source={!allSelected ? require('../assets/images/icons/All.png') : require('../assets/images/icons/selected.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ color: defcolors.gray, fontSize: 10, marginTop: 3 }}>All</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}

            </View>
            <ScrollView style={{ height: '50%', flex: 1, marginTop: 10 }}>
                {recentFiles.map(recentFileCardView)}
            </ScrollView>

            {/*End of the recent files section*/}



            {/*Button section*/}

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingTop: 20 }}>

                <TouchableOpacity style={[styles.buttonSection]}
                    onPress={() => pickDocument()}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/icons/vector.png')} style={{ width: 12, height: 15, }} />
                        <Text style={{ color: defcolors.gray, fontSize: 18, marginLeft: 10 }}>Import a file</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonSection]}
                    onPress={() => navigation.navigate('Camera')}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/icons/camera.png')} style={{ width: 15, height: 15, }} />
                        <Text style={{ color: defcolors.gray, fontSize: 18, marginLeft: 10 }}>Camera</Text>
                    </View>

                </TouchableOpacity>



            </View>

            {/*End of the button section*/}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defcolors.midnightGray,
        display: 'flex',
        flexDirection: 'column',
    },


    textContent: {
        textAlign: 'left',
        width:200
        
    },

    Border: {
        borderColor: defcolors.purple,
        borderWidth: 1,

    },


    imageContent: {
        marginEnd: 15
    },

    buttonSection: {
        borderColor: defcolors.purple,
        borderRadius: 25,
        padding: 10,
        marginHorizontal: 10,
        width: 150,
        height: 45,
        borderWidth: 1,
        alignItems: 'center',
    },
    icon: {

    },
    selectedFile: {
        backgroundColor: 'rgba(148,97,255,0.32)',
        borderColor: defcolors.purple,
        borderWidth: 2,
        justifyContent: 'space-between',
        borderRadius: 20,



    },
})

const getRecentFiles = async () => {
    try {
        const files = await AsyncStorage.getItem('recentFiles');
        return files ? JSON.parse(files) : [];
    } catch (error) {
        console.error('Error retrieving URIs:', error);
        return [];
    }
}

const saveRecentFiles = async (uris) => {
    try {
        await AsyncStorage.setItem('recentFiles', JSON.stringify(uris));
    } catch (error) {
        console.error('Error saving URIs:', error);
    }
}