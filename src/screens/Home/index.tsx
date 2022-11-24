import { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Todo } from '../../components/Todo';

import { styles } from './styles';

export default function Home() {
    const [todos, setTodos] = useState<string[]>([]);

    function handleTodoAdd(name: string) { }

    function handleTodoDelete(name: string) { }

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
                />

                <TouchableOpacity style={styles.button}>
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
            />
        </View>
    );
}
