import { createContext, useEffect, useState } from "react";

export const UiContext = createContext();

export const UiContextProvider = ({ children }) => {
    const isDarkMode = localStorage.getItem("theme") ? true : false;
    const [darkMode, setDarkMode] = useState(isDarkMode);

    return (
        <UiContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </UiContext.Provider>
    )
}