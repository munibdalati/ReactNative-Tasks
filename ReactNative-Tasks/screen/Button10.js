import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';

export default function Button10() {
  return (
    <View style={styles.button}>
      <Button title="Say hello!"></Button>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },
});
