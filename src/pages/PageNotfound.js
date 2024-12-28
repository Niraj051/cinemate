import React from 'react'
import error from "../assest/cinemate.png";
import { Link } from 'react-router-dom';
import { Button } from '../component';
import { useEffect } from 'react';

export const PageNotfound = () => {
  useEffect(()=>{
    document.title="PageNotFound/Cinemate"
  },)
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
     
        <div className='flex flex-col items-center my-1'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops</p>
          <div className='max-w-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
             <img src={error} alt="404" />           
          </div>
          

        </div>
        <div className='flex justify-center py-2 '>
            <Link to="/">
               <Button children="Back to Cinemate" />
            </Link>
           
            
        </div>
       
      </section>
    </main>
  )
}
