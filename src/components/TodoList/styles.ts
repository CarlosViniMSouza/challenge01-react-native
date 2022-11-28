import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 24,
        flex: 1
    },
    progress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    textGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    created: {
        fontFamily: 'Inter_700Bold',
        color: '#4EA8DE',
        fontSize: 14,
    },
    finished: {
        fontFamily: 'Inter_700Bold',
        color: '#8284FA',
        fontSize: 14,
    },
    quantity: {
        color: '#D9D9D9',
        backgroundColor: '#333333',
        fontSize: 12,
        paddingHorizontal: 8,
        paddingVertical: 1,
        height: 19,
        width: 25,
        borderRadius: 10,
        textAlign: 'center',
        marginLeft: 8
    },
    emptyList: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 48,
        borderColor: '#333333',
        borderTopWidth: 1,
    },
    emptyListFirstText: {
        fontFamily: 'Inter_700Bold',
        color: '#808080'
    },
    emptyListSecondText: {
        fontFamily: 'Inter_400Regular',
        color: '#808080'
    }
});