import React from "react"
import { View, Text, Modal, TouchableOpacity, TouchableHighlight } from "react-native";
import { GlobalStyle, styles } from "../GlobalStyles/global.style";
import { MaterialIcons } from '@expo/vector-icons';
export default function CustomModal({ Label, modalVisible, Content, setModalVisible, handleOnCancel, handleOnSave }) {
    const layout = () => Content();
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >

                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={{ lexDirection: "row", width: "100%", height: "5%", }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}> {Label}</Text>
                            <TouchableHighlight
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <MaterialIcons name="close" size={24} color="black" />
                            </TouchableHighlight>
                        </View>
                        {layout()}
                        <View style={{ flexDirection: 'row', width: "100%", bottom: 0 }}>
                            <TouchableOpacity style={{ flex: 2 }} onPress={() => { handleOnCancel() }}>
                                <Text style={[GlobalStyle.buttonDanger, GlobalStyle.textStyle]} Value={"Cancel"}>{"Cancel"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => { handleOnSave() }}>
                                <Text style={[GlobalStyle.buttonSucess, GlobalStyle.textStyle]} Value={"Save"}>{"Save"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>
        </View>
    )

}