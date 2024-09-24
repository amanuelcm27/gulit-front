import React from 'react'

const NavItem = ({name , otherStyles , handleClick}) => {
  return (
    <span className={`p-2 m-2 ${otherStyles} transition-all font-bold duration-100 ease-out hover:border-b-2 cursor-pointer`}>
        {name}
    </span>
  )
}

export default NavItem