import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Title, FAB, List } from "react-native-paper";
import axios from "axios";

const API_URL = "http://localhost:PORT/api"; // Replace PORT with your server port

const TodoListScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${API_URL}/todos`);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Title>Todo List</Title>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={item.description}
            onPress={() => console.log("Pressed")}
          />
        )}
        keyExtractor={(item) => item._id.toString()} // Assuming todo item has an _id field
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("AddTodo")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default TodoListScreen;
