import React from 'react'
import { useLocation } from 'react-router-dom'
import './score.css'
import { useNavigate } from 'react-router-dom'

const Score = (props) => {

  const navi = useNavigate()

const reattempt=()=>{

  window.localStorage.removeItem('name')
  navi('/')


}


  const {state}=useLocation()
  const name = window.localStorage.getItem('name')
  var x
  if(state==null){
    x=0
    
  }
  else{
    x=state+1
  }
  console.log(state)
  return (
    <div className='score'>
    <div className='score1'>Congratulations {name} the score you received is {x}!!<br></br> <br></br> Not satisfied with your performance <span><button onClick={reattempt}>Attempt again</button></span></div>
    
    </div>
  )
}

export default Score