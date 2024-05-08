import {View, StyleSheet, Text} from 'react-native'

const Card = () => {
  return (
   <View style={styles.card}>
        <View style={styles.posicao}>
            <Text style={styles.texto}>Seja bem-vindo!</Text>
        </View>
   </View>
  )
}


const styles = StyleSheet.create({
    card: {
        width: 400,
        height: 270,
        backgroundColor: '#3b70f9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontSize: 20,
        color: '#f5f8ff',
        textAlign: 'center'
    }
})
export default Card
