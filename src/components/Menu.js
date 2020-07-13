import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default Menu = (props) => {
    return (
        <TouchableOpacity onPress={() => props.changePage('HOME', null)}>
            <View style={styles.header} >
                <Image style={styles.logo} source={{ uri: 'http://66.97.41.148:3000/network_images/logo.png' }} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        paddingLeft: 10,
        borderBottomColor: '#d2d2d2',
        borderBottomWidth: 1,
    },
    logo: {
        height: 30, width: 30, resizeMode: 'stretch'
    }
});
