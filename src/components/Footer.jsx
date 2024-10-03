import React from 'react'
import images from '../constants/images'

const Footer = () => {
  return (
    <div className="flex max-sm:flex-col h-[400px] max-sm:h-auto  bg-orange-400">
    <div className="flex flex-col">
      <img src={images.logo} className="w-[40%] max-sm:w-[30%]" />
      <div className="m-10 flex-col flex text-white font-bold max-sm:text-xl max-sm:m-4 text-2xl cursor-pointer">
        <span className=" hover:underline p-2">Stores</span>
        <span className=" hover:underline p-2">Products</span>
        <span className=" hover:underline p-2">About</span>
      </div>
    </div>
    <div className="flex sm:hidden m-4 ">
      <span className="text-white text-xl p-2">
        <i className="fa-brands fa-youtube"></i>
      </span>
      <span className="text-white text-xl p-2">
        <i className="fa-brands fa-linkedin"></i> 
      </span>
      <span className="text-white text-xl p-2">
        <i className="fa-brands fa-tiktok"></i> 
      </span>
    </div>
    <div className="flex flex-col max-sm:hidden  m-10 mt-auto ml-auto">
      <span className="text-white text-xl p-2">
        <i className="fa-brands fa-youtube"></i> YouTube
      </span>
      <span className="text-white text-xl p-2">
        <i className="fa-brands fa-linkedin"></i> LinkedIn
      </span>
      <span className="text-white text-xl p-2">
        <i className="fa-brands fa-tiktok"></i> Tiktok
      </span>
    </div>
  </div>
  )
}

export default Footer