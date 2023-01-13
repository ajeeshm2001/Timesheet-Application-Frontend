import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Usercompleted() {
    const [check,setChecked]=useState();
    const [task,setTask]=useState([]);
    const [cookie,setCookie,removeCookie]=useCookies([])
    const navigate = useNavigate();
    const checked = (e)=>{
        setChecked(e.target.checked)
    }
    useEffect(()=>{   
        axios.post('http://localhost:5000/completedtask',{cookie:cookie.usertoken},{withCredentials:true}).then((data)=>{
            setTask(data.data.task)
            console.log(task);
        })  
    },[])
   
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
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <input className="form-check-input me-2" type="checkbox"  id="flexCheckDefault" checked/>
    <label className="form-check-label" for="flexCheckDefault"><b>Completed</b>
    <p>Time : {Element.users.completedtime}</p>
  </label><br></br>
  </div>
</div>  )      }):<h2 className='container'>There is No Completed Task</h2>}
                
    </div>
  )
}

export default Usercompleted