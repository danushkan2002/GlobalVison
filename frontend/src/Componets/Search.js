import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const Search = () => {
  return (
    <form className='border w-full h-1vh flex justify-center items-center'>
      <input type='text' placeholder='Type Id' className='text-base bg-white outline-none h-full w-full py-2 px-6 ' />
      <button type='submit'>
        <BsArrowRightShort className='w-10 h-10 my-auto mx-5'/>
      </button>
    </form>
  )
}

export default Search