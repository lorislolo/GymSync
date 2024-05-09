import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarImg} source={require('../assets/icon.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Nome</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#3b70f9',
        width: '100%',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    avatar: {
        marginRight: 10,
        marginTop:45,
    },
    avatarImg: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        marginRight: 5,
        color: 'white'
    }
});

export default Header;
