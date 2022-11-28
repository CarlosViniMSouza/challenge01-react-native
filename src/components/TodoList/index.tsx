import { View, Text, FlatList, Image } from 'react-native';
import { useContext } from 'react';

import { styles } from './styles';
import { Todo } from '../Todo';

import { Context, todoData } from '../../context/context';

export function TodoList() {
    const emptyListImage = require('../../assets/empty-list-icon-3x.png');

    const { todos, checkTodo, removeTodo } = useContext(Context);

    function handleCheckBox(todo: todoData) {
        checkTodo(todo);
    }

    function handleTodoRemove(todo: todoData) {
        removeTodo(todo);
    }

    return (
        <View style={styles.container}>
            <View style={styles.progress}>
                <View style={styles.textGroup}>
                    <Text style={styles.created}>
                        Created Todos
                    </Text>
                    <Text style={styles.quantity}>
                        {todos.length}
                    </Text>
                </View>
                <View>
                    <Text style={styles.finished}>
                        Doned Todos
                    </Text>
                    <Text style={styles.quantity}>
                        {
                            todos.filter(
                                todo => todo.isDone === true
                            ).length
                        }
                    </Text>
                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Todo
                        key={item.id}
                        title={item.description}
                        onChecked={() => handleCheckBox(item)}
                        toggleCheckBox={item.isDone}
                        onRemove={() => handleTodoRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Image
                            style={{ marginBottom: 16, width: 56, height: 56 }}
                            source={emptyListImage}
                        />
                        <Text
                            style={styles.emptyListFirstText}
                        >
                            You don't have tasks registered yet
                        </Text>
                        <Text
                            style={styles.emptyListSecondText}
                        >
                            Create todos and organize your items for do!
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}