import React, {useState, createContext} from "react";

export const GlobalContext = createContext();




export const GlobalContextProvider = props => {
    const [globalContext, setGlobalContext] = useState({
        lang: 'port',
        render: 'landingPage'});
    
    return (
        <GlobalContext.Provider value={[globalContext, setGlobalContext]}>
            {props.children}
        </GlobalContext.Provider>
        
    );
};