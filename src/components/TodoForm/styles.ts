import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        top: -31,
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        height: 54,
        padding: 16,
        marginRight: 4,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: '#F2F2F2',
    },
    button: {
        backgroundColor: '#1E6F9F',
        height: 52,
        width: 52,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    }
});