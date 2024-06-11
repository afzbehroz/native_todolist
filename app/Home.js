import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { useTodos } from "../context/TodoContext";

export default function Home() {
  const { todos, setTodos } = useTodos();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Link href={`/detail?id=${item.id}`} asChild>
        <Text style={item.completed ? styles.completedText : styles.text}>
          {item.title}
        </Text>
      </Link>
      {item.completed && (
        <Button
          title="Delete"
          onPress={() => setTodos(todos.filter((todo) => todo.id !== item.id))}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todos</Text>
      <FlatList
        data={todos.filter((todo) => !todo.completed)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.header}>Completed</Text>
      <FlatList
        data={todos.filter((todo) => todo.completed)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Link href="/add" asChild>
        <Button title="Add" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "green",
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  completedText: {
    fontSize: 18,
    textDecorationLine: "line-through",
  },
});
