import { styles } from './styles';

import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Todo({ name, onRemove }: Props) {
    const garbage = require('../../assets/empty-list-icon.png');

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={onRemove}
            >
                <Image
                    source={garbage}
                />
            </TouchableOpacity>
        </View>
    )
}