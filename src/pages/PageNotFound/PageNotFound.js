import React from 'react';
import image404 from '../../assets/404.png';
import './stylePageNotFound.css'

const PageNotFound = () => {
  return (
    <div className=' justify-center items-center top-0 h-[72vh]'>
        <div className='flex justify-center'>
            <div className='w-2/4 items-center '>
                <h1 className='titulo'>404</h1>
            </div>
            <div className='w-2/6 items-center '>
                <img  src={image404}/>      
            </div>
        </div>
        <div className=' '>
            <h2 className='subtitulo'>Page Not Found</h2>
        </div>
    </div>
  )
}

export default PageNotFound;
