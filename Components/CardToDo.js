import {View, StyleSheet, Text, Pressable} from 'react-native'

const CardToDo = () => {
  return (
    <View style={styles.card}>
      <View style={styles.posicao}>
        <Text style={styles.texto}>Tarefas pendentes</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  card: {
    width: 380,
    height:80,
    backgroundColor: '#398adc',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    fontWeight: 500
  }
});

export default CardToDo;