import React, { useState } from 'react';
import { styles } from './styles';
import { Todo } from '../Todo';

import {
    Alert,
    FlatList,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

export function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);

    const [participantName, setParticipantName] = useState('');

    const imgAdd = require('../../assets/add.png');

    function handleTodoAdd() {
        if (todos.includes(participantName)) {
            return Alert.alert('Participant Already Added!');
        }

        setTodos(prevState => [...prevState, participantName]);

        setParticipantName('');
    }

    function handleTodoRemove(name: string) {
        setTodos(prevState => prevState.filter(
            todo => todo !== name
        ));
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.buttonInput}
                    placeholder="Participant Name"
                    placeholderTextColor="#6B6B6B"
                    keyboardType="email-address"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => handleTodoAdd()
                    }>
                    <Image
                        source={imgAdd}
                    />
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
                            () => handleTodoRemove(item)
                        }
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyComponent}>
                        No todos in the list!
                    </Text>
                )}
            />
        </View>
    );
}