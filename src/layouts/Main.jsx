import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Content from '../components/Content'
import { UiContext } from '../contexts/UiContext'

const Main = () => {
    const {darkMode} = useContext(UiContext);

    useEffect(() => {
        if(darkMode ||
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
          ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        console.log(darkMode);
    })

  return (
    <div className=' dark:bg-[#202020] dark:text-white min-h-screen'>
    <div className=' w-[90%] md:w-[80%] xl:w-[50%] mx-auto'>
        <Navbar />
        <SearchBar />
        <Content />
    </div>
    </div>
  )
}

export default Main