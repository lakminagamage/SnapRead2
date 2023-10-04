import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { defcolors } from '../assets/colors/colors'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [recentFiles, setRecentFiles] = useState(
        [
            {
                "key":1,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key":2,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key":3,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
            {
                "key":4,
                "fileName": "SnapRead 23-07-2023 Doc1",
                "date": '23-07-2023 17:12',
                "image": require('../assets/images/icons/Book.jpg')
            },
        ]
    )
    const [selectedText,setSelectedText]=useState(-1)
    const recentFileCardView= (recentFile) => {
        // {
        //     key:1,
        //     fileName:'SnapRead 23-07-2023 Doc1',
        //     date:'23-07-2023 17:12',
        //     image:require('../assets/images/icons/Book.jpg')
        // }
        return (
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                    onPress={() => navigation.navigate('SummerizedPage')}
                >
                    <Image source={recentFile.image} style={[styles.imageContent, styles.Border, { width: 80, height: 80, }]} />
                    <View style={{ display: 'flex', flexDirection: 'coloumn', alignItems: 'left', justifyContent: 'space-between', paddingBottom: '5%' }}>

                        <Text style={[styles.textContent, { color: defcolors.white, fontSize: 23, fontWeight: 'bold' }]}>{recentFile.fileName}</Text>
                        <Text style={[styles.textContent, { color: defcolors.gray, fontSize: 20, fontWeight: 'bold' }]}>created {recentFile.date}</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={defcolors.midnightGray} />


            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 30, paddingBottom: 20 }}>
                <Image source={require('../assets/images/icons/logo.png')} style={{ width: 35, height: 35, }} />
                <Text style={{ color: defcolors.purple, fontSize: 40, fontWeight: 'bold', paddingLeft: '5%' }}>SnapRead</Text>

            </View>

            {/*Recent files section*/}
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                <Text style={{ color: defcolors.purple, fontSize: 35, fontWeight: 'bold', paddingTop: "10%", paddingBottom: "10%" }}>Recent files</Text>
                <Image source={require('../assets/images/icons/delete.png')} style={{ width: 20, height: 20, marginLeft: '20%', }} />
                <View style={{ display: 'flex', flexDirection: 'coloumn', alignItems: 'center', justifyContent: 'space-between', paddingTop: "3%" }}>
                    <Image source={require('../assets/images/icons/All.png')} style={{ width: 20, height: 20, paddingLeft: '1%' }} />
                    <Text style={{ color: defcolors.purple, fontSize: 8, }}>All</Text>
                </View>
            </View>
            <ScrollView style={{ height: '50%',flex: 1, marginTop: 20 }}>
                    {recentFiles.map(recentFileCardView)}
                    </ScrollView>

            {/*End of the recent files section*/}



            {/*Button section*/}

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                <View style={[styles.buttonSection, { marginLeft: 20 }]}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../assets/images/icons/vector.png')} style={{ width: 15, height: 20, }} />
                        <Text style={{ color: defcolors.gray, fontSize: 20, paddingLeft: '5%' }}>Import a file</Text>
                    </View>

                </View>

                <View style={[styles.buttonSection, { marginRight: 20 }]}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../assets/images/icons/camera.png')} style={{ width: 20, height: 20, }} />
                        <Text style={{ color: defcolors.gray, fontSize: 20, paddingLeft: '5%' }}>Camera</Text>
                    </View>

                </View>



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
        padding: '3.0%',
    },


    textContent: {
        textAlign: 'left',
        marginRight: "5%",


    },
    Border: {
        borderColor: defcolors.purple,
        borderWidth: 2,

    },


    imageContent: {
        paddingTop: '5%',
        marginBottom: '5%',
        marginTop: '4%',
        marginLeft: '3%',
        marginEnd: 15,

    },

    buttonSection: {
        borderColor: defcolors.purple,
        borderRadius: 25,
        marginTop: 90,
        padding: 10,
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