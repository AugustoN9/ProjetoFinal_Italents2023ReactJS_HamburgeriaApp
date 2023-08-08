import React, { useState } from 'react';
import image from '../../assets/Banner.jpg'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authService';

const Register = () => {

    const navigate = useNavigate();

    const [ inputValues, setInputValues ] = useState({
        nomeCompleto: '',
        email: '',
        emailConfirma: '',
        senha: '',
        senhaConfirma: ''
    })

    const handleChangeValues = (evento) => {
        setInputValues({
            ...inputValues,
            [ evento.target.name ]: evento.target.value 
        })
        console.log(inputValues);
    }

    const handleSignupForm = async (event) => {
        event.preventDefault();
        console.log(inputValues)
        const response = await registerUser(inputValues);
        if(response){
            alert(`Usuario ${response.data.nome} cadastrado com sucesso!`)
            navigate('/admin');
        }
    }

    return (
        <div 
            style={{'--image-url': `url(${image})`}} 
            className='bg-[image:var(--image-url)] flex w-full justify-center h-[90vh] bg-cover'>
            <form action='#' className='flex flex-col py-5 my-10' onSubmit={handleSignupForm}>
                <h1 className='text-4xl text-white'>Formulário de Cadastro</h1>
                <label className='text-xl text-white mx-0 my-0'>Nome do Usuario</label>
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='text' name='nomeCompleto'  placeholder='Nome Completo' onChange={handleChangeValues} required /> 
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='email' name='email'  placeholder='E-mail' onChange={handleChangeValues} required />
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='email' name='emailConfirma'  placeholder='Confirme o E-mail' onChange={handleChangeValues} required />
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='password' name='senha'  placeholder='Senha' onChange={handleChangeValues} required />
                <input className='@apply text-l border flex items-center mx-0 my-[10px] rounded-[5px] w-full placeholder:text-blue-300 placeholder:italic placeholder: px-5 py-2' type='password' name='senhaConfirma'  placeholder='Confirme a Senha' onChange={handleChangeValues} required />
                <button className='@apply btn text-l border bg-red-900 text-white text-center py-2 my-5 rounded-[5px] w-full' type='submit'>Cadastrar</button>            
            </form>      
        </div>
    )
}

export default Register;
