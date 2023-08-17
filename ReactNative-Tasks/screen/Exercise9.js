import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { useState, useEffect } from "react";

export default function Exercise9() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20&inc=name")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.results); // Assuming the "results" key contains the data you want
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  const renderItem = ({ item }) => (
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={renderItem}
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
