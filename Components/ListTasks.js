import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Switch, TouchableOpacity, Modal, TextInput, Button, Pressable } from 'react-native';
import CardComplete from './CardComplete';
import CardToDo from './CardToDo';

const TaskCard = ({ task, toggleCompleted, onDelete, onEdit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.titulo);
  const [editedContent, setEditedContent] = useState(task.conteudo);

  const onToggleSwitch = () => {
    toggleCompleted(task.id);
  };

  const handleEdit = () => {
    setModalVisible(true);
  };

  const handleSave = () => {
    setModalVisible(false);
    onEdit(task.id, { titulo: editedTitle, conteudo: editedContent });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{task.titulo}</Text> 
      <Text style={styles.cardContent}>{task.conteudo}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={task.completed ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggleSwitch}
        value={task.completed}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonDelete} onPress={() => onDelete(task.id)}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            value={editedTitle}
            onChangeText={setEditedTitle}
            placeholder="Novo título"
          />
          <TextInput
            style={styles.input}
            value={editedContent}
            onChangeText={setEditedContent}
            placeholder="Novo conteúdo"
          />
          <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleSave}
              >
                <Text style={styles.textStyle}>Salvar</Text>
          </Pressable>
          <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://gymsync.onrender.com/task');
        const data = await result.json();
        setTasks(data.tasks);
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };
  
    fetchData();
  }, []);

  const toggleCompleted = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        if (updatedTask.completed) {
          setCompletedTasks([...completedTasks, updatedTask]);
        }
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks.filter(Boolean));
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`https://gymsync.onrender.com/task/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }      });
    } catch (error) {
      console.log('Error ', error);
    }
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = async (taskId, newData) => {
    try {
      await fetch(`https://gymsync.onrender.com/task/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, ...newData };
        }
        return task;
      });

      setTasks(updatedTasks);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            toggleCompleted={toggleCompleted}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <CardToDo tasks={pendingTasks} />
      <CardComplete completedTasks={completedTasks} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9edf7',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    width: 380,
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonDelete:{
    backgroundColor: '#be2929',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
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
  buttonClose: {
    backgroundColor: '#2196F3',
    marginVertical: 5
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
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }
});

export default ListTasks;
