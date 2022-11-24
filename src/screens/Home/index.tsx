import { useState } from 'react';

import { Alert, View } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { TodoForm } from '../../components/TodoForm';

export default function Home() {
    /*
    function handleTodoDelete(name: string) {
        setTodos(prevState => prevState.filter(
            todos => todos !== name
        ))
    }
    */

    return (
        <View style={styles.container}>
            <Header />

            <TodoForm />
        </View>
    );
}
