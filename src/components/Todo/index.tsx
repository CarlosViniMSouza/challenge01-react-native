import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';

type todoProps = {
    title: string,
    toggleCheckBox: boolean,
    onChecked: () => void,
    onRemove: () => void,
}

export function Todo(
    { title, toggleCheckBox, onChecked, onRemove }: todoProps) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={toggleCheckBox ? styles.checked : styles.notChecked}
                onPress={onChecked}
            >
                {toggleCheckBox ? <Ionicons name="checkmark-sharp" size={16} color="#F2F2F2" /> : null}
            </TouchableOpacity>

            <Text
                style={toggleCheckBox ? styles.titleWhenChecked : styles.title}
            >
                {title}
            </Text>


            <TouchableOpacity
                style={styles.garbage}
                onPress={onRemove}
            >
                <Ionicons name="trash-outline" size={24} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}