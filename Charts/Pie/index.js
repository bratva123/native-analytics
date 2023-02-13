import React, { useState } from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import PieRenderer from "./BasicPie/basicpie.renderer";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Pie({ xAxisData, yAxisData, isOpen, setIsOpen, setIsPlot }) {

    return (
        <View>
            <PieRenderer
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