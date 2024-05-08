import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import Header from './Header';

const Body = () =>{
  return (
    <View>
        <Header/>
    
    <View style={styles.container}>
        <Card/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
});

export default Body