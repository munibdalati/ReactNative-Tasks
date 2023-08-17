import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function Exercise8() {
  const names = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" },
    { id: 6, name: "Frank" },
    { id: 7, name: "Grace" },
    { id: 8, name: "Helen" },
    { id: 9, name: "Isaac" },
    { id: 10, name: "Jane" },
    { id: 11, name: "Kevin" },
    { id: 12, name: "Lily" },
    { id: 13, name: "Mike" },
    { id: 14, name: "Nina" },
    { id: 15, name: "Oscar" },
    { id: 16, name: "Pamela" },
    { id: 17, name: "Quincy" },
    { id: 18, name: "Rita" },
    { id: 19, name: "Steve" },
    { id: 20, name: "Tina" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.nameContainer}>
      <Text style={styles.nameText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id.toString()} // Convert id to string
        data={names}
        renderItem={renderItem} // Specify the rendering function
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  nameContainer: {
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1, // Adding a border
    borderColor: "black", // Border color
    paddingVertical: 10,
    paddingLeft: 5,
  },
  nameText: {
    color: "black", // Text color for better visibility
  },
});