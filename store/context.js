import { createContext } from "react"


const NewContext = createContext({ addFavorite: (action, data, data2) => { }, favorites: [], props: [], recent: [], nightOn: `` });

export default NewContext

const value = {
    vardas: [`donatas`]
}
// function NewContextProvider({ children }) {
//     return (<NewContext.Provider value="{value}">{children}</NewContext.Provider>)
// }
// export default NewContextProvider;