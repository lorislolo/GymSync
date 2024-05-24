import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

const newUser = () => {
  const [txtName, setTxtName] = useState('');
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPhoto, setTxtPhoto] = useState('');
  const navigation = useNavigation();

  const postUser = async () => {
    try {
      const result = await fetch('https://gymsync.onrender.com/user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: txtName, email: txtEmail, photo: txtPhoto })
      });
      const data = await result.json();
      console.log(data);
      if (data?.success) {
        setTxtName('');
        setTxtEmail('');
        setTxtPhoto('');
        Alert.alert('Sucesso', 'Usuário criado com sucesso', [
          { text: 'OK', onPress: () => navigation.navigate('Profile') }
        ]);
      } else {
        Alert.alert('Erro', data.error);
      }
    } catch (error) {
      console.log('Error' + error.message);
      Alert.alert('Erro', error.message);
    }
  };

  const handleSubmit = () => {
    postUser();
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalEmail}>
        <Text style={styles.modalName}>Adicionar Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={setTxtName}
          value={txtName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setTxtEmail}
          value={txtEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Foto URL"
          onChangeText={setTxtPhoto}
          value={txtPhoto}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalEmail: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalName: {
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

export default newUser;
