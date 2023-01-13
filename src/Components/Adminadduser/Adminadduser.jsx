import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function Adminadduser() {
    const {register,handleSubmit}=useForm()
    const navigate = useNavigate();
    const onSubmit = async(details)=>{
        const {data} = await axios.post("http://localhost:5000/register",{details},{withCredentials:true})
        console.log(data);
        if(data){
            if(data.errros){
                const {email} = data.errors
            }
            else{
                navigate('/adminusers')
            }
        }
    }
  return (
    <div className='container mt-5'>
        <h2 className='mb-3'>Add a User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Your Name" {...register("name")}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Email" {...register("email",{required:true})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" {...register("password")}/>
  </div>
  <button type="submit" class="btn btn-dark">Submit</button>
</form>
    </div>
  )
}

export default Adminadduser