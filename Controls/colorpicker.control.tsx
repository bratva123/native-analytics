import React from "react";
import { Text, View } from "react-native";
import { ColorPicker } from 'react-native-color-picker';
export interface ICustomColorPicker {
    Label: string
    Value: string
    setValue: any
}
export default class CustomColorPicker extends React.Component<ICustomColorPicker>{
    render() {
        const { Label, Value, setValue } = this.props
        return (
            <View style={{ width: "90%", flexDirection: "row", borderWidth: 2, height: "10%", margin: 10, borderRadius: 10, padding: 10 }}>
                <Text >{Label}</Text>
                <ColorPicker
                    onColorChange={(color) => { setValue(color) }}
                    style={{ width: "50%", }}
                    hideSliders
                    defaultColor={Value}
                />
            </View >
        )
    }
}