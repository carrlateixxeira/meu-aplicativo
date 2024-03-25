import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function App() {
  const[novaVariavel1, setNovaVariavel1] = React.useState('');
  const[novaVariavel2, setNovaVariavel2] = React.useState('');
  const calculo = (parseFloat(novaVariavel1) + parseFloat(novaVariavel2)) / 2;
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Digite número 1:</Text>
      <TextInput onChangeText={setNovaVariavel1} keyboardType="numeric" style={styles.textField}/>

      <Text style={styles.field}>Digite número 2:</Text>
      <TextInput onChangeText={setNovaVariavel2} keyboardType="numeric" style={styles.textField}/>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.field}>Enviar</Text>
      </TouchableOpacity>
      <Text> </Text>
      {!isNaN(calculo) && <Text style={styles.field}>Resultado: {calculo}</Text>}

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  field: {
    fontSize: 25,
    color: "black",
  },

  textField: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    padding: 15,
  },

  button: {
    backgroundColor: "#fff",
    width: "auto",
    borderRadius: 100,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    }

});

