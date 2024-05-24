import React, { useEffect, useState } from 'react';
import { Pressable, View, Text, Image, StyleSheet, FlatList, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhoto, setEditedPhoto] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://gymsync.onrender.com/user');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        console.log('Data received:', data); 
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`https://gymsync.onrender.com/user/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editedName,
          email: editedEmail,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to save user');
      }
      const updatedUsers = users.map(user => {
        if (user.id === selectedUser.id) {
          return {
            ...user,
            name: editedName,
            email: editedEmail,
          };
        }
        return user;
      });
      setUsers(updatedUsers);
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://gymsync.onrender.com/user/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Image source={{ uri: item.photo }} style={styles.userAvatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonEdit} onPress={() => handleEdit(item)}>
          <Text style={styles.buttonText}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.deleteButton]} onPress={() => handleDelete(item.id)}>
          <Text style={[styles.buttonText, styles.deleteButtonText]}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Usuários</Text>
      <FlatList
        style={styles.flatList}
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <Pressable style={styles.footer} onPress={() => navigation.navigate('newUser')}>
            <Image style={styles.footerIcon} source={require('../assets/login-de-usuario.png')} />
            <Text style={styles.footerText}>Adicionar Novo Usuário</Text>
          </Pressable>
        }
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Editar Usuário</Text>
            <TextInput
              style={styles.input}
              value={editedName}
              onChangeText={setEditedName}
              placeholder="Nome"
            />
            <TextInput
              style={styles.input}
              value={editedEmail}
              onChangeText={setEditedEmail}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              value={editedPhoto}
              onChangeText={setEditedPhoto}
              placeholder="Foto"
            />
            <Button title="Salvar" onPress={handleSave} />
            <Pressable style={[styles.button, styles.closeButton]} onPress={closeModal}>
              <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9edf7',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 100, 
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#be2929',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
  flatList: {
    flex: 1, 
    width: '100%', 
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#007bff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#ccc',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonEdit: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default Profile;
