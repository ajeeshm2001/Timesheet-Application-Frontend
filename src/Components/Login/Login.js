import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import '../Login/Login.css'
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const {register,handleSubmit}=useForm();
    const generateErrors = (err)=>{
        toast.error(err,{
            position:"top-center"
        })
    }
    const onSubmit =async(details)=>{
        
        const {data}= await axios.post("http://localhost:5000/login",{details},{withCredentials:true})
        console.log(data);
            if(data){
                if(data.errors){
                    const {email,password,message} = data.errors
                    if(email) generateErrors(email)
                    else if (password) generateErrors(password)
                    else if (message) generateErrors(message)
                }
                else{
                    navigate('/')
                }
            }
       
    }
  return (
    <div className='loginbody'>
        <div className="logincontainer">
            <h2>Login Into ....</h2>
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
                <span>Didnt have an account ? <Link to={'/register'}>Create One</Link></span>
                <ToastContainer toastStyle={{backgroundColor:'black'}}/>

            </form>
        </div>
       
    </div>
  )
}

export default Login