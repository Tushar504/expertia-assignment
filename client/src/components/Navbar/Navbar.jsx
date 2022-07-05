import './Navbar.css'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
export const Navbar=()=>{
    const [text,setText]=useState("")
    const input=useRef(null)
    const navigate=useNavigate()
    return (
        <div className="NavbarMainDiv">
             <Link to={"/"}>Home</Link>
            <div>
              <input ref={input} onChange={(e)=>setText(e.target.value)} type='text' placeholder='City Name'/>
              <Button onClick={()=>{
                if(text!==""){
                    return navigate(`/search?text=${text.charAt(0).toUpperCase() + text.slice(1)}&pagesize=5&page=1`)
                    input.current.value=""
                }
              }} sx={{color:'white',fontWeight:'bold'}} variant="outlined">Search</Button>
              </div>
              <Link to={`/applied/62c41607f4341b168384482c?pagesize=5&page=1`}>Job Applied by you</Link>
         
        </div>
    )
}