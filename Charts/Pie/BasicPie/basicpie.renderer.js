import React, { useMemo, useRef, useState } from 'react';
import { ECharts } from "react-native-echarts-wrapper";
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import ButtonsControl from '../../../Controls/buttons.control';
import PieSetting from '../pie.setting';
import { GlobalStyle } from '../../../GlobalStyles/global.style';
import { Title } from '../../../Model/title.model';
import PieSeries from '../../../Model/pieseries.model';
import { Tooltip } from '../../../Model/tooltip.model';
import { Legend } from '../../../Model/legend.model';
const width = Dimensions.get('window').width;

export default function PieRenderer({ xAxisData, yAxisData, setIsOpen, setIsPlot }) {
    const title = new Title()
    const toolTip = new Tooltip()
    const series = new PieSeries(
        {
            name: '',
            radius: '50%',
            //center: [seriesConfig.centerX + '%', seriesConfig.centerY + '%'],
            data: [
                { name: "Cat", value: 2 },
                { name: "Dog", value: 8 },
                { name: "Horse", value: 3 },
                { name: "Lion", value: 10 },
            ]
        }
    )
    const legend = new Legend()
    const [modalVisible, setModalVisible] = useState(false);
    const [titleConfig, setTitleConfig] = useState(title);
    const [toolTipConfig, setToolTipConfig] = useState(toolTip);
    const [legendConfig, setLegendCofig] = useState(legend);
    const [seriesConfig, setSeriesConfig] = useState(series)
    const pieRef = useRef();
    const option = useMemo(() => {
        let opt = {
            title: titleConfig,
            tooltip: toolTipConfig,
            legend: legendConfig,
            series: [seriesConfig]
        };
        if (pieRef?.current) {
            pieRef?.current.setOption(opt)
        }
        return opt
    }, [titleConfig, toolTipConfig, legendConfig, seriesConfig])
    const PieData = [];
    for (let index = 0; index < xAxisData.length; index++) {
        const data = { name: xAxisData[index], value: yAxisData[index] };
        PieData.push(data)
    }
    return (
        <View style={{ height: 800, width: width }}>
            <PieSetting
                modalVisible={modalVisible}
                setModalVisible={(val) => { setModalVisible(val) }}
                titleConfig={titleConfig}
                toolTipConfig={toolTipConfig}
                legendConfig={legendConfig}
                seriesConfig={seriesConfig}
                setTitleConfig={(obj) => { setTitleConfig(obj) }}
                setToolTipConfig={(obj) => { setToolTipConfig(obj) }}
                setLegendCofig={(obj) => { setLegendCofig(obj) }}
                setSeriesConfig={(obj) => { setSeriesConfig(obj) }}

            />
            {<ECharts ref={pieRef} option={option} />}
            {
                <ButtonsControl
                    setIsPlot={setIsPlot}
                    setIsOpen={setIsOpen}
                />

            }
            <TouchableOpacity style={[GlobalStyle.buttonContainer, style.button]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={GlobalStyle.textStyle}>Configure Pie</Text>
            </TouchableOpacity>
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
    },
    button: {
        left: 97
    },
})