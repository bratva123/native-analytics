import React, { useState } from "react"
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyle } from "../GlobalStyles/global.style";

export default function ChartData({ xAxisData, setXAxisData, yAxisData, setYAxisData, setIsPlot }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => { setXAxisData(text.split(",")) }}
                value={xAxisData.join(",")}
                placeholder="Enter comma separated X-Axis data"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => { setYAxisData(text.split(",")) }}
                value={yAxisData.join(",")}
                placeholder="Enter comma separated Y-Axis data"
            />
            <View style={styles.buttonRows}>
                <TouchableOpacity style={[GlobalStyle.buttonSucess, styles.button]} onPress={() => { setIsPlot(true) }}>
                    <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>Plot Data</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    button: {
        width: 200,
        left: -100
    }
});





