import React from "react"
import { View, Text } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { styles } from "../GlobalStyles/global.style";

export interface ICustomPicker {
    Label: string,
    Value: any,
    setValue: any,
    PickerItem: { Name: string, Value: any }[]
}
export interface ICustomPickerState {
    Value: string
}
export default class CustomPicker extends React.Component<ICustomPicker, ICustomPickerState> {
    constructor(props) {
        super(props)
        this.state = {
            Value: props.Value
        }
    }
    render() {
        const { Label, Value, PickerItem, setValue } = this.props
        return (
            <View style={{ width: "95%" }}>
                <Text>{Label}</Text>
                <View style={styles.PickerBorder}>
                    <Picker
                        selectedValue={Value}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                    >
                        {
                            PickerItem.map((item) => {
                                return <Picker.Item label={item.Name} value={item.Value} />
                            })
                        }
                    </Picker>
                </View>
            </View >
        )
    }
}