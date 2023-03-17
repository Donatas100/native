import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import FadeInView from "../components/FadeIn";
import MyButton from "../components/MyButton";
import ActivityIndicator from "../components/ActivityIndicator";

import useFetch from "../hooks/use-fetch";
import NewContext from "../store/context";
import { useState, useContext, useEffect, useRef } from "react";

const TranslatePage = function () {
  const [loading, setLoading] = useState<boolean>(false);

  const [showData, setShowData] = useState<boolean>(false);
  const [suggest, setSuggest] = useState("");
  const [saveData, setSaveData] = useState<boolean>(false);
  const [data, setdata] = useState<string[]>([]);
  const [favorite, setFavorite] = useState(false);
  const [input, setInput] = useState(``);
  const [input2, setInput2] = useState(``);
  const [inputLanguage, setInputlenguage] = useState(`lt`);
  const contextData = useContext(NewContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // let clearInput1 = false;
  let newData: string[] = [];
  let renderText = ``;
  let buttonText = ``;

  //that = this;
  // if (clearInput1) {
  //   clearInput1 = false;
  // }

  const fecthData = async (fixedInput: string) => {
    let dataa = [];
    setLoading(true);
    setInput(``);
    setSuggest(``);
    newData = await useFetch(fixedInput, inputLanguage);
    setLoading(false);
    if (newData[0] === `error`) {
      setdata([...newData]);
      setShowData(false);
    } else {
      setShowData(true);
      dataa = [fixedInput, ...newData];
      setdata([...dataa]);
      contextData.addFavorite(`props.Serch`, ``, dataa);
    }
  };

  function inputTextHandler() {
    const fixedInput = input.trim().toLowerCase();
    if (fixedInput) {
      fecthData(fixedInput);
    }
  }

  function pressHandler3() {
    fecthData(suggest);
  }

  const inputTextHandlersave = () => {
    if (input2) {
      if (data[0]) {
        // console.log(data);
        if (data[0] !== "error") {
          contextData.addFavorite(`addToFavorite`, input2, data);
          setFavorite(true);
          setSaveData(false);
          setInput2(``);
        }
      }
    }
  };

  function pressHandler() {
    if (inputLanguage === `lt`) {
      setInputlenguage(`it`);
    } else {
      setInputlenguage(`lt`);
    }
  }
  function pressHandler2() {
    setSaveData((oldData) => !oldData);
  }

  if (contextData.languageLt) {
    if (inputLanguage === `lt`) {
      renderText = `Verčiama iš lietuvių į italų`;
      buttonText = `Keisti (italų - lietuvių)`;
    } else {
      renderText = `Verčiama iš italų į lietuvių`;
      buttonText = `Keisti (lietuvių - italų)`;
    }
  } else {
    if (inputLanguage === `lt`) {
      renderText = `Tradotto dal lituano all'italiano`;
      buttonText = `Cambia (Italiano - Lituano)`;
    } else {
      renderText = `Tradotto dall'italiano al lituano`;
      buttonText = `Change (Lituano - Italiano)`;
    }
  }

  function endHandler() {
    setFavorite(false);
    //console.log(`ev66666666666666666666ent`);
  }
  function onchangeHandler2(e: string) {
    // console.log(e);
    setInput2(e);
  }

  function onchangeHandler(e: string) {
    // console.log(e);
    setInput(e);
    if (e) {
      if (contextData.recent) {
        //console.log(contextData.recent);
        let recent: string[] = [];
        let recent2 = ``;
        let recentLeight = 0;
        contextData.recent.forEach((data: string[]) => {
          recent = [data[0], ...recent];
        });
        // console.log(recent);

        for (let y = 0; y < recent.length; y++) {
          //  console.log(e[i]);
          for (let z = 0; z < e.length; z++) {
            if (e[z] === recent[y][z]) {
              if (recentLeight <= z) {
                recentLeight = z;
                // console.log(recent[y]);
                if (z === recentLeight) {
                  recent2 = recent[y];
                }
              }
            } else {
              z = e.length;
            }
          }
        }
        for (let i = 0; i < e.length; i++) {
          //  console.log(e[i], ` `, recent2[i]);
          if (e[i] !== recent2[i]) recent2 = ``;
        }
        // }

        setSuggest(recent2);
        setdata([``]);
        //setNotFoundaa(false);
        // console.log(recent2);
      }
    }
  }
  //accessible={false}
  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <View
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
              {(contextData.languageLt && `Žodis išsaugotas`) ||
                `La parola è salva`}
            </Text>
          </FadeInView>
        )}
        <View>
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
              autoFocus={true}
              onChangeText={onchangeHandler}
              value={input}
              style={styles.input}
              // onChangeText={onChangeText}

              placeholder={
                (contextData.languageLt && `Įveskite žodį`) ||
                `Inserisci il testo`
              }
              onSubmitEditing={inputTextHandler}
            />
            {suggest && (
              <View
                style={{
                  backgroundColor: `grey`,
                  marginLeft: 10,
                  marginRight: 10,
                  paddingBottom: 5,
                  paddingTop: 5,
                }}
              >
                <Text
                  onPress={pressHandler3}
                  style={{
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                    color: !contextData.nightOn ? "white" : "black",
                  }}
                >
                  {suggest}
                </Text>
              </View>
            )}
          </View>

          <View>
            {loading && <ActivityIndicator />}

            {showData && (
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
          </View>

          <MyButton
            title={buttonText}
            color={`#008B8B`}
            onPress={pressHandler}
          />
          <MyButton
            title={
              (contextData.languageLt && `Išsaugoti žodį`) || `Salva la parola`
            }
            color={`#008B8B`}
            onPress={pressHandler2}
          />
        </View>

        {saveData && (
          <View>
            <Text
              style={{
                marginLeft: 16,
                color: !contextData.nightOn ? "white" : "black",
              }}
            >
              {(contextData.languageLt &&
                `Norint žodį išsaugoti nurodykite jo grupę:`) ||
                `Per salvare una parola, specifica il suo gruppo:`}
            </Text>
            <TextInput
              onChangeText={onchangeHandler2}
              value={input2}
              style={styles.input}
              // onChangeText={onChangeText}

              placeholder={
                (contextData.languageLt && `grupė, pavyzdžiui - maistas`) ||
                `gruppo come il cibo`
              }
              onSubmitEditing={inputTextHandlersave}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TranslatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: `#008B8B`,
  },

  containerSave: {
    marginTop: 16,
    margin: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});
