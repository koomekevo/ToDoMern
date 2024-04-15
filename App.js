import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoListScreen from './screens/ToDoListScreen';
import AddToDoScreen from './screens/AddToDoScreen';
import EditToDoScreen from './screens/EditToDoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ToDoList" component={ToDoListScreen} />
          <Stack.Screen name="AddToDo" component={AddToDoScreen} />
          <Stack.Screen name="EditToDo" component={EditToDoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
