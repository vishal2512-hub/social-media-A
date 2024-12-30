import { createContext, useEffect } from "react";
import { useState } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({children}) => {
    const [darkMode, setdarkMode] = useState(
        localStorage.getItem("darkMode")  || false
    );

    const toggle = () => {
        setdarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])


    return (
    <DarkmodeContext.Provider value={{darkMode, toggle}}>
            {children}
        </DarkmodeContext.Provider>
    )
} 