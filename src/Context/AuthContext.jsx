import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {


    const [token,setToken] = useState()
    const navigate = useNavigate()
    
   

    const authenticateUser = async(email,password)=>{

        const requestBody = {
            email: email,
            password: password,
            appType: 'ott',
          };
          const response = await axios.post('https://academics.newtonschool.co/api/v1/user/login',requestBody,{
            headers: {
              projectId: 'lzex6csx2fvp',
              'Content-Type': 'application/json',
            },
          })



          console.log(response);
          if(response?.status === 200){
            navigate('/')
          }
          setToken(response?.data?.token);
          localStorage.setItem('authToken',response?.data?.token);
        
    }
  useEffect(() => {
   const userInLocalStorage =  localStorage.getItem('authToken')
   if(userInLocalStorage){
    setToken(userInLocalStorage)
    navigate('/')
   }else{
    navigate('/login')
   }

  }, [])

  return (
    <AuthContext.Provider
      value={{ authenticateUser,token }}
    >
      {children}
    </AuthContext.Provider>
  )
}
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext)
}