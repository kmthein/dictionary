import axios from 'axios';
import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { SearchContext } from '../contexts/SearchContext';
import { UiContext } from '../contexts/UiContext';

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  const {setCurrentContent} = useContext(SearchContext);

  const {setLoading} = useContext(UiContext);

  const searchSubmitHandler = async (e) => {
    setCurrentContent(undefined);
    setLoading(true);
    e.preventDefault();
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
    setInput("");
    setLoading(false);
    setCurrentContent(response.data);
  }

  return (
    <div className='py-6'>
        <form className='flex' onSubmit={searchSubmitHandler}>
            <input type='text' placeholder='Search by keyword' name='input' onChange={handleInputChange} className='bg-[#eeeeee] py-3 w-full rounded-tl-xl rounded-bl-xl px-4 outline-none dark:bg-[#464646]' />
            <button type='submit' className='bg-[#eeeeee] rounded-tr-xl rounded-br-xl px-4 dark:bg-[#464646]'>
                <IoSearch className='text-xl text-[#4096FF]' />
            </button>
        </form>
    </div>
  )
}

export default SearchBar