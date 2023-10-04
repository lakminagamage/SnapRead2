import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { defcolors } from '../colors/colors';

export default function CameraButton({ onPress, icon ,color}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <MaterialCommunityIcons name={icon} size={40} style={{color:defcolors.purple}} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});