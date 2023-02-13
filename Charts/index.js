import React, { useState } from "react"
import { View } from "react-native"
import ChartData from "./chart.data"
export default function ChartRenderer({ Chart, isOpen, setIsOpen }) {
    const [xAxisData, setXAxisData] = useState([])
    const [yAxisData, setYAxisData] = useState([])
    const [xAxisConfiguartion, setXAxisConfiguration] = useState({})
    const [yAxisConfiguartion, setYAxisConfiguration] = useState({})
    const [isPlot, setIsPlot] = useState(false)
    // const ChartComponent = getChartComponent(Chart)
    return (
        <View style={{ width: "100%", left: 0 }}>
            {isPlot && <Chart
                isOpen={isOpen}
                setIsOpen={(val) => { setIsOpen(val) }}
                xAxisData={xAxisData}
                yAxisData={yAxisData}
                setIsPlot={(val) => setIsPlot(val)}
                isPlot={isPlot}
            />}
            {!isPlot && <ChartData
                xAxisData={xAxisData}
                setXAxisData={(value) => { setXAxisData(value) }}
                yAxisData={yAxisData}
                setYAxisData={(value) => { setYAxisData(value) }}
                setIsPlot={(val) => setIsPlot(val)}
            />}
        </View>
    )
}