import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {

  return (
    <div className='py-6'>
        <form className='flex'>
            <input type='text' placeholder='Search by keyword' className='bg-[#eeeeee] py-3 w-full rounded-tl-xl rounded-bl-xl px-4 outline-none dark:bg-[#464646]' />
            <button className='bg-[#eeeeee] rounded-tr-xl rounded-br-xl px-4 dark:bg-[#464646]'>
                <IoSearch className='text-xl text-[#4096FF]' />
            </button>
        </form>
    </div>
  )
}

export default SearchBar