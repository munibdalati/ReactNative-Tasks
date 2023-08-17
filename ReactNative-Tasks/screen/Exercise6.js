import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Exercise6() {
  let squares = [
    { name: "Square 1" },
    { name: "Square 2" },
    { name: "Square 3" },
    { name: "Square 4" },
    { name: "Square 5" },
    { name: "Square 6" },
    { name: "Square 7" },
    { name: "Square 8" },
    { name: "Square 9" },
    { name: "Square 10" },
    { name: "Square 11" },
    { name: "Square 12" },
    { name: "Square 13" },
    { name: "Square 14" },
    { name: "Square 15" },
  ];
  function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    return randomColor;
  }

  return (
    <ScrollView>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    padding: 30,
    margin: 10,
  },
});
