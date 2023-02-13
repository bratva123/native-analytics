import React, { useState } from "react"
import { StyleSheet, View, Dimensions, Alert, AppRegistry } from "react-native"
import BarRenderer from "./BarWithBackGround/bar.renderer"
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Bar({ isOpen, setIsOpen, xAxisData, yAxisData, setIsPlot }) {

    return (
        <View>
            <BarRenderer
                xAxisData={xAxisData}
                yAxisData={yAxisData}
                isOpen={isOpen}
                setIsOpen={(val) => { setIsOpen(val) }}
                setIsPlot={(val) => { setIsPlot(val) }}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    Datacontainer: {
        alignItems: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
        left: 0

    },
})