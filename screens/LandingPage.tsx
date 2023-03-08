import { View, Text, StyleSheet, Button, Image } from "react-native";

import { MEALS } from "../data/dummy-data";
import MyButton from "../components/MyButton";
import { useState, useContext, useEffect } from "react";
import NewContext from "../store/context";
//const image = { require( "../assets/11.jpg") };

function MealsOverviewScreen({ navigation }: any) {
  const contextData = useContext(NewContext);

  function pressHandler() {
    navigation.navigate("Meniu");
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
          marginTop: 20,
          marginBottom: 30,
          color: !contextData.nightOn ? "white" : "black",
        }}
      >
        Mano draugų ir pažystamų pripažintas geriausiu lietuvių - italų kalbų
        žodynu, pelnięs ne vieną alaus apdovanojimą ir paplekšnojimą per petį.
      </Text>
      <MyButton title={`Pradėti!`} color={`#008B8B`} onPress={pressHandler} />
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
    flex: 0.6,
    padding: 60,
    //flexDirection: "row",

    // justifyContent: "center",
    //alignItems: "center",

    width: undefined,
    height: undefined,
    //backgroundColor: "transparent",
  },
});
