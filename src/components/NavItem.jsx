import React from 'react'

const NavItem = ({name , handleClick}) => {
  return (
    <span className='p-2 m-2 text-white transition-all font-bold duration-100 ease-out hover:border-b-2 cursor-pointer'>
        {name}
    </span>
  )
}

export default NavItem