import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button() {
  const navigate = useNavigate()
  return (
    <div className='nav-btn'>
      <button className='navlogin-btn' onClick={()=>navigate('/LogIn')}>LOG IN</button>
      <button className='navlogin-btn' onClick={()=>navigate('BuyPlan')}>BUY PLAN</button>
     
    </div>
  )
}

export default Button
