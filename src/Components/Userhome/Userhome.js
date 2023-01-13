import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'


function Userhome() {
    const navigate = useNavigate();
    const [cookie,setCookie,removeCookie]=useCookies([])
    const [user,setUser]=useState('')
    useEffect(()=>{
        const verifyuser= async()=>{
            if(!cookie.usertoken){
                navigate('/login')
            }else{
                const {data}= await axios.post('http://localhost:5000/',{},{withCredentials:true})
                if(!data.status){
                    navigate('/login')
                    removeCookie()
                }else{
                    setUser(data.user)
                }
            }
          

        }
        verifyuser();
    })
  return (
    <div className='loginbody'>
        <h2>Welcome Back,<b>{user.name}</b></h2></div>
  )
}

export default Userhome