import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Switch } from 'react-native';

const TaskCard = ({ task, toggleCompleted }) => {
  const onToggleSwitch = () => {
    toggleCompleted(task.id);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{task.title}</Text>
      <Text>{task.content}</Text>
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
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Tarefa 1', content: 'Conteúdo da tarefa 1', completed: false },
    { id: '2', title: 'Tarefa 2', content: 'Conteúdo da tarefa 2', completed: false },
    { id: '3', title: 'Tarefa 3', content: 'Conteúdo da tarefa 3', completed: true },
  ]);

  const toggleCompleted = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(prevTasks => {
      const taskIndex = prevTasks.findIndex(task => task.id === taskId);
      const updatedTask = updatedTasks.find(task => task.id === taskId);
      const tasksCopy = [...prevTasks];
      tasksCopy.splice(taskIndex, 1);
      tasksCopy.unshift(updatedTask);
      return tasksCopy;
    });
  };

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
});

export default ListTasks;
