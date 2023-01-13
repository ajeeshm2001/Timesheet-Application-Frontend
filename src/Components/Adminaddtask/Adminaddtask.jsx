import axios from 'axios';
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Adminaddtask() {
    const {register,handleSubmit}=useForm();
    const navigate = useNavigate();
    const onSubmit = async(details)=>{
        const {data} = await axios.post("http://localhost:5000/taskassign",{details},{withCredentials:true})
        console.log("hello");
        navigate('/adminhome')
        
    }
  return (
    <div>
        <div className='container mt-5'>
        <h2 className='mb-3'>Add Todays Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
    <label>Enter the Task</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter the Task"{...register("task")}/>
  </div>
  <div className="form-group">
    <label >Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1"{...register("description")}/>
  </div>
  
  <div className="form-group">
    <label >Deadline</label>
    <input type="datetime-local" className="form-control" id="exampleInputPassword1"{...register("deadline")}/>
  </div>
  
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
    </div>
    </div>
  )
}

export default Adminaddtask