import React from 'react'
import './formularioSign.css';
import {useForm} from 'react-hook-form'

import { IoPersonSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";



export default function FormularioSign({ callLogin }) {
  
  const {register, formState: { errors },getValues , handleSubmit} = useForm();

  
    const onSubmit = (data) =>{
        console.log(data);
        callLogin();
    }

    const passwordValidation = (value) => {
        const password = getValues('Contraseña');
        return value === password || 'Las contraseñas no coinciden';
    };

    
    return (
    <div className='cont-form'>
        <h2>Regis<span className='tittle-sign'>trarse</span></h2>
        <form onSubmit={handleSubmit(onSubmit)} className='form' autoComplete='off'>
            
            <div className='cont-input'>
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
           
            <div className='cont-input'>
                <IoIosMail className='icon' />
                <input type='text' placeholder=" " {...register('Email' ,{
                    required: true,
                    pattern: /\S+@\S+\.\S+/
                })} />
                <label className='form-label' >Email</label>
            <span className="form-line"></span>
            {errors.Email?.type === 'required' && <p>el campo email es requerido</p>}
            {errors.Email?.type === 'pattern' && <p>el email es incorrecto</p>}
            </div>
          
            <div className='cont-input'>
                <MdOutlinePassword  className='icon' />
                <input type='text' placeholder=" " {...register('Contraseña', {
                    required: true,
                    minLength: 5,
                    validate: passwordValidation
                })}/>
                <label className='form-label' >contraseña</label>
            <span className="form-line"></span>
            {errors.Contraseña?.type === 'minLength' && <p>la contraseña es demasiado corta</p>}
            {errors.Contraseña?.type === 'required' && <p>el campo contraseña es requerido</p>}
            </div>
            

            
            <div className='cont-input'>
                <RiLockPasswordFill  className='icon' />
                <input type='text' placeholder=" " {...register('ConfirmarContraseña', {
                    validate: passwordValidation
                })}/>
                <label className='form-label' >confirmar contraseña</label>
            <span className="form-line"></span>
            {errors.ConfirmarContraseña?.message && (
                <p>{errors.ConfirmarContraseña.message}</p>
            )}
            </div>
           

            
            <div className='cont-input input-checkbox'>
                <input type='checkbox' className='checkbox' {...register('Terminos' ,{
                    required: true
                })}/>
                <label className='label-checkbox'>Acepto los<p>terminos y condiciones</p></label>
                {errors.Terminos?.type === 'required' && <p className='text-checkbox'>la casilla es requerida</p>}
            </div>

            <input type='submit' value="Registrar" className='button' />

            <div className='miembro'>Ya soy <span className='miembro-deco' onClick={callLogin}>Miembro</span></div>
        </form>
    </div>
  )
}
