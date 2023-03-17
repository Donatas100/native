import MyButton from "../components/MyButton";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useContext, useState } from "react";
import NewContext from "../store/context";
import type { HomeTabScreenProps } from "../navigation/types";
import FadeInView from "../components/FadeIn";

let Textcolor = `black`;
function SavedWordsPage({ navigation }: HomeTabScreenProps<"Popular">) {
  const contextData = useContext(NewContext);
  const [favorite, setFavorite] = useState(false);
  function pressHandler() {
    contextData.addFavorite(`props.ClearRecent`);
    setFavorite(true);
    //console.log(`ev66666666666666666666ent`);
  }
  function endHandler() {
    setFavorite(false);
    //console.log(`ev66666666666666666666ent`);
  }
  if (!contextData.nightOn) {
    Textcolor = `white`;
  } else {
    Textcolor = `black`;
  }

  let groupedData: string[];

  groupedData = contextData.recent;

  // console.log(groupedData);
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
      }}
    >
      <MyButton
        title={
          (contextData.languageLt && `Išvalyti istoriją`) ||
          `Cancellare la cronologia`
        }
        color={`#8B0000`}
        onPress={() => pressHandler()}
      />
      {favorite && (
        <FadeInView
          animationEnd={endHandler}
          style={{
            margin: 16,
            borderRadius: 8,
            height: 60,
            backgroundColor: "powderblue",
          }}
        >
          <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
            {(contextData.languageLt && `Istorija išvalyta`) ||
              `Cronologia cancellata`}
          </Text>
        </FadeInView>
      )}
      {groupedData.map((element, i) => {
        return (
          <View key={i}>
            {groupedData[i][0] && (
              <Text
                style={{
                  fontWeight: "bold",
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][0]}
              </Text>
            )}
            {groupedData[i][1] && (
              <Text style={{ color: !contextData.nightOn ? "white" : "black" }}>
                {groupedData[i][1]}
              </Text>
            )}
            {groupedData[i][2] && (
              <Text style={{ color: !contextData.nightOn ? "white" : "black" }}>
                {groupedData[i][2]}
              </Text>
            )}
            {groupedData[i][3] && (
              <Text style={{ color: !contextData.nightOn ? "white" : "black" }}>
                {groupedData[i][3]}
              </Text>
            )}
            {groupedData[i][4] && (
              <Text style={{ color: !contextData.nightOn ? "white" : "black" }}>
                {groupedData[i][4]}
              </Text>
            )}
            {groupedData[i][5] && (
              <Text style={{ color: !contextData.nightOn ? "white" : "black" }}>
                {groupedData[i][5]}
              </Text>
            )}
            {groupedData[i][6] && (
              <Text style={{ color: !contextData.nightOn ? "white" : "black" }}>
                {groupedData[i][6]}
              </Text>
            )}
            {groupedData[i][7] && (
              <Text style={{ color: !contextData.nightOn ? "white" : "black" }}>
                {groupedData[i][7]}
              </Text>
            )}
            {<Text></Text>}
          </View>
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

    //justifyContent: "top",
  },
  bold: {
    fontWeight: "bold",
    color: Textcolor,
  },
});
