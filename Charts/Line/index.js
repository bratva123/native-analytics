import React, { useState } from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import LineRenderer from "./BasicLine/line.renderer";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Line({ xAxisData, yAxisData, isOpen, setIsOpen, setIsPlot }) {

    return (
        <View>
            <LineRenderer
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