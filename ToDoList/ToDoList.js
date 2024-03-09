import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <ScrollView>
            {tasks.map((task) => (
                <Pressable key={task.id}>
                    <View style={styles.task}>
                        <Text style={styles.taskText}>{task.title}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView> 
    );
};

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;
