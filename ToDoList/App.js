import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Do nothing' },
    { id: 2, title: 'Go to walk' },
    { id: 3, title: 'Read a book' },
  ]);

  const handleAddTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoForm onAddTask={handleAddTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
