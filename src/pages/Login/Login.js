import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './styleLogin.css';
import image from '../../assets/Banner.jpg'
import logo from '../../assets/LogoBurgeria - Login.png'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

  const [inputValues, setInputValues ] = useState({
    email: '',
    senha: ''
  });

  const { loginUser } = useContext(AuthContext);
  //const navigate = useNavigate();

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
    console.log(inputValues);
  }

  const handleLogin = async(event) => {
    event.preventDefault();
    loginUser(inputValues);
  }     

  return (
    <div 
    style={{'--image-url': `url(${image})`}} 
    className='bg-[image:var(--image-url)] flex w-full justify-center h-[80vh] bg-cover'>
        <form action='#' className='login-form py-[60px]' onSubmit={handleLogin}>
            <img src={logo} alt='Logo' />
            <div className='form_row'>
                <label><FontAwesomeIcon icon={faUser} /></label>
                <input type='email' name='email'  placeholder='email' required onChange={handleChangeValues} />
            </div> 
            <div className='form_row'>
                <label><FontAwesomeIcon icon={faLock} /></label>
                <input type='password' name='senha'  placeholder='Password' required onChange={handleChangeValues}/>
            </div>  
            <button className='submit_btn'>Login</button>   
            <div className=' text-white py-4 text-center'>
              <p>Ainda não tem conta?<a href='#'> Cadastrar</a></p>              
            </div>      
        </form>      
    </div>
  )
}

export default Login;
