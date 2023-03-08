import MyButton from "../components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import NewContext from "../store/context";
import { useState, useContext, useEffect } from "react";

function CategoriesScreen({ navigation }: any) {
  const contextData = useContext(NewContext);
  let nightOn = contextData.nightOn;

  function pressHandler() {
    navigation.navigate("Meniu");
    contextData.addFavorite(`props.Night`);
    nightOn = nightOn!;
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
      {(nightOn && (
        <MyButton
          title={`Naktinis rėžimas`}
          color={`grey`}
          onPress={pressHandler}
        />
      )) || (
        <MyButton
          title={`Dieninis rėžimas`}
          color={`#B8860B`}
          onPress={pressHandler}
        />
      )}
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
  containerNight: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "black",
  },
});
