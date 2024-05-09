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
        width: 380,
        height: 260,
        backgroundColor: '#3b70f9',
        borderRadius: 18,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 38,
        shadowColor: '#000',
    shadowOpacity: 0.2, 
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5, 
    },
    texto: {
        fontSize: 20,
        color: '#f5f8ff',
        textAlign: 'center',
        marginBottom: 10
    }
})
export default Card
