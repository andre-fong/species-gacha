import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";
import { useRouter, useSearchParams } from "expo-router";

import species from "../../assets/data/species";

export default function Page() {
  const { id } = useSearchParams();

  if (typeof id !== "string") {
    return <Text>invalid id</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hi Peeps!</Text>
        <Text style={styles.subtitle}>
          Welcome to {species[parseInt(id) - 1].name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
