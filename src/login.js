import React, { useState } from 'react'
import './login.css'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navi = useNavigate()
    const[name,setname]=useState("")
    const getdetails=(e)=>{
        // e.preventDefault()
        if(name.length!=0){
            window.localStorage.setItem('name',name)
            navi('/quiz')
        }
        else{
            window.alert("Please enter your name")
        }
    }
  return (
    <div className='login'>
        <h1 style={{color:'whitesmoke'}}>Login</h1>
        <br></br>
    <form>
        <input type='text' placeholder='Enter Your name' onChange={(e)=>setname(e.target.value)} ></input>
        <br></br>
        <br></br>
        <button onClick={getdetails}>Start Quiz</button>
    </form>
    </div>
  )
}

export default Login