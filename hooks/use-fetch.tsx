const useFetch = async function (word: string, targetLanguage: string) {
  let result;
  //  const url = `https://praktika-35815-default-rtdb.europe-west1.firebasedatabase.app/${targetLanguage}/${word}.json`;
  const url = `https://praktika-35815-default-rtdb.europe-west1.firebasedatabase.app/${targetLanguage}/${word}.json`;
  try {
    const response = await fetch(url);

    result = await response.json();
  } catch (error: any) {
    result = [[`error`], [error.message]];
  }

  if (!result) {
    result = [`error`, `zodis nerastas`];
  }

  return result;
};

export default useFetch;
