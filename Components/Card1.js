import { View, StyleSheet, Text } from 'react-native'
import Button from './Button'

const Card1 = () => {
    return (
        <View style={styles.card}>
            <View style={styles.posicao}>
                <Button title={'Próximo treino'} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        width: 380,
        height: 160,
        backgroundColor: '#fff',
        borderRadius: 18,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 15,
        shadowColor: '#000', 
        shadowOpacity: 0.2, 
        shadowRadius: 5, 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
    },

})
export default Card1
