import { View, Text, StyleSheet, Button, Image } from "react-native";

import MyButton from "../components/MyButton";
import { useContext } from "react";
import NewContext from "../store/context";
import type { HomeTabScreenProps } from "../navigation/types";

function MealsOverviewScreen({ navigation }: HomeTabScreenProps<"Popular">) {
  const contextData = useContext(NewContext);

  ////////////
  // var fr = new FileReader();
  // fr.onload = function (e) {
  //   // e.target.result should contain the text
  // };
  // fr.readAsText(`../data/data.txt`);

  /////////
  function pressHandler() {
    navigation.navigate("Meniu");
    contextData.addFavorite(`props.Ital`, ``, true);
  }
  function pressHandler2() {
    navigation.navigate("Meniu");
    contextData.addFavorite(`props.Ital`, ``, false);
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
      }}
    >
      <Image
        source={require("../assets/112.png")}
        resizeMode="cover"
        style={styles.image}
      ></Image>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
          color: !contextData.nightOn ? "white" : "black",
        }}
      >
        Italkalbis
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,

          color: !contextData.nightOn ? "white" : "black",
        }}
      >
        Geriausias nemokamas lietuvių - italų, italų - lietuvių žodynas.
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          marginBottom: 30,
          color: !contextData.nightOn ? "white" : "black",
        }}
      >
        Il miglior dizionario gratuito lituano-italiano, italiano-lituano.
      </Text>
      <MyButton title={`Pradėti!`} color={`#008B8B`} onPress={pressHandler} />
      <MyButton title={`iniziare!`} color={`#008B8B`} onPress={pressHandler2} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 0.95,
    padding: 60,
    //flexDirection: "row",

    // justifyContent: "center",
    //alignItems: "center",

    width: undefined,
    height: undefined,
    //backgroundColor: "transparent",
  },
});
