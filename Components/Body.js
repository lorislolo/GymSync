import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import Card1 from './Card1';
import Header from './Header';

const Body = () =>{
  return (
    <View style={styles.container}>
      <Header/>
        <Card/>
        <Card1/>
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
