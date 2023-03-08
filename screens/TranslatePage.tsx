import { View, Text, StyleSheet, TextInput } from "react-native";
//import React from 'react';
import MyButton from "../components/MyButton";
import useFetch from "../hooks/use-fetch";
import NewContext from "../store/context";
import { useState, useContext, useEffect } from "react";
import useTanslate from "../hooks/use-translater";

function TranslatePage() {
  const [data, setdata] = useState<string[]>([]);
  const [favorite, setFavorite] = useState();
  const [textInput, setTextInput] = useState();
  const [notFoundaa, setNotFoundaa] = useState<boolean>();
  const [inputLanguage, setInputlenguage] = useState(`lt`);
  const contextData = useContext(NewContext);
  const notFound = [`Žodis nerastas`];
  let newData = [];
  let newData2 = [];
  let renderText = ``;
  let buttonText = ``;

  async function inputTextHandler(text: any) {
    //newData = useTanslate(text.nativeEvent.text, inputLanguage);
    newData = await useFetch(text.nativeEvent.text, inputLanguage);
    // newData = [newData2];
    console.log(`/////////////////////////`);
    console.log(newData);
    //setFavorite(``);

    if (newData[0] === `noData`) {
      setdata(notFound);
      console.log(notFound[0]);
      setNotFoundaa(true);
    } else {
      setdata([...newData]);
      console.log(`/////////////////////data`);
      contextData.addFavorite(`props.Serch`, ``, newData);
      setNotFoundaa(false);
      this.textInput.clear();
    }
  }

  ///////////////////////////
  let favoritesArray = [];
  function inputTextHandlersave(text: any) {
    if (text.nativeEvent.text) {
      if (data[0]) {
        if (data[0] !== `Žodis nerastas`) {
          let dataInLine: string[] = [];

          data.map((dataa, i) => {
            dataInLine = [...dataInLine, ...dataa];
          });

          contextData.addFavorite(`addToFavorite`, text.nativeEvent.text, data);
          this.textInput2.clear();
          setFavorite(`Žodis išsaugotas`);
        }
      } else setFavorite(``);
    } else setFavorite(``);
  }
  async function pressHandler() {
    await useFetch(`kiaule`, `lt`);
    if (inputLanguage === `lt`) {
      setInputlenguage(`it`);
    } else {
      setInputlenguage(`lt`);
    }
  }

  if (inputLanguage === `lt`) {
    renderText = `Verčiama iš lietuvių į italų`;
    buttonText = `Keisti (italų - lietuvių)`;
  } else {
    renderText = `Verčiama iš italų į lietuvių`;
    buttonText = `Keisti (lietuvių - italų)`;
  }

  // {data ? data.map((dataa, i) => {
  //   return <Text>{dataa[i]}</Text>;
  // })}
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: (!contextData.nightOn && `#8FBC8F`) || `#FFF8DC`,
      }}
    >
      <View>
        <Text
          style={{
            marginLeft: 16,
            fontWeight: "bold",
            color: !contextData.nightOn ? "white" : "black",
          }}
        >
          {renderText}
        </Text>
        <TextInput
          ref={(input) => {
            this.textInput = input;
          }}
          style={styles.input}
          // onChangeText={onChangeText}
          placeholder={`Įveskite tekstą`}
          value={textInput}
          onSubmitEditing={inputTextHandler}
        />
        {notFoundaa && (
          <Text
            style={{
              marginLeft: 16,
              fontWeight: "bold",
              color: !contextData.nightOn ? "white" : "black",
            }}
          >
            {data[0]}
          </Text>
        )}
        <Text
          style={{
            marginLeft: 16,
            fontWeight: "bold",
            color: !contextData.nightOn ? "white" : "black",
          }}
        >
          {data[1]}
        </Text>
        <Text
          style={{
            marginLeft: 16,
            color: !contextData.nightOn ? "white" : "black",
          }}
        >
          {data[2]}
        </Text>
        <Text
          style={{
            marginLeft: 16,
            color: !contextData.nightOn ? "white" : "black",
          }}
        >
          {data[3]}
        </Text>
        <Text
          style={{
            marginLeft: 16,
            color: !contextData.nightOn ? "white" : "black",
          }}
        >
          {data[4]}
        </Text>
        <Text
          style={{
            marginLeft: 16,
            color: !contextData.nightOn ? "white" : "black",
          }}
        >
          {data[5]}
        </Text>
        <MyButton title={buttonText} color={`#008B8B`} onPress={pressHandler} />
      </View>
      <View style={styles.containerSave}>
        <Text
          style={{
            marginLeft: 16,
            color: !contextData.nightOn ? "white" : "black",
          }}
        >
          Norint žodį išsaugoti nurodykite jo grupę:
        </Text>
        <TextInput
          ref={(input) => {
            this.textInput2 = input;
          }}
          style={styles.input}
          // onChangeText={onChangeText}

          placeholder={`grupė, pavyzdžiui - maistas`}
          value={textInput}
          onSubmitEditing={inputTextHandlersave}
        />
        {favorite && (
          <Text
            style={{
              marginLeft: 16,

              color: !contextData.nightOn ? "white" : "black",
            }}
          >
            {favorite}
          </Text>
        )}
      </View>
    </View>
  );
}

export default TranslatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  containerSave: {
    marginTop: 30,
    backgroundColor: `#008B8B`,
    margin: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});
