import React, { useState } from "react";
import { Pressable, View, StyleSheet, Image, Modal, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";


const Button = () => {
  const [txtTitulo, setTxtTitulo] = useState('')
  const [txtConteudo, setTxtConteudo] = useState('')


  const postTask = async () =>{
      try{
        const result = await fetch('https://gymsync.onrender.com/task', {
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({titulo: txtTitulo, conteudo: txtConteudo})
        })
        const data = await result.json()
        console.log(data)
        if(data?.success){
          navigation.goBack()
        } else {
          alert(data.error)
        }
      } catch (error){
        console.log('Error' + error.message)
        alert(error.message)
      }
    } 


  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log("Título:", title);
    console.log("Conteúdo:", content);

    setModalVisible(false);
  };

  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)}>
          <View style={styles.customButton}>
              <Image source={require('../assets/botao-adicionar.png')} />
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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Nota</Text>

            <TextInput
              style={styles.input}
              placeholder="Título"
              // onChangeText={(text) => setTitle(text)}
              onChangeText={setTxtTitulo}
              value={txtTitulo}
            />
            <TextInput
              style={[styles.input, {height: 100}]}
              placeholder="Conteúdo"
              multiline
              // onChangeText={(text) => setContent(text)}
              onChangeText={setTxtConteudo}
              value={txtConteudo}
            />
            <TouchableOpacity onPress={() => { handleSubmit(); postTask(); }} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Adicionar</Text>
            </TouchableOpacity>
            <Pressable
              style={styles.submitButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.submitButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 28,
    width: 80,
    height: 80,
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#e9edf7',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 2
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Button;
