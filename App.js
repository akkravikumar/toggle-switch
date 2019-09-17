import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToggleSwitch from "./toggle-switch"

export default function App() {
  return (
    <View style={styles.container}>
      <ToggleSwitch
        text={{
          on: "Slide to Off",
          off:"Slide to Right",
          activeTextColor: "white",
          inactiveTextColor: "#ffffff"
        }}
        textStyle={{                              
          fontSize:18,
          color: "Black"
        }}
        color={{
          indicator: "rgb(255,255,255)",
          active: "rgb(188, 240, 180)",
          inactive:"rgb(218,218,218)"
        }}
        active={false}
        disabled={
          false
        }
        width={200}
        radius={25}
        onValueChange={value => {
          console.log("value= ", value)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
