import { Title } from "../Model/title.model";
import { ScrollView, View } from "react-native";
import CustomTextBox from "../Controls/textbox.control";
import CustomPicker from "../Controls/picker.control";
import React from "react";
import CustomColorPicker from "../Controls/colorpicker.control";
import { Left, Top } from "../Constants/positions.constat";
import { SubText, Text } from "../Constants/fontsize.constant";

interface ITitleSetting {
    Title: TitleNew,
    setValue: any,
}
interface TitleNew extends Title {
    isExpanded: boolean
}
interface ITitleSettingState {
    currentTitle: TitleNew
}
export default class TitleSetting extends React.Component<ITitleSetting, ITitleSettingState> {
    ViewRef;
    constructor(props) {
        super(props)
        this.state = {
            currentTitle: props.Title
        }
    }
    componentDidUpdate(prevProps: Readonly<ITitleSetting>, prevState: Readonly<ITitleSettingState>, snapshot?: any): void {
        if (this.state.currentTitle != this.props.Title) {
            this.props.setValue(this.state.currentTitle)
        }

    }
    componentWillUnmount(): void {
        const { currentTitle } = this.state;
        this.props.setValue(currentTitle)
        // this.props.handleOnSave();
    }
    setCurrentTitleObj(key, value) {
        const obj = { ...this.state.currentTitle }
        obj[key] = value
        this.setState({ currentTitle: obj })
    }
    render() {
        const { Title, setValue } = this.props
        const { currentTitle } = this.state
        return (
            <ScrollView ref={this.ViewRef}>
                <CustomTextBox
                    Label={"Title"}
                    Value={currentTitle.text}
                    setValue={(value) => { this.setCurrentTitleObj("text", value) }}
                />
                <CustomTextBox
                    Label={"Sub Title"}
                    Value={currentTitle.subtext}
                    setValue={(value) => { this.setCurrentTitleObj("subtext", value) }}
                />
                <CustomTextBox
                    Label={"Link"}
                    Value={currentTitle.link}
                    setValue={(value) => { this.setCurrentTitleObj("link", value) }}
                />
                <CustomTextBox
                    Label={"Sub Link"}
                    Value={currentTitle.sublink}
                    setValue={(value) => { this.setCurrentTitleObj("sublink", value) }}
                />
                <CustomPicker
                    Label={"Left"}
                    Value={currentTitle.left}
                    setValue={(value) => { this.setCurrentTitleObj("left", value) }}
                    PickerItem={Left}
                />
                <CustomPicker
                    Label={"Top"}
                    Value={currentTitle.top}
                    setValue={(value) => { this.setCurrentTitleObj("top", value) }}
                    PickerItem={Top}
                />
                <CustomPicker
                    Label={"Title Font Size"}
                    Value={currentTitle.textStyle.fontSize}
                    setValue={(value) => {
                        const textStyle = { ...Title.textStyle }
                        textStyle.fontSize = value
                        this.setCurrentTitleObj("textStyle", textStyle)
                    }}
                    PickerItem={Text}
                />
                <CustomPicker
                    Label={"Subtitle Font Size"}
                    Value={currentTitle.textStyle.fontSize}
                    setValue={(value) => {
                        const subtextStyle = { ...Title.subtextStyle }
                        subtextStyle.fontSize = value
                        this.setCurrentTitleObj("subtextStyle", subtextStyle)
                    }}
                    PickerItem={SubText}
                />
                <CustomColorPicker
                    Label={"Title Text Color"}
                    Value={currentTitle.backgroundColor}
                    setValue={(value) => {
                        const textStyle = { ...Title.textStyle }
                        textStyle.color = value
                        this.setCurrentTitleObj("textStyle", textStyle)
                    }}
                />
                <CustomColorPicker
                    Label={"Subtitle Text Color"}
                    Value={currentTitle.backgroundColor}
                    setValue={(value) => {
                        const subtextStyle = { ...Title.subtextStyle }
                        subtextStyle.color = value
                        this.setCurrentTitleObj("subtextStyle", subtextStyle)
                    }}
                />
                <CustomColorPicker
                    Label={"Background Color"}
                    Value={currentTitle.backgroundColor}
                    setValue={(value) => { this.setCurrentTitleObj("backgroundColor", value) }}
                />
                <CustomColorPicker
                    Label={"Border Color"}
                    Value={currentTitle.borderColor}
                    setValue={(value) => { this.setCurrentTitleObj("borderColor", value) }}
                />
            </ScrollView>
        )
    }
}