import { useState } from 'react';

import {
    Alert,
    FlatList,
    Text, TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { Todo } from '../../components/Todo';
import { styles } from './styles';

export default function Home() {
    const [todos, setTodos] = useState<string[]>([]);

    const [todoName, setTodoName] = useState('');

    function handleTodoAdd() {
        if (todos.includes(todoName)) {
            Alert.alert("ToDo already added");
        }

        setTodos(prevState => [...prevState, todoName]);

        setTodoName('');
    }

    function handleTodoDelete(name: string) {
        setTodos(prevState => prevState.filter(
            todos => todos !== name
        )
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Logo
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.buttonInput}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    keyboardType="email-address"
                    onChangeText={setTodoName}
                    value={todoName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => handleTodoAdd()
                    }>
                    <Text style={styles.buttonText}>
                        (+)
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={todos}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Todo
                        key={item}
                        name={item}
                        onRemove={
                            () => handleTodoDelete(item)
                        }
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyComponent}>
                        You still don't have tasks registered!
                    </Text>
                )}
            />
        </View>
    );
}
