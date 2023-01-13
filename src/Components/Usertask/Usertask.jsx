import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';

function Usertask() {
    const [check,setChecked]=useState();
    const [task,setTask]=useState([]);
    const [user,setUser]=useState();
    const [cookie,setCookie,removeCookie]=useCookies([])
    const navigate = useNavigate();
    const checked = (event)=>{
        console.log(new Date());
        event.target.checked?setChecked(event.target.value):setChecked('')
    }
    useEffect(()=>{   
        axios.post('http://localhost:5000/gettask',{cookie:cookie.usertoken},{withCredentials:true}).then((data)=>{
            setTask(data.data.task)
            setUser(data.data.user)

        })  
    },[])
    const submit =async(val)=>{
       const {data}=await axios.post('http://localhost:5000/updatetask',{val,userId:user},{withCredentials:true})
       navigate('/usercompleted')

    }
  return (
    <div className='container m-5'>
        
        {task.length>0?task.map((Element)=>{
            return (
            <div className="card m-3">
  <div className="card-header">
  {Element.taskname}
  </div>
 
  <div className="card-body">
    <h5 className="card-title">Deadline : {Element.deadline}</h5>
    <p className="card-text">{Element.description}</p>
    <input className="form-check-input me-2" type="checkbox"  id="flexCheckDefault" value={Element._id} onChange={checked}/>
    <label className="form-check-label" for="flexCheckDefault"><b>Completed</b>
  </label>
  <br></br>
  {console.log(Date.now())}
                
  {new Date()>Element.deadline?<p className='text-danger'>Due</p>:check===Element._id&&<button value={Element._id}  onClick={()=>submit(Element._id)} className='mt-3'>Submit</button>}

    
  </div>
</div>  )      }):<h2 className='container'>There is no task</h2>}
                
    </div>
  )
}

export default Usertask