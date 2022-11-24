import { View, Text } from 'react-native';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Todo({ name, onRemove }: Props) {
    return (
        <View>
            <Text>
                {name}
            </Text>
        </View>
    )
}