import React from 'react'; // Import React
import { Text, View, Button, Alert, StyleSheet } from 'react-native';

let age=30;
const name:String="Taufique";
const App = () => {
  return (
    <View>
      <Text style={styles.h1}>{name}</Text>
      <Text style={styles.h2}>hello world</Text>
      <Text style={{ fontSize: 20 }}>{age}</Text>
      <Button title='press me' onPress={() => { Alert.alert("hello"); }} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 40,
  },
  h2: {
    backgroundColor: "white",
    color: "blue",
    fontSize: 30,
  },
});

export default App;
