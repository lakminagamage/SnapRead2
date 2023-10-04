import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import { defcolors } from '../assets/colors/colors'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [recentFiles, setRecentFiles] = useState(
        [
            {
                "key": 1,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 2,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 3,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 4,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 5,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 6,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 7,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 8,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key": 9,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
        ]
    )
    const [selectedText, setSelectedText] = useState(-1)
    const recentFileCardView = (recentFile) => {
        // {
        //     key:1,
        //     fileName:'SnapRead 23-07-2023 Doc1',
        //     date:'23-07-2023 17:12',
        //     image:require('../assets/images/icons/Book.jpg')
        // }
        return (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal:20, paddingVertical:5 }}
                onPress={() => navigation.navigate('SummerizedPage')}
            >
                <Image source={recentFile.image} style={[styles.imageContent, styles.Border, { width: 80, height: 80, }]} />
                <View style={{ display: 'flex', flexDirection: 'coloumn', alignItems: 'left' }}>

                    <Text style={[styles.textContent, { color: defcolors.white, fontSize: 20, fontWeight: 'bold' }]}>{recentFile.fileName}</Text>
                    <Text style={[styles.textContent, { color: defcolors.gray, fontSize: 16, marginTop: 5 }]}>created {recentFile.date}</Text>

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
                <Text style={{ color: defcolors.gray, fontSize: 25, fontWeight: 'bold' }}>Recent files</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/images/icons/delete.png')} style={{ width: 20, height: 20, marginHorizontal: 20 }} />
                    <View style={{ display: 'flex', flexDirection: 'coloumn', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../assets/images/icons/All.png')} style={{ width: 20, height: 20 }} />
                        <Text style={{ color: defcolors.gray, fontSize: 10, marginTop: 3 }}>All</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{ height: '50%', flex: 1, marginTop: 10 }}>
                {recentFiles.map(recentFileCardView)}
            </ScrollView>

            {/*End of the recent files section*/}



            {/*Button section*/}

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical:15, paddingTop:20 }}>

                <TouchableOpacity style={[styles.buttonSection]}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/icons/vector.png')} style={{ width: 12, height: 15, }} />
                        <Text style={{ color: defcolors.gray, fontSize: 18, marginLeft:10 }}>Import a file</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonSection]}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/icons/camera.png')} style={{ width: 15, height: 15, }} />
                        <Text style={{ color: defcolors.gray, fontSize: 18, marginLeft:10 }}>Camera</Text>
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
        marginRight: "5%",


    },
    Border: {
        borderColor: defcolors.purple,
        borderWidth: 1,

    },


    imageContent: {
        marginEnd:15
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