import {View, StyleSheet, Text} from 'react-native'
import Button from './Button'


const Card = () => {
  
  return (
    <View style={styles.card}>
      <View style={styles.posicao}>
        <Text style={styles.texto}>Adicione uma nota</Text>
      </View>

      <View>
      <Button title={'Adicionar uma nota'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 380,
    height:100,
    backgroundColor: '#3b70f9',
    borderRadius: 18,
    justifyContent: 'center',
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
  texto: {
    fontSize: 18,
    color: '#f5f8ff',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 500
  }
});

export default Card