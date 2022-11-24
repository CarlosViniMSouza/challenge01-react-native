import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    name: string;
    toggleCheckBox: boolean
    onChecked: () => void;
    onRemove: () => void;
}

export function Todo(
    { name, toggleCheckBox, onChecked, onRemove }: Props
) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={
                    toggleCheckBox ? styles.checked : styles.notChecked
                }
                onPress={onChecked}
            >
                {
                    toggleCheckBox ?
                        <Ionicons name="checkmark-sharp" size={16} color="#F2F2F2" /> :
                        null
                }
            </TouchableOpacity>

            <Text style={toggleCheckBox ? styles.nameWhenChecked : styles.name}>
                {name}
            </Text>

            <TouchableOpacity
                style={styles.trashArea}
                onPress={onRemove}
            >
                <Ionicons name="trash-outline" size={24} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}