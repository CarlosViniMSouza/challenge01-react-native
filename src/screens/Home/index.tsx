import { View } from 'react-native';
import { styles } from './styles';

import { Header } from '../../components/Header';
import { TodoList } from '../../components/TodoList';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <TodoList />
        </View>
    );
}
