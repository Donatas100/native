import MyButton from "../components/MyButton";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useContext, useEffect, useRef } from "react";
import NewContext from "../store/context";
import type { HomeTabScreenProps } from "../navigation/types";
import FadeInView from "../components/FadeIn";

function SavedWordsPage({ navigation }: HomeTabScreenProps<"Popular">) {
  const contextData = useContext(NewContext);
  const [favorite, setFavorite] = useState(false);
  let groupedData: string[];
  groupedData = [];
  //console.log(`contextData.props`);
  //console.log(contextData.props);

  function pressHandler(event: string) {
    //console.log(event);
    contextData.addFavorite(`delateFromFavorite`, ``, event);
    setFavorite(true);
  }
  function endHandler() {
    setFavorite(false);
    //console.log(`ev66666666666666666666ent`);
  }

  contextData.favorites.forEach((element: string) => {
    //console.log(element[0]);
    if (element[0] === contextData.props) {
      groupedData = [element, ...groupedData];
    }
  });
  // console.log(contextData.favorites);
  // groupedData.replace(`,`, `","`);
  //console.log(groupedData[0][1]);

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
      }}
    >
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
            {(contextData.languageLt && `Žodis ištrintas`) ||
              `Parola cancellata`}
          </Text>
        </FadeInView>
      )}
      {groupedData.map((element, i) => {
        return (
          <View
            key={i}
            style={{
              flexDirection: `row`,
              backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
            }}
          >
            <View
              style={{
                flex: 5,
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

              <Text></Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => pressHandler(groupedData[i][1])}>
                <Image
                  source={require("../assets/x.png")}
                  resizeMode="cover"
                  style={styles.image}
                ></Image>
              </TouchableOpacity>
            </View>
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
    // justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    //flex: 1,
    //flex: 0.95,
    //padding: 60,
    //flexDirection: "row",

    // justifyContent: "center",
    //alignItems: "center",

    width: 40,
    height: 40,
    //backgroundColor: "transparent",
  },
});
