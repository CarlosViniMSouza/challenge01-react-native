import { createContext, useState } from "react";
import { Alert } from 'react-native'

export interface todoData {
    id: string,
    description: string,
    isDone: boolean,
}

interface ContextData {
    addTodo: (todoTask: todoData) => void,
    removeTodo: (todoTask: todoData) => void,
    checkTodo: (todoTask: todoData) => void,
    todos: todoData[],
}


export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: any) {
    const [todos, setTodos] = useState<todoData[]>([])

    function checkTodo(todoTask: todoData) {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === todoTask.id) {
                return {
                    id: todo.id,
                    description: todo.description,
                    isDone: !todo.isDone
                }
            } else {
                return todo;
            }
        }));
    }

    function addTodo(todoTask: todoData) {
        if (todoTask.description === '') {
            return Alert.alert('Empty Field!');
        }

        if (todos.find(
            todo => todo.description === todoTask.description)) {
            return Alert.alert('This todo already exists!');
        }

        setTodos(prevTodos => [...prevTodos, todoTask]);
    }

    function removeTodo(todoTask: todoData) {
        Alert.alert("Remove", 'Does you want delete this ToDo?', [
            {
                text: 'Yes',
                onPress: () => setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoTask.id))
            },
            {
                text: 'No',
                style: 'cancel',
            }
        ]);
    }

    return (
        <Context.Provider
            value={{ addTodo, checkTodo, removeTodo, todos }}
        >
            {children}
        </Context.Provider>
    )
}
