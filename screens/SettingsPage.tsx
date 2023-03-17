import MyButton from "../components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import NewContext from "../store/context";
import { useContext } from "react";
import type { HomeTabScreenProps } from "../navigation/types";

function CategoriesScreen({ navigation }: HomeTabScreenProps<"Popular">) {
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
          title={
            (contextData.languageLt && `Naktinis rėžimas`) ||
            `Modalità notturna`
          }
          color={`#567156`}
          onPress={pressHandler}
        />
      )) || (
        <MyButton
          title={
            (contextData.languageLt && `Dieninis rėžimas`) || `Modalità giorno`
          }
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
