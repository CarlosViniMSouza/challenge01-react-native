import { useState, useContext } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Context } from '../../context/context';

import Ionicons from '@expo/vector-icons/Ionicons';

export function TodoForm() {
    const { addTodo } = useContext(Context)

    const [todoDescription, setTodoDescription] = useState('')

    function handleAddTodo() {
        addTodo({
            id: 'id' + (new Date()).getTime(),
            description: todoDescription,
            isDone: false
        })

        setTodoDescription('');
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Add a new Todo'
                placeholderTextColor={'#808080'}
                onChangeText={setTodoDescription}
                value={todoDescription}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAddTodo}
            >
                <Ionicons name="add-circle-outline" size={20} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
    );
}