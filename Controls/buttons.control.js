import React from "react"
import { TouchableOpacity, Text, View, StyleSheet, Alert } from "react-native"
import { GlobalStyle } from "../GlobalStyles/global.style"
export default function ButtonsControl({ setIsOpen, setIsPlot }) {
    return (
        <View style={style.container}>

            <TouchableOpacity style={[style.buttonContainer]} onPress={() => setIsPlot(false)}>
                <Text style={GlobalStyle.textStyle}>Update Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.buttonContainer]} onPress={() => setIsOpen(true)}>
                <Text style={GlobalStyle.textStyle}>Select Chart</Text>
            </TouchableOpacity>


        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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