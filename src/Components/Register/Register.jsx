import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'

function Register() {
    const navigate = useNavigate()
    const {register,handleSubmit}=useForm();
    const generateErrors = (err)=>{
        toast.error(err,{
            position:"top-center"
        })
    }
    const onSubmit =async(details)=>{
        
        const {data} = await axios.post("http://localhost:5000/register",{details},{withCredentials:true})
            if(data){
                if(data.errros){
                    const {email} = data.errors
                    if(email) generateErrors(email)
                }
                else{
                    navigate('/login')
                }
            }
        
    }
  return (
    <div>
        <div className="logincontainer">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' {...register("name",{required:true})}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter Your Email Address' {...register("email",{required:true})}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter Your Password' {...register("password",{required:true})}/>
                </div>
                <button type='submit'>Register</button>
                <span>Already have an account ? <Link to={'/login'}>Login</Link></span>
                <ToastContainer toastStyle={{backgroundColor:'black'}}/>
            </form>
        </div>
    </div>
  )
}

export default Register