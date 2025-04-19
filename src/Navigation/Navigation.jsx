import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUserAdd } from 'react-icons/ai'

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" placeholder='Enter your search Shoe' className='search-input' />
      </div>
      <div className='profile-container'>
        <a href='#'> 
          <FiHeart className='nav-icons' />
        </a>
        <a href='#'> 
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href='#' className=""> 
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
