import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

export function HomeButton({
  children,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <Link href={"/"} asChild>
      <TouchableOpacity
        style={{
          ...styles.heading,
          backgroundColor: theme === "light" ? "white" : "#2E4854",
          overflow: "visible",
        }}
        onPress={() => {}}
        activeOpacity={0.8}
      >
        <Ionicons
          name={"home"}
          size={20}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
