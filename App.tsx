import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite seu nome:</Text>
      <TextInput style={styles.textinp} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 30,
    color: "black",
  },
  textinp: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    padding: 15,
  },
});
