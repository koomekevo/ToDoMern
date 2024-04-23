import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

const API_URL = "http://localhost:PORT/api"; // Replace PORT with your server port

const AddTodoScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const response = await axios.post(`${API_URL}/todos`, {
        title,
        description,
      });
      console.log("Todo added:", response.data);
      setTitle("");
      setDescription("");
      navigation.goBack();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTodo} style={styles.button}>
        Add Todo
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default AddTodoScreen;
