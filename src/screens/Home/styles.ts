import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    header: {
        color: "#FDFCFE",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 24,
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42
    },
    buttonInput: {
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 7
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1E6F9F",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    listEmptyComponent: {
        color: "#FFF",
        fontSize: 16,
        textAlign: "center"
    }
})