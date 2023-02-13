import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, Button, AppRegistry } from 'react-native';
import SidePanel from './Components/SidePanel/sidepanel.component';
import ChartRenderer from './Charts';
import { GlobalStyle } from './GlobalStyles/global.style';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [Chart, setChart] = useState(null);
  return (
    <View style={isOpen ? styles.overlay : styles.container}>
      {(!isOpen && !Chart) && <Pressable style={GlobalStyle.buttonSucess} onPress={() => { setIsOpen(!isOpen) }}>
        <Text style={GlobalStyle.text}>Open</Text>
      </Pressable>}
      {
        (Chart && !isOpen) && <ChartRenderer
          Chart={Chart}
          isOpen={isOpen}
          setIsOpen={(val) => { setIsOpen(val) }}

        />
      }
      {
        isOpen && (
          <View style={styles.sidePannel}>
            <SidePanel
              Chart={Chart}
              setChart={(val) => { setChart(val); setIsOpen(false) }}
              setIsOpen={(val) => { setIsOpen(val) }}
            />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    position: 'absolute',
    alignItems: 'flex-end',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
    marginTop: 14
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'flex-end',
    height: "100%",
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0
  },
  sidePannel: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: "50%",
    height: "99%",
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  }
});


