import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Bar from '../../Charts/Bar';
import { GlobalStyle } from '../../GlobalStyles/global.style';
import Line from '../../Charts/Line';
import Pie from '../../Charts/Pie';
import Scatter from '../../Charts/Scatter';
const deviceWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const screen = Dimensions.get('screen');

const SidePanel = ({ Chart, setChart, setIsOpen }) => {
    const ChartCategory = [
        { Text: "Line", Value: "Line", Component: Line },
        { Text: "Bar", Value: "Bar", Component: Bar },
        { Text: "Pie", Value: "Pie", Component: Pie },
        { Text: "Scatter", Value: "Scatter", Component: Scatter },
        // { Text: "Geo Map", Value: "GeoMap" },
        // { Text: "Candle Stick", Value: "CandleStick" },
        // { Text: "Radar", Value: "Radar" },
        // { Text: "Box Plot", Value: "BoxPlot" },
        // { Text: "Heat Map", Value: "HeatMap" },
        // { Text: "Graph", Value: "Graph" },
        // { Text: "Lines", Value: "Lines" },
        // { Text: "Tree", Value: "Tree" },
        // { Text: "Tree Map", Value: "Tree Map" },
        // { Text: "Sun Burst", Value: "SunBurst" },
        // { Text: "Parlel", Value: "Parlel" },
        // { Text: "Sankey", Value: "Sankey" },
        // { Text: "Funnel", Value: "Funnel" },
        // { Text: "Gauge", Value: "Gauge" },
        // { Text: "Callender", Value: "Callender" },
        // { Text: "Data Zoom", Value: "DataZoom" }
    ]
    return (
        <View style={styles.sidePanel} >

            <View style={styles.content}>
                <Text style={{ fontSize: 25, color: "white" }}>Select Chart</Text>
                <ScrollView style={{ height: "90%" }}>

                    {ChartCategory.map((category) => {
                        return (
                            <TouchableOpacity onPress={() => { setChart(() => category.Component) }} key={category.Value}>
                                <Text style={category === Chart ? [GlobalStyle.textStyle, { fontWeight: "bold" }] : GlobalStyle.textStyle} key={category.Value} Value={category.Value}>{category.Text}</Text>
                            </TouchableOpacity>
                        )
                    })
                    }
                </ScrollView>
            </View>
            <TouchableOpacity style={[GlobalStyle.buttonDanger, styles.button]} onPress={() => { setIsOpen(false) }}>
                <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>Close</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    sidePanel: {
        backgroundColor: '#6196b4',
        position: 'absolute',
        padding: 20,
        left: 0,
        top: 10,
        elevation: 2,
        height: "100%",
        width: "100%"
    },
    textStyle: {
        fontSize: 20,
        borderWidth: 1,
        margin: 5,
        textAlign: 'center',
        left: 0
    },
    closePannel: {
        bottom: 0,
        marginBottom: 0,
        marginTop: 13
    },
    content: {
        top: "2%",
        padding: 10,
        margin: 5
    },
    button: {
        position: 'absolute',
        borderWidth: 2,
        width: 220,
        borderRadius: 10,
        backgroundColor: "red",
        bottom: 5,

    }
});

export default SidePanel;
