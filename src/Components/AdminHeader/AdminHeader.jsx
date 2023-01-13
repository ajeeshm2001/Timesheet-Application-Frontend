import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function AdminHeader() {
    const navigate = useNavigate();
    const logout = ()=>{
        navigate('/admin')
    }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className='navbar-brand ms-4 text-light' to={'/adminhome'}>Home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/adminusers'}>Users</Link>
      </li> 
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/dailyreport'}>DailyReport</Link>
      </li> 
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/monthlyreport'}>MonthlyReport</Link>
      </li>
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/adminchart'}>Chart</Link>
      </li> 
    </ul>
  </div>
  <button onClick={logout} class="btn btn-outline-danger my-2 my-sm-0" type="submit">Log Out</button>
</nav>
  )
}

export default AdminHeader