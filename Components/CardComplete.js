import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Modal, FlatList } from 'react-native';

const CardComplete = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    { id: '1', task: 'Tarefa 1' },
    { id: '2', task: 'Tarefa 2' },
    { id: '3', task: 'Tarefa 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.task}</Text>
    </View>
  );

  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.card}>
          <View style={styles.posicao}>
            <Text style={styles.texto}>Tarefas concluídas</Text>
          </View>
        </View>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View  style={styles.modalContainer}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Lista de Tarefas Concluídas</Text>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 380,
    height: 80,
    backgroundColor: '#398adc',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  posicao: {
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    color: '#f5f8ff',
    textAlign: 'center',
    fontWeight: '500',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: '100%'
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  item: {
    backgroundColor: '#e9edf7',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    width: '100%'
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500'
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default CardComplete;
