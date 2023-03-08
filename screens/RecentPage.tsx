import MyButton from "../components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import NewContext from "../store/context";
import useTanslate from "../hooks/use-translater";

let Textcolor = `black`;
function SavedWordsPage({ navigation }: any) {
  const contextData = useContext(NewContext);

  if (!contextData.nightOn) {
    Textcolor = `white`;
  } else {
    Textcolor = `black`;
  }

  let groupedData: string[];

  groupedData = contextData.recent;

  //console.log(groupedData[0][1]);
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
      }}
    >
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
    </View>
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
