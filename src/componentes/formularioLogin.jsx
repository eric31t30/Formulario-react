import React from 'react'
import './formularioLogin.css';
import {useForm} from 'react-hook-form'

import iconFacebook from '../icons/facebook-svg.svg';
import iconGoogle from '../icons/google-svg.svg';
import iconTwitter from '../icons/twitter-svg.svg';

import { IoPersonSharp } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";




export default function FormularioLogin({ callSign }) {
  
  const {register, formState: { errors }, handleSubmit} = useForm();
  
    const onSubmit = (data) =>{
        console.log(data)
    }

    return(
    <div className='cont-form cont-form-login'>
        <h2 className='h2-login'>Iniciar <span className='tittle-login'>Sesion</span> </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='form' autoComplete='off'>
            
            <div className='cont-input cont-input-login'>
                <IoPersonSharp className='icon'/>
                <input type='text' placeholder=" " {...register('Nombre' ,{
                    required: true,
                    maxLength: 10
                })} />
                <label className='form-label'>Nombre</label>
            <span className="form-line"></span>
            {errors.Nombre?.type === 'required' && <p>el campo nombre es requerido</p>}
            {errors.Nombre?.type === 'maxLength' && <p>nombre es muy largo</p>}
            </div>
           
            <div className='cont-input cont-input-login'>
                <MdOutlinePassword  className='icon' />
                <input type='text' placeholder=" " {...register('Contraseña', {
                    required: true,
                    minLength: 5,
                })}/>
                <label className='form-label' >contraseña</label>
            <span className="form-line"></span>
            {errors.Contraseña?.type === 'minLength' && <p>la contraseña es demasiado corta</p>}
            {errors.Contraseña?.type === 'required' && <p>el campo contraseña es requerido</p>}
            </div>
            
            <div className='cont-input input-checkbox input-checkbox-login'>
                <input type='checkbox' className='checkbox' {...register('Terminos' ,{
                    required: true
                })}/>
                <label className='label-checkbox label-checkbox-login'>recordarme</label>
                {errors.Terminos?.type === 'required' && <p className='text-checkbox'>la casilla es requerida</p>}
            </div>
            
            
            <input type='submit' value="Iniciar Sesion" className='button button-login' />

            <div className='cont-social'> O registrarse con :
                <img src={iconFacebook} className='social' alt='icon'/>
                <img src={iconGoogle} className='social' alt='icon'/>
                <img src={iconTwitter} className='social' alt='icon'/>
            </div>

            <div className='registrate'>¿Aun no tienes cuenta? <span className='registrate-deco' onClick={callSign}>Registrate</span></div>
        </form>
    </div>
  )
}
