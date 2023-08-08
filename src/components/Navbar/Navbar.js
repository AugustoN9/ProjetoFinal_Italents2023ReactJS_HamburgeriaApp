import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/LogoBurgeria.png';
import { AuthContext } from '../../context/AuthContext';
import { BsFillCartFill } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import avatar from '../../assets/avatar.jpg'


const Navbar = () => {
  const { userLogged, logoutUser } = useContext(AuthContext);
  console.log("Valor do context", userLogged);

  const navigate = useNavigate();

  return (

      <header className='bg-transparent z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
                <Link to='/'>
                  <img src={logo} alt='Logo' className='min-w-[120px] cursor-pointer'  />
                  </Link>
                <h1 className='hidden text-center text-3xl font-semibold text-gray-700 md:block '>Hamburgeria App</h1>
            </div> 
            {userLogged ? (
              <div className='flex items-center justify-end space-x-4'>
                <div className='relative flex cursor-pointer'>
                  <span className='bg-primary w-4 h-4 rounded-full flex items-center justify-center text-white absolute -right-2 -top-2'>2</span>
                  <BsFillCartFill className='w-8 h-8 p-0 cursor-pointer' />
                </div>
                  <img src="" alt=""  />
                  <p className='text-gray-700'>Bem vindo,  </p>
                  <Link to={'/admin'}>Admin</Link>
                  <img src={avatar} alt='Avatar Usuario' className='w-[60px] rounded-full border-gray-900 border-2 cursor-pointer' />
                  < MdLogout className='w-6 h-6 cursor-pointer' onClick={ logoutUser }/>
              </div>
            ): 
            (
              <div className='flex items-center justify-end space-x-6'>
                    <button onClick={() => navigate('/login')} className='text-xl font-light' >Login</button>
                    <button  onClick={() => navigate('/register')} className='bg-primary px-6 py-2 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
              </div>
            )}
                       
        </nav>
      </header>
  
  )
}

export default Navbar
