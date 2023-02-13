import { ScrollView } from "react-native";
import CustomPicker from "../Controls/picker.control";
import React from "react";
import CustomColorPicker from "../Controls/colorpicker.control";
import { Left, Top } from "../Constants/positions.constat";
import { Legend } from "../Model/legend.model";
import { Icon, Orient, Show, Type } from "../Constants/type.constant";

interface ITitleSetting {
    Legend: LegendNew,
    setValue: any,
}
interface LegendNew extends Legend {
    isExpanded: boolean
}
interface ITitleSettingState {
    currentLegend: LegendNew
}
export default class LegendSetting extends React.Component<ITitleSetting, ITitleSettingState> {
    constructor(props) {
        super(props)
        this.state = {
            currentLegend: props.Legend
        }
    }

    componentDidUpdate(prevProps: Readonly<ITitleSetting>, prevState: Readonly<ITitleSettingState>, snapshot?: any): void {
        if (this.state.currentLegend != this.props.Legend) {
            this.props.setValue(this.state.currentLegend)
        }
    }
    componentWillUnmount(): void {
        this.props.setValue(this.state.currentLegend)
    }
    setCurrentLegend(key, value) {
        const obj = { ...this.state.currentLegend }
        obj[key] = value
        this.setState({
            currentLegend: obj
        })
    }
    render() {
        const { Legend, setValue } = this.props
        const { currentLegend } = this.state
        return (
            <ScrollView>
                <CustomPicker Label={"Type"} Value={currentLegend.type} setValue={(value) => { this.setCurrentLegend("type", value) }} PickerItem={Type} />
                <CustomPicker Label={"Show"} Value={currentLegend.show} setValue={(value) => { this.setCurrentLegend("show", value) }} PickerItem={Show} />
                <CustomPicker Label={"Left"} Value={currentLegend.left} setValue={(value) => { this.setCurrentLegend("left", value) }} PickerItem={Left} />
                <CustomPicker Label={"Top"} Value={currentLegend.top} setValue={(value) => { this.setCurrentLegend("top", value) }} PickerItem={Top} />
                <CustomPicker Label={"Icon"} Value={currentLegend.icon} setValue={(value) => { this.setCurrentLegend("icon", value) }} PickerItem={Icon} />
                <CustomPicker Label={"Orient"} Value={currentLegend.orient} setValue={(value) => { this.setCurrentLegend("orient", value) }} PickerItem={Orient} />
                <CustomColorPicker
                    Label={"Background Color"}
                    Value={currentLegend.backgroundColor}
                    setValue={(value) => {
                        this.setCurrentLegend("backgroundColor", value)
                    }}
                />
                <CustomColorPicker
                    Label={"Border Color"}
                    Value={currentLegend.borderColor}
                    setValue={(value) => {
                        this.setCurrentLegend("borderColor", value)
                    }}
                />

            </ScrollView>
        )
    }
}