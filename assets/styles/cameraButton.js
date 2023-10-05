import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { defcolors } from '../colors/colors';

export default function CameraButton({ onPress, icon ,color}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <MaterialCommunityIcons name={icon} size={30} style={{color:defcolors.white}} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});