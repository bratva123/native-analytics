import { StyleSheet } from "react-native"
export const GlobalStyle = StyleSheet.create({
    buttonSucess: {
        position: 'absolute',
        borderWidth: 2,
        width: 100,
        borderRadius: 10,
        backgroundColor: "green",
    },
    buttonDanger: {
        position: 'absolute',
        borderWidth: 2,
        width: 100,
        borderRadius: 10,
        backgroundColor: "red"
    },
    text: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        width: "100%"

    },
    textStyle: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        textAlign: 'center',
        left: 0,
        color: "white",
        borderColor: "white"
    },
    buttonRows: {
        flexDirection: "row",
    },
    buttonContainer: {
        margin: 10,
        width: 220,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "green",
        bottom: 0
    },

})
export const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        left: 0,
        width: "100%",
        height: "90%",
        textAlign: 'left',

    },
    modalBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: "100%"
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width: '80%',
        alignItems: 'flex-end',
        height: "89%",
        borderRadius: 20

    },

    closeButton: {
        position: 'absolute',
        right: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    textInput: {
        height: 40,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        left: 10
    },
    picker: {
        width: '100%',
        height: "100%",
    },
    PickerItem: {
        height: "50%",
    },
    PickerBorder: {
        width: "100%",
        borderWidth: 1,
        margin: 5,
        height: 40,
        borderRadius: 10,
    }
});