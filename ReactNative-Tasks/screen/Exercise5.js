import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Exercise5() {
  let squares = [
    { name: "Square 1" },
    { name: "Square 2" },
    { name: "Square 3" },
  ];
  function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return randomColor;
  }

  return (
    <View style={styles.container}>
      {squares.map((square, index) => (
        <Text
          style={[styles.square, { backgroundColor: getRandomColor() }]}
          key={index}
        >
          {square.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  square: {
    padding: 30,
    margin: 10,
  },
});
