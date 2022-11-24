import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';

export function TodoForm() {
    const [todos, setTodos] = useState<string[]>([]);
    const [todoName, setTodoName] = useState('');

    function handleTodoAdd() {
        if (todos.includes(todoName)) {
            Alert.alert("ToDo already added");
        }

        setTodos(prevState => [...prevState, todoName]);

        setTodoName('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={'#808080'}
                onChangeText={setTodoName}
                value={todoName}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleTodoAdd}
            >
                <Ionicons name="add-circle-outline" size={20} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
    );
}