import React from 'react'
import { IoPlay } from "react-icons/io5";

const Content = () => {
  return (
    <div className='pt-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>hello</h1>
            <div className=' bg-[#add0fc] py-4 px-4 rounded-full'>
                <IoPlay className='text-xl text-[#3a6ead]' />
            </div>
        </div>
        <span className='text-[#3a6ead] text-xl'>/həˈləʊ/</span>
        <p className='my-2 pt-6 font-bold'>noun</p>
        <p className='my-4 text-lg text-black/60 dark:text-white/60'>Meaning</p>
        <ul className=' ml-6'>
            <li className=' list-disc my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus rem sed eum mollitia</li>
            <li className=' list-disc my-2'>temporibus quibusdam dicta! Sit porro nihil deleniti maxime cumque totam, aspernatur quas libero vel ut. Dicta?</li>
            <li className=' my-2 text-black/60 dark:text-white/60'>"Kuibusdam dicta! Sit porro nihil deleniti maxime cumque totam"</li>
        </ul>
        <p className='my-4 pt-5 text-lg text-black/60 dark:text-white/60'>Synonyms</p>
        <hr />
        <p className='my-2 pt-6 font-bold'>verb</p>
        <p className='my-4 text-lg text-black/60 dark:text-white/60'>Meaning</p>
        <ul className=' ml-6'>
            <li className=' list-disc my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus rem sed eum mollitia</li>
            <li className=' list-disc my-2'>temporibus quibusdam dicta! Sit porro nihil deleniti maxime cumque totam, aspernatur quas libero vel ut. Dicta?</li>
            <li className=' my-2 text-black/60 dark:text-white/60'>"Kuibusdam dicta! Sit porro nihil deleniti maxime cumque totam"</li>
        </ul>
        <p className='my-4 pt-5 text-lg text-black/60 dark:text-white/60'>Synonyms</p>
    </div>
  )
}

export default Content