import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";
import { useRouter } from "expo-router";

import species, { Species } from "../../assets/data/species";

type ItemProps = {
  item: Species;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
  </TouchableOpacity>
);

export default function Page() {
  const router = useRouter();
  let toggleColor = false;

  const renderItem = ({ item }: { item: Species }) => {
    toggleColor = toggleColor ? false : true;
    const backgroundColor = toggleColor ? "#6e3b6e" : "#f9c2ff";
    const color = toggleColor ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => router.push(`/species/${item.id}`)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Hi Peeps!</Text>
        <Text style={styles.subtitle}>Welcome to the Species Main Page!</Text>
      </View>
      <SafeAreaView style={styles.listSection}>
        <FlatList
          data={species}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleSection: {
    justifyContent: "center",
    marginHorizontal: "auto",
    height: "10vh",
    padding: "10vh",
  },
  listSection: {
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    height: "70vh",
    padding: "10vhs",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
