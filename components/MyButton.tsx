import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useState, useContext, useEffect } from "react";
import NewContext from "../store/context";
interface MyButtonProps {
  title: string;
  color: string;
  onPress: () => void;
}
function MyButton({ title, color, onPress }: MyButtonProps) {
  const contextData = useContext(NewContext);
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: !contextData.nightOn ? "white" : "black",
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  gridItem: {
    // flex: 1,
    margin: 16,
    height: 60,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    alignItems: "stretch",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
