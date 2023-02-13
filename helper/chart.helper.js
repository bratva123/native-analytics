import { Bar } from "../Charts/Bar"
import { CHART } from "../Enumeration/chart.enumeration"
import { AppRegistry } from "react-native"

export const getChartComponent = (chart) => {
    const charts = Object.keys(CHART)
    let ChartComponent;
    switch (chart) {
        case CHART.Bar:
            return Bar
            break;

        default:
            break;
    }
    return ChartComponent
}
AppRegistry.runApplication("Bar", () => Bar)