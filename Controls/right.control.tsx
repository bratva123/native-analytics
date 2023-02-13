import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GlobalStyle, styles } from "../GlobalStyles/global.style";
import { AntDesign } from '@expo/vector-icons';
export default function Setting() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles1.arrowButton}
      >
        {modalVisible ? (
          <AntDesign name="arrowright" size={24} color="black" />
        ) : (
          <AntDesign name="arrowleft" size={24} color="black" />
        )}
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={modalVisible}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles1.modalContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles1.arrowButton}
          >
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  arrowButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
