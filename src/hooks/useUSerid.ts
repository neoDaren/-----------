import { useState,useEffect } from "react"


export const useUserId = () => {
    const[userId, setUserId]=useState()
    useEffect(()=>{
     const savedUserId=localStorage.getItem("userData")
    if(savedUserId){
        setUserId(JSON.parse(savedUserId))
    }
   
},[])
return userId
}