import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [currentContent, setCurrentContent] = useState();

    return (
        <SearchContext.Provider value={{ currentContent, setCurrentContent }}>
            {children}
        </SearchContext.Provider>
    )
}