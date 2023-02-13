import React, { Component } from 'react';
import { ECharts } from "react-native-echarts-wrapper";
import { View, Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from "expo"
import { GlobalStyle } from '../../../GlobalStyles/global.style';
import ButtonsControl from '../../../Controls/buttons.control';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ScatterRenderer({ xAxisData, yAxisData, setIsOpen, setIsPlot }) {

    const ScatterData = [];
    for (let index = 0; index < xAxisData.length; index++) {
        const data = [xAxisData[index], yAxisData[index]]
        ScatterData.push(data)
    }
    const option = {
        xAxis: {},
        yAxis: {},
        series: [
            {
                symbolSize: 20,
                data: ScatterData,
                type: 'scatter'
            }
        ]
    };
    return (
        <View style={{ height: 750, width: width }}>
            {<ECharts option={
                option
            } />}
            {
                <ButtonsControl
                    setIsPlot={setIsPlot}
                    setIsOpen={setIsOpen}
                />
            }
        </View>
    );
};
const style = StyleSheet.create({
    buttonRows: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },
    textStyle: {
        marginLeft: 200
    }
})