import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Todo(
    { name, onRemove }: Props
) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity
                style={styles.trashArea}
                onPress={onRemove}
            >
            </TouchableOpacity>
        </View>
    )
}