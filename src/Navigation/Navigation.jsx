import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUserAdd } from 'react-icons/ai'

const Navigation = () => {
  return (
    <nav className='flex justify-around items-center border-b-2 border-[#f3f3f3] p-5 z-[999] ml-8'>
      <div className="nav-container">
        <input type="text" placeholder='Enter your search Shoe' className='py-3 px-5 border-none bg-[#f7f6f6] outline-none mr-5 rounded relative w-56' />
      </div>
      <div className='flex flex-row items-center justify-center gap-4'>
        <a href='#'> 
          <FiHeart className='w-6 h-6 ml-8' />
        </a>
        <a href='#'> 
          <AiOutlineShoppingCart className='w-6 h-6 ml-8' />
        </a>
        <a href='#' className=""> 
          <AiOutlineUserAdd className='w-6 h-6 ml-8' />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
