import MyButton from "../components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import NewContext from "../store/context";

function SavedWordsPage({ navigation }: any) {
  const contextData = useContext(NewContext);
  // let groupedData: string[][];
  let groupedData: { [key: string]: any[] } = {};
  let arrayOfGroups: string[];
  arrayOfGroups = [];

  function pressHandler(event: string) {
    navigation.navigate("Favorite words");
    contextData.addFavorite(`props.SavedWordsPageIn`, ``, event);
    console.log(event);
  }

  contextData.favorites.forEach((element) => {
    const group = element[0];
    if (!groupedData[group]) {
      groupedData[group] = [];
      arrayOfGroups = [...arrayOfGroups, element[0]];
    }
    if (groupedData[group] !== element[0]) {
      groupedData[group].push(element);
    }
  });
  //console.log(`groupedData`);
  //console.log(groupedData);
  // console.log(arrayOfGroups);

  //contextData.favorites.forEach((element) => {

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
      }}
    >
      {arrayOfGroups.map((element, i) => {
        return (
          <MyButton
            key={element}
            title={element}
            color={`#008B8B`}
            onPress={() => pressHandler(element)}
          />
        );
      })}
    </View>
  );
}

export default SavedWordsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //justifyContent: "center",
  },
});
