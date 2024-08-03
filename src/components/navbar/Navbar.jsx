import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.scss'
const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false)
  return (
    <>
    <div className='nav1'>
        <div  className='nav1-1'>
            
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
        </div>
        {/* <div className='nav1-2'>
            <Link to="/Login">Login/</Link>
            <Link to="/Signup">Signup</Link>
        </div> */}
        <div className='nav1-p' onMouseEnter={()=>{setShowDropdown((prevState)=>{return true});
        }} onMouseLeave={()=>{setShowDropdown((prevState)=>{return false})}} >
            <Link style={{width:"100px"}} to="/Profile"   >Profile</Link>
            {showDropdown && <div>
            <div style={{border:"2px solid black", height:"100px", width:"100px",position:'absolute'}} ></div>    
        </div>}
    </div>
        
    </div>
        
    </>
  )
}

export default Navbar