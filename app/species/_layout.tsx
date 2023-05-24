import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

export default function SpeciesLayout() {
  return (
    <>
      <Stack
        initialRouteName="index"
        screenOptions={{
          title: "",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShadowVisible: false,
          animation: "fade",
          headerLeft: () => <Back />,
          headerBackTitleVisible: false,
        }}
      ></Stack>
    </>
  );
}

function Back() {
  const router = useRouter();

  return (
    <Button
      title="Back"
      onPress={() => {
        try {
          router.back();
        } catch {
          router.push("/");
        }
      }}
      color="#000"
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
