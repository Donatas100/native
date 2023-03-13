import MyButton from "../components/MyButton";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import NewContext from "../store/context";
import type { HomeTabScreenProps } from "../navigation/types";

function SavedWordsPage({ navigation }: HomeTabScreenProps<"Popular">) {
  const contextData = useContext(NewContext);
  // let groupedData: string[][];
  let groupedData: { [key: string]: any } = {};
  let arrayOfGroups: string[];
  arrayOfGroups = [];

  function pressHandler(event: string) {
    navigation.navigate("Favorite words");
    contextData.addFavorite(`props.SavedWordsPageIn`, ``, event);
    console.log(event);
  }

  contextData.favorites.forEach((element: string[]) => {
    const group = element[0];
    if (!groupedData[group]) {
      groupedData[group] = [];
      arrayOfGroups = [...arrayOfGroups, element[0]];
    }
    if (groupedData[group] !== element[0]) {
      groupedData[group].push(element);
    }
  });
  // console.log(contextData.favorites);
  // //console.log(groupedData);
  // // console.log(arrayOfGroups);

  // //contextData.favorites.forEach((element) => {

  return (
    <ScrollView
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
    </ScrollView>
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
