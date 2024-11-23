import React, { useState } from 'react'
import Data from '../utils/mook'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const[data, setData] = useState(Data)
  return (
    <div className='flex justify-between px-[100px] py-10'>
      {
        data.map((v) =>(
            <NavLink to={v.navigation}>
            <p>{v.title}</p>

            </NavLink>
        ))
      }
    </div>
  )
}

export default Navbar
