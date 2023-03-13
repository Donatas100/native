import MyButton from "../components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useState, useContext, useEffect } from "react";
import NewContext from "../store/context";
import type { HomeTabScreenProps } from "../navigation/types";

function CategoriesScreen({ navigation }: HomeTabScreenProps<"Popular">) {
  const contextData = useContext(NewContext);
  function pressHandler() {
    navigation.navigate("Translator");
  }
  function pressHandler2() {
    navigation.navigate("Favorites");
  }
  function pressHandler3() {
    navigation.navigate("Recent");
  }
  function pressHandler4() {
    navigation.navigate("Settings");
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        justifyContent: "center",
        backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
      }}
    >
      <MyButton
        title={(contextData.languageLt && `Žodynas`) || `Targhetta`}
        color={`#008B8B`}
        onPress={pressHandler}
      />
      <MyButton
        title={
          (contextData.languageLt && `Paskutiniai ieškoti`) ||
          `Cercato di recente`
        }
        color={`#008B8B`}
        onPress={pressHandler3}
      />
      <MyButton
        title={
          (contextData.languageLt && `Įsiminti žodžiai`) || `Parole memorizzate`
        }
        color={`#008B8B`}
        onPress={pressHandler2}
      />
      <MyButton
        title={(contextData.languageLt && `Nustatymai`) || `Impostazioni`}
        color={`#B8860B`}
        onPress={pressHandler4}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
});
