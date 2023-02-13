import React, { Ref } from "react"
import { View, Text, TextInput } from "react-native"
import { styles } from "../GlobalStyles/global.style";

export interface ICustomTextBox {
    Label: string
    Value: string,
    setValue: any
}
export interface ICustomTextBoxState {
    Value: string,
    tempValue: string
}
export default class CustomTextBox extends React.Component<ICustomTextBox, ICustomTextBoxState> {
    inputRef
    constructor(props) {
        super(props)
        this.inputRef = React.createRef<TextInput>();
        this.state = {
            Value: props.Value,
            tempValue: props.Value
        }
    }
    // componentDidMount() {
    //     this.inputRef.current.focus();
    // }
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.Value !== this.state.Value) {
    //         this.inputRef.current.focus();
    //     }
    // }
    // getDerivedStateFromProps(nextProps, prevState) {
    //     if (prevState.Value !== this.state.Value) {
    //         this.inputRef.current.focus();
    //     }
    // }
    render() {
        const { Label, Value, setValue } = this.props
        return (
            <View style={{ width: "95%", marginTop: 0 }}>
                <Text>{Label}</Text>
                <TextInput
                    ref={this.inputRef}
                    style={styles.textInput}
                    value={this.state.tempValue}
                    onChangeText={text => this.setState({ tempValue: text })}
                    onEndEditing={(e) => { setValue(e.nativeEvent.text) }}
                />
            </View>
        )
    }

}