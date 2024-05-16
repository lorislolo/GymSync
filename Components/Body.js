import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import CardComplete from './CardComplete';
import CardToDo from './CardToDo';

const Body = () =>{
  return (
    <View style={styles.container}>
        <Card/>
        <CardComplete/>
        <CardToDo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#e9edf7',
    alignItems: 'center',
    height: 800
  },
});

export default Body
