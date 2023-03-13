import { createContext } from "react"


const NewContext = createContext({ addFavorite: (action, group, word) => { }, favorites: [``][``], props: ``, recent: [``][``], nightOn: false, languageLt: true });

export default NewContext



// function NewContextProvider({ children }) {
//     return (<NewContext.Provider value="{value}">{children}</NewContext.Provider>)
// }
// export default NewContextProvider;