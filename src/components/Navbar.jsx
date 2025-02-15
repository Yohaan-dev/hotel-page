import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from "../assets/images/company-logo1.png"

const Navbar = () => {
  const linkActive = ({isActive})=> isActive ? "bg-black text-white p-2 rounded-md inline uppercase baseline cursor-pointer focus:outline-none hover:text-blue-300" : "inline uppercase baseline cursor-pointer focus:outline-none hover:text-blue-300"

  return (
      <div className="bg-blue-950 relative container-md mx-auto flex items-center justify-between">
          <img className="sm:flex sm:w-auto pt-8 sm:pl-48 w-32 h-32" src={logo} alt="logo" />
          <div className="hidden md:flex space-x-8 items-center text-white pr-10">
              <NavLink className={linkActive} to="/">Home</NavLink>
              <NavLink className={linkActive} to="/about">About</NavLink>
        <NavLink className={linkActive} to="/service">Service</NavLink>
      </div>
      <NavLink className="hidden md:flex text-gray-400 items-center cursor-pointer px-4 p-2 border border-spacing-1 mr-10 hover:bg-slate-400 hover:text-black" to="/get-a-quote">Get A Quote</NavLink>
    </div>
  )
}

export default Navbar