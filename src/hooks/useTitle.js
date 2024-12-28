import  { useEffect } from 'react'

export const useTitle = (data) => {
    useEffect(()=>{
        document.title=data;

    })
  
  
}
