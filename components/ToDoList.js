import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const ToDoList = ({ todos, onToggle, onDelete }) => {
  const renderTodoItem = ({ item }) => (
    <TouchableOpacity
      className={`flex-row items-center justify-between p-4 border-b border-gray-200`}
      onPress={() => onToggle(item.id)}
      onLongPress={() => onDelete(item.id)}
    >
      <Text className={`${item.completed ? "line-through" : ""}`}>
        {item.text}
      </Text>
      {item.completed && <Text className={`text-green-500`}>Completed</Text>}
    </TouchableOpacity>
  );

  return (
    <View className={`flex-1`}>
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ToDoList;
