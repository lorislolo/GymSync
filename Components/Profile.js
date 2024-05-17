import { View, StyleSheet, Text, Image } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.avatar}>
                    <Image source={'https://avatars.githubusercontent.com/u/133153441?v=4'} style={styles.avatarImg} />
                </View>
                <View>
                    <Text style={styles.email}> Lorenaaa </Text>
                    <Text style={styles.email}> Lorenaaa </Text>
                </View>
            </View>
            <View style={styles.cardLogOut}>
                <View style={styles.icon}>
                    <Image style={styles.logOutImg} source={require('../assets/sair.png')} />
                </View>
                <View>
                    <Text style={styles.email}> Sair </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: '1',
        backgroundColor: '#e9edf7',
        alignItems: 'center',
        height: 800
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 380,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 5,
        marginVertical: 10,
        marginHorizontal: 10
    },
    avatar: {
        marginHorizontal: 10
    },
    avatarImg: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    email: {
        color: '#8c2641'
    },
    cardLogOut: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 380,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 5,
        marginVertical: 10,
        marginHorizontal: 10
    },
    logOutImg:{
        width: 30,
        height: 30,
    },
    icon:{
        marginHorizontal: 10
    }
})
export default Profile
