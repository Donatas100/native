import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import LandingPage from "./screens/LandingPage";
import MeniuScreen from "./screens/MeniuScreen";
import TranslatePage from "./screens/TranslatePage";
import SavedWordsPage from "./screens/SavedWordsPage";
import SavedWordsPageIn from "./screens/SavedWordsPageIn";
import RecentPage from "./screens/RecentPage";
import Settings from "./screens/SettingsPage";
import NewContext from "./store/context";

const Stack = createNativeStackNavigator();

export default function App() {
  /////////////

  const storeData = async (id: string, value: string[][]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(id, jsonValue);
    } catch (e) {
      // saving error
    }
    // console.log(value);
  };

  const getData = async (id: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(id);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    //storeData(`recent`, test);
    //storeData(`favorite`, test2);
    asyncCall();
  }, []);

  async function asyncCall() {
    const data = await getData("recent");
    const data2 = await getData("favorite");
    // console.log(data.data);
    setSerchData(data);
    setdata(data2);
    // console.log(data);
  }

  let bcColor = "#567156";
  let txtColor = "white";

  const [languageLt, setLanguageLt] = useState(true);
  const [night, setNight] = useState(false);
  const [data1, setdata1] = useState(``);
  const [serchData, setSerchData] = useState<string[][]>([[]]);

  const [data, setdata] = useState<string[][]>([[]]);

  let delateFromFavorite: string[][] = [];

  function addFavorite(action: string, group: string, word: any) {
    // setdata((oldData) => ({ ...oldData, group: groupIn, word: wordIn }))
    if (action === "addToFavorite") {
      const favoriteData = [[group, ...word], ...data];
      setdata(favoriteData);
      storeData("favorite", favoriteData);
      // console.log(favoriteData);
    }
    if (action === "props.SavedWordsPageIn") {
      setdata1(word);
    }

    if (action === "delateFromFavorite") {
      data.forEach((element, i) => {
        if (element[1] !== word) {
          delateFromFavorite = [[...element], ...delateFromFavorite];
        }
      });
      setdata(delateFromFavorite);
      storeData("favorite", data);
    }
    if (action === "props.Serch") {
      const serchData1 = [[...word], ...serchData];
      setSerchData(serchData1);
      storeData("recent", serchData1);
      //console.log(serchData1);
      //asyncCall();
    }
    if (action === "props.Night") {
      setNight((oldData) => !oldData);
    }
    if (action === "props.Ital") {
      setLanguageLt(word);
    }
    if (action === "props.ClearRecent") {
      setSerchData([]);
    }
  }

  if (!night) {
    bcColor = "#567156";
    txtColor = "white";
  } else {
    bcColor = "white";
    txtColor = "black";
  }

  const value = {
    addFavorite: addFavorite,
    favorites: data,
    props: data1,
    recent: serchData,
    nightOn: night,
    languageLt: languageLt,
  };
  return (
    <>
      <StatusBar backgroundColor={(!night && bcColor) || "white"} />
      <NewContext.Provider value={value}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="First page"
              component={LandingPage}
              options={{
                title: `Italkalbis`,
                headerStyle: { backgroundColor: bcColor },
                headerTintColor: txtColor,
              }}
            />
            <Stack.Screen
              name="Meniu"
              component={MeniuScreen}
              options={{
                title: `Italkalbis`,
                headerStyle: { backgroundColor: bcColor },
                headerTintColor: txtColor,
              }}
            />
            <Stack.Screen
              name="Translator"
              component={TranslatePage}
              options={{
                title: `Italkalbis`,
                headerStyle: { backgroundColor: bcColor },
                headerTintColor: txtColor,
              }}
            />
            <Stack.Screen
              name="Favorites"
              component={SavedWordsPage}
              options={{
                title: `Italkalbis`,
                headerStyle: { backgroundColor: bcColor },
                headerTintColor: txtColor,
              }}
            />
            <Stack.Screen
              name="Favorite words"
              component={SavedWordsPageIn}
              options={{
                title: `Italkalbis`,
                headerStyle: { backgroundColor: bcColor },
                headerTintColor: txtColor,
              }}
            />
            <Stack.Screen
              name="Recent"
              component={RecentPage}
              options={{
                title: `Italkalbis`,
                headerStyle: { backgroundColor: bcColor },
                headerTintColor: txtColor,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                title: `Italkalbis`,
                headerStyle: { backgroundColor: bcColor },
                headerTintColor: txtColor,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NewContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};
////////////////////
// const test = [
//   ["ossetta", "duobutė, duobukė"],
//   ["fiancata", "šonas", "(solo di nave) bortas"],
//   [
//     "felicita",
//     "laimė",
//     "fare la (di qcn) suteikti (kam) laimės, pradžiuginti (ką)",
//     "(riuscire vantaggioso) išeiti (kam) į nau­dą",
//     "il denaro non la ne piniguose laimė",
//     "(gioia) džiaugsmas",
//   ],
//   [
//     "faro",
//     "švyturys",
//     "(fanale) žibintas",
//     "(la luce) šviesa",
//     "~i abbaglianti tolimosios švies­os",
//     "~i anabbaglianti a»timosios šviesos",
//     "~i antinebbia rūko žibintai",
//     "accendere (spegne­re) i ~i įjungti (išjungti) šviesas",
//     "(proiettore) prožektorius",
//     "fig kelrodis",
//   ],
//   [
//     "falce",
//     "pjautuvas",
//     "(falce fienaia) dalgis",
//     "e martello pjautuvas i» kūjis",
//     "fig di luna mėnulio pjautuvas",
//   ],
//   [
//     "fabbrica",
//     "gamykla, fabrikas",
//     "tessile (di mobili, di scarpe) tekstilės (baldų, avalynės) gamykla",
//     "marchio di gamyklos markė",
//     "la­vo­ra­re in dirbti fab­rike",
//   ],
//   ["uoga", "s bacca", "miško ~os frutti v di bosco"],
//   ["ungurys", "s zool anguilla", "capitone v", "jūrinis u grongo."],
//   [
//     "ugnis",
//     "s fuoco",
//     "(liepsna) fiamma",
//     "ugnį kurti accendere il fuoco",
//     "dėti puodą ant ~ies mettere una pentola sul fuoco",
//     "šnek duok man ~ies dammi da accendere",
//     "prk meilės u la fiamma dell’amore",
//   ],
// ];

// const test2 = [
//   [`maitas`, "uoga", "s bacca", "miško ~os frutti v di bosco"],
//   [`maitas`, "ungurys", "s zool anguilla", "capitone v", "jūrinis u grongo."],
//   [
//     `stichija`,
//     "ugnis",
//     "s fuoco",
//     "(liepsna) fiamma",
//     "ugnį kurti accendere il fuoco",
//     "dėti puodą ant ~ies mettere una pentola sul fuoco",
//     "šnek duok man ~ies dammi da accendere",
//     "prk meilės u la fiamma dell’amore",
//   ],
// ];
