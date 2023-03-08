const useFetch = async function (word: string, targetLanguage: string) {
  //const apiKey = "AIzaSyDNAlQw5AUnaO5DNH7SOMODFCD8ucnBTd";

  const url = `https://praktika-35815-default-rtdb.europe-west1.firebasedatabase.app/${targetLanguage}/${word}.json`;

  const response = await fetch(url);

  const result = await response.json();

  //console.log(result.data.translations[0].translatedText);
  // console.log(result);
  return result;
};

export default useFetch;
