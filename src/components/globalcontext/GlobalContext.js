import React, {useState, createContext} from "react";

export const GlobalContext = createContext();




export const GlobalContextProvider = props => {
    const [lang, setLang] = useState('port')
    return (
        <GlobalContext.Provider value={[lang, setLang]}>
            {props.children}
        </GlobalContext.Provider>
        
    );
};