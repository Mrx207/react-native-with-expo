import React, { useRef, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const [todos, setTodos] = useState([
    { name: "Buy coffee" },
    { name: "Read a book" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      alert("Please enter a todo item");
      inputRef.current.focus();
      return;
    }

    if (todos.some((todo) => todo.name === inputValue.trim())) {
      alert("Todo already exists");
      inputRef.current.focus();
      return;
    }
    console.log(editIndex);
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { name: inputValue.trim() };
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { name: inputValue.trim() }]);
    }
    setInputValue("");
    inputRef.current.clear();
    inputRef.current.focus();
    // console.log(todos);
  };

  const handleUpdate = (name) => {
    console.log("Updating todo:", name);
    const index = todos.findIndex((todo) => todo.name === name);
    console.log("Index found:", index);
    if (index !== -1) {
      setInputValue(name);
      setEditIndex(index);
      inputRef.current.focus();
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Todo App</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Add a new todo"
          placeholderTextColor="black"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          ref={inputRef}
        />
        <Button title="Submit todo" onPress={handleSubmit} />
        <Text style={{ margin: 10 }}>Todos:</Text>
        {todos.length === 0 && <Text>No todos available</Text>}
        <FlatList
          data={todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text>{item.name}</Text>
              <Button
                title="Edit"
                style={styles.editButton}
                onPress={() => handleUpdate(item.name)}
              />
              <Button
                title="Delete"
                style={styles.deleteButton}
                onPress={() => {
                  setTodos(todos.filter((todo) => todo.name !== item.name));
                }}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "red",
    color: "white",
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "green",
    color: "green",
  },
});
