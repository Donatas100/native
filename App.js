import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';

import LandingPage from './screens/LandingPage';
import MeniuScreen from './screens/MeniuScreen';
import TranslatePage from './screens/TranslatePage';
import SavedWordsPage from './screens/SavedWordsPage';
import SavedWordsPageIn from './screens/SavedWordsPageIn';
import RecentPage from './screens/RecentPage';
import Settings from './screens/SettingsPage';


import NewContext from "./store/context";



const Stack = createNativeStackNavigator();

export default function App() {
  /////////////

  let bcColor = "#708090"
  let txtColor = "white"
  const [night, setNight] = useState(`false`);
  const [data1, setdata1] = useState([]);
  const [serchData, setSerchData] = useState([[["ozys"], ["caprone, capro"], ["(zool.) (kalnų) - stambecco, ibice"], ["(tech.) (darbui) - cavalletto"]], [["kiaule"], ["maiale, porco"], ["(iškastruotas patinas) - maiale, porco"], ["(apie žmogų) - porco"]]]);
  const [data, setdata] = useState([
    [`maistas`,
      `kose`,
      `purè, poltiglia, pappa`,
      `bulvių košė purè m di patate`,
      `ryžių košė riso al latte`,
    ],

    [`maistas`,
      `sriuba`,
      `zuppa, minestra`,
      `bulvių sriuba zuppa di patate`,
      `daržovių sriuba zuppa di verdura`,
      `makaronų sriuba minestra di vermicelli`,
    ],

    [
      `gyvunai`,
      `kiaule`,
      `maiale, porco`,
      `(iškastruotas patinas) maiale, porco`,
      `(apie žmogų) porco`,
    ],]);
  let delateFromFavorite = []
  let test = []


  function addFavorite(action, group, word) {
    // setdata((oldData) => ({ ...oldData, group: groupIn, word: wordIn }))
    if (action === "addToFavorite") {


      setdata((oldData) => ([[group, ...word], ...oldData]))
      console.log(data)
    }
    if (action === "props.SavedWordsPageIn") {
      setdata1(word)

    }
    if (action === "delateFromFavorite") {
      data.forEach((element, i) => {
        if (element[1] !== word) {
          delateFromFavorite = [element, ...delateFromFavorite];
        }
      });
      setdata(delateFromFavorite)
    }
    if (action === "props.Serch") {
      setSerchData(oldData => [[...word], ...oldData])
      console.log(`//////////////////////////////////////serchData`)
      console.log(serchData)


    }
    if (action === "props.Night") {
      setNight(oldData => !oldData)


    }

  }
  const value = {
    addFavorite: addFavorite,
    favorites: data,
    props: data1,
    recent: serchData,
    nightOn: night,
  };

  if (!night) {
    bcColor = "#708090"
    txtColor = "white"

  }
  else {
    bcColor = "white"
    txtColor = "black"


  }

  return (
    <>
      <StatusBar style="dark-content" backgroundColor={night && bcColor} />
      <NewContext.Provider value={value}>
        <NavigationContainer theme={MyTheme}>

          <Stack.Navigator backgroundColor="#61dafb"        >

            <Stack.Screen name="First page" component={LandingPage} options={{ headerStyle: { backgroundColor: bcColor }, headerTintColor: txtColor }} />
            <Stack.Screen name="Meniu" component={MeniuScreen} options={{ headerStyle: { backgroundColor: bcColor }, headerTintColor: txtColor }} />
            <Stack.Screen name="Translator" component={TranslatePage} options={{ headerStyle: { backgroundColor: bcColor }, headerTintColor: txtColor }} />
            <Stack.Screen name="Favorites" component={SavedWordsPage} options={{ headerStyle: { backgroundColor: bcColor }, headerTintColor: txtColor }} />
            <Stack.Screen name="Favorite words" component={SavedWordsPageIn} options={{ headerStyle: { backgroundColor: bcColor }, headerTintColor: txtColor }} />
            <Stack.Screen name="Recent" component={RecentPage} options={{ headerStyle: { backgroundColor: bcColor }, headerTintColor: txtColor }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerStyle: { backgroundColor: bcColor }, headerTintColor: txtColor }} />
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
    primary: 'rgb(255, 45, 85)',
  },
};
////////////////////
