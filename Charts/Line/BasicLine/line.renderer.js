import React, { Component } from 'react';
import { ECharts } from "react-native-echarts-wrapper";
import { View, Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from "expo"
import { GlobalStyle } from '../../../GlobalStyles/global.style';
import ButtonsControl from '../../../Controls/buttons.control';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function LineRenderer({ xAxisData, yAxisData, setIsOpen, setIsPlot }) {
    const option = {
        xAxis: {
            type: 'category',
            data: xAxisData
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: yAxisData,
                type: 'line'
            }
        ]
    };
    const Buttons = [
        { Text: "Update Data", onPress: () => setIsPlot(false) },
        { Text: "Select Chart", onPress: () => setIsOpen(true) },

    ]
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