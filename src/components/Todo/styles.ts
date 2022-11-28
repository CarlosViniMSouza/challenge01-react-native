import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 64,
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#262626',
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
    },
    checked: {
        marginRight: 8,
        width: 24,
        height: 24,
        backgroundColor: '#5E60CE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notChecked: {
        marginRight: 8,
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        borderRadius: 20,
    },
    title: {
        width: '80%',
        color: '#F2F2F2',
        fontFamily: 'Inter_400Regular',
        textAlign: 'center'
    },
    titleWhenChecked: {
        width: '80%',
        color: '#808080',
        fontFamily: 'Inter_400Regular',
        textAlign: 'center',
        textDecorationLine: 'line-through',
        textDecorationColor: '#808080',
    },
    garbage: {
        marginLeft: 8,
    }
});