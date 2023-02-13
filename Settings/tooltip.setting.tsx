import { ScrollView } from "react-native";
import CustomPicker from "../Controls/picker.control";
import React from "react";
import CustomColorPicker from "../Controls/colorpicker.control";
import { Show } from "../Constants/type.constant";
import { Tooltip } from "../Model/tooltip.model";
import CustomTextBox from "../Controls/textbox.control";

interface IToolTipSetting {
    ToolTip: ToolTipNew,
    setValue: any,
}
interface ToolTipNew extends Tooltip {
    isExpanded: boolean
}
interface IToolTipSettingState {
    currentToolTip: ToolTipNew
}
export default class TooltipSetting extends React.Component<IToolTipSetting, IToolTipSettingState> {
    constructor(props) {
        super(props)
        this.state = {
            currentToolTip: props.ToolTip
        }
    }

    componentDidUpdate(prevProps: Readonly<IToolTipSetting>, prevState: Readonly<IToolTipSettingState>, snapshot?: any): void {
        if (this.state.currentToolTip != this.props.ToolTip) {
            this.props.setValue(this.state.currentToolTip)
        }
    }
    componentWillUnmount(): void {
        this.props.setValue(this.state.currentToolTip)
    }
    setCurrent(key, value) {
        const obj = { ...this.state.currentToolTip }
        obj[key] = value
        this.setState({
            currentToolTip: obj
        })
    }
    render() {
        const { ToolTip, setValue } = this.props
        const { currentToolTip } = this.state
        return (
            <ScrollView>
                <CustomPicker Label={"Show"} Value={currentToolTip.show} setValue={(value) => { this.setCurrent("show", value) }} PickerItem={Show} />
                <CustomPicker Label={"Show Content"} Value={currentToolTip.showContent} setValue={(value) => { this.setCurrent("showContent", value) }} PickerItem={Show} />
                <CustomPicker
                    Label={"Render Mode"}
                    Value={currentToolTip.renderMode}
                    setValue={(value) => { this.setCurrent("renderMode", value) }}
                    PickerItem={[
                        { Name: "html", Value: "html" },
                        { Name: "richText", Value: "richText" },
                    ]}
                />
                <CustomPicker Label={"Enterable"} Value={currentToolTip.enterable} setValue={(value) => { this.setCurrent("enterable", value) }} PickerItem={Show} />
                <CustomPicker
                    Label={"Border Width"}
                    Value={currentToolTip.borderWidth}
                    setValue={(value) => { this.setCurrent("enterable", value) }}
                    PickerItem={[
                        { Name: "1", Value: "1" },
                        { Name: "2", Value: "2" },
                        { Name: "3", Value: "3" },
                        { Name: "4", Value: "4" },
                        { Name: "5", Value: "5" },
                    ]}
                />
                <CustomColorPicker
                    Label={"Background Color"}
                    Value={currentToolTip.backgroundColor}
                    setValue={(value) => {
                        this.setCurrent("backgroundColor", value)
                    }}
                />
                <CustomColorPicker
                    Label={"Border Color"}
                    Value={currentToolTip.backgroundColor}
                    setValue={(value) => {
                        this.setCurrent("borderColor", value)
                    }}
                />
            </ScrollView>
        )
    }
}