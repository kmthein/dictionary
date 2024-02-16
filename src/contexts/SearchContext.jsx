import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [currentContent, setCurrentContent] = useState();

    const [error, setError] = useState(null);

    return (
        <SearchContext.Provider value={{ currentContent, setCurrentContent, error, setError }}>
            {children}
        </SearchContext.Provider>
    )
}