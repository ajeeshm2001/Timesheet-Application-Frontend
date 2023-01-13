import React from 'react'
import {useCookies} from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

function Userheader() {
    const navigate = useNavigate()
    const [cookie,setCookie,removeCookie]=useCookies([])
    const logout=()=>{
        removeCookie("usertoken")
        navigate('/login')
    }
   

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <Link className="navbar-brand ms-4 text-light" to={'/'}>Home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link className="navbar-brand ms-2 text-light" to={'/usertask'}>Today Task</Link>
      </li> 
      <li class="nav-item active">
        <Link className="navbar-brand ms-2 text-light" to={'/usercompleted'}>Completed Task</Link>
      </li> 
    </ul>
  </div>
  <button onClick={logout} class="btn btn-outline-danger my-2 my-sm-0" type="submit">Log Out</button>
</nav>
  )
}

export default Userheader