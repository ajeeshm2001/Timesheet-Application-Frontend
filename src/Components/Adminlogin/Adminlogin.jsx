import axios from 'axios';
import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'

function Adminlogin() {
    const navigate = useNavigate();
    const {register,handleSubmit}=useForm();
    const generateErrors = (err)=>{
        toast.error(err,{
        position:"top-center"
        })
    }
    const onSubmit=async(details)=>{
        const {data}=await axios.post("http://localhost:5000/admin",{details},{withCredentials:true})
        if(data){
            if(data.error){
                if(data.error.message)  generateErrors(data.error.message)
            }else{
                navigate('/adminhome')
            }
        }
    }
  return (
    <div className='loginbody'>
        <div className="logincontainer">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter Your Email Address' {...register("email")}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter Your Password' {...register("password")}/>
                </div>
                <button type='submit'>Login</button>
                <ToastContainer toastStyle={{backgroundColor:'black'}}/>

            </form>
        </div>
       
    </div>
  )
}

export default Adminlogin