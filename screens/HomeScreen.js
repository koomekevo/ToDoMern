import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Title } from "react-native-paper";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import {
  getTasks,
  addTask as addTaskApi,
  deleteTask as deleteTaskApi,
  toggleTaskCompletion,
} from "../utils/api";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasksData = await getTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error("Error loading tasks:", error);
      // Handle error, show error message to user
    }
  };

  const addTask = async (taskText) => {
    try {
      const newTask = await addTaskApi(taskText);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
      // Handle error, show error message to user
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteTaskApi(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      // Handle error, show error message to user
    }
  };

  const toggleTask = async (taskId) => {
    try {
      await toggleTaskCompletion(taskId);
      setTasks(
        tasks.map((task) => {
          if (task._id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        })
      );
    } catch (error) {
      console.error("Error toggling task:", error);
      // Handle error, show error message to user
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>ToDo List</Title>
      <AddTaskForm onTaskAdded={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
