import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Switch } from 'react-native';

const TaskCard = ({ task, toggleCompleted }) => {
  // Verifica os dados da tarefa
  console.log('Task:', task);

  // Função para lidar com a alteração do interruptor
  const onToggleSwitch = () => {
    toggleCompleted(task.id);
  };

  // Verifica se há uma tarefa válida
  if (!task) {
    return null; // Retorna nulo se não houver tarefa
  }

  // Renderiza o componente do card da tarefa
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
    </View>
  );
};



const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const result = await fetch('https://gymsync.onrender.com/task');
      const data = await result.json();
      console.log('Data from server:', data); // Adicionado para verificar os dados recebidos do servidor
      setTasks(data);
    } catch (error) {
      console.log('Error fetching tasks:', error); // Adicionado para verificar erros de obtenção de dados
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://gymsync.onrender.com/task');
        const data = await result.json();
        console.log('Data from server:', data); // Verifica os dados recebidos do servidor
        setTasks(data.tasks); // Ajuste para definir corretamente as tarefas no estado
      } catch (error) {
        console.log('Error fetching tasks:', error); // Verifica erros de obtenção de dados
      }
    };
  
    fetchData();
  }, []);
  

  const toggleCompleted = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  console.log('Tasks:', tasks); // Adicionado para verificar o estado das tarefas

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            toggleCompleted={toggleCompleted}
          />
        )}
        keyExtractor={item => item.id}
      />
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
});

export default ListTasks;
