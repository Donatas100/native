import MyButton from "../components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import NewContext from "../store/context";
import useTanslate from "../hooks/use-translater";

function SavedWordsPage({ navigation }: any) {
  const contextData = useContext(NewContext);
  let groupedData: string[];
  groupedData = [];
  console.log(`contextData.props`);
  console.log(contextData.props);

  function pressHandler(event: string) {
    console.log(event);
    contextData.addFavorite(`delateFromFavorite`, ``, event);
  }

  contextData.favorites.forEach((element) => {
    //console.log(element[0]);
    if (element[0] === contextData.props) {
      groupedData = [element, ...groupedData];
    }
  });
  console.log(contextData.favorites);
  // groupedData.replace(`,`, `","`);
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
          <View
            style={{
              backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
            }}
          >
            {groupedData[i][1] && (
              <Text
                style={{
                  marginLeft: 16,
                  fontWeight: "bold",
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][1]}
              </Text>
            )}
            {groupedData[i][2] && (
              <Text
                style={{
                  marginLeft: 16,
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][2]}
              </Text>
            )}
            {groupedData[i][3] && (
              <Text
                style={{
                  marginLeft: 16,
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][3]}
              </Text>
            )}
            {groupedData[i][4] && (
              <Text
                style={{
                  marginLeft: 16,
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][4]}
              </Text>
            )}
            {groupedData[i][5] && (
              <Text
                style={{
                  marginLeft: 16,
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][5]}
              </Text>
            )}
            {groupedData[i][6] && (
              <Text
                style={{
                  marginLeft: 16,
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][6]}
              </Text>
            )}
            {groupedData[i][7] && (
              <Text
                style={{
                  marginLeft: 16,
                  color: !contextData.nightOn ? "white" : "black",
                }}
              >
                {groupedData[i][7]}
              </Text>
            )}
            <MyButton
              title={`ištrinti`}
              color={`#8B0000`}
              onPress={() => pressHandler(groupedData[i][1])}
            />
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
    // justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
  },
});
