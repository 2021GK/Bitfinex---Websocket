import React, {createContext, useState} from 'react';




export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [loggedIn, setLoggedIn]=useState(false);







    function logIn() {
        setLoggedIn(loggedIn=>!loggedIn)
    }


    return (<GlobalContext.Provider value={{loggedIn, logIn}}>
        {children}
    </GlobalContext.Provider>);

}