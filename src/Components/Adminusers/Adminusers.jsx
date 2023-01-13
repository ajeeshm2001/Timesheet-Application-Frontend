import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Adminusers() {
    const [users,setUsers] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
      axios.get('http://localhost:5000/getusers',{},{withCredentials:true}).then((data)=>{
        console.log(data);
        console.log(data.data.users);
        setUsers(data.data.users)
      })
    },[])
    const adduser = ()=>{
        navigate('/addusers')
    }
    const addtask = ()=>{
        navigate('/addtask')
    }
    

  return (
    <div>
       <div className='container'>

       <h2>Users List</h2>
       <button className='mb-3' onClick={adduser}>Add User</button>
       <button className='ms-3' onClick={addtask}>Add Today Task</button>

<table className="table">
  <thead className="thead table-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>{
            return(
                <tr>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td></td>
    </tr>
            )
        })
    }
    
  </tbody>
</table>
    </div>
    </div>

  )
}


export default Adminusers