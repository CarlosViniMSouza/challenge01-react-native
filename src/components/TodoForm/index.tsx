import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

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
                placeholder='Add an new todo'
                placeholderTextColor={'#808080'}
                onChangeText={setTodoName}
                value={todoName}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleTodoAdd}
            >
            </TouchableOpacity>
        </View>
    );
}