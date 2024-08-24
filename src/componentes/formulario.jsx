import React, { useRef } from 'react'
import './fondo.css';
import FormularioSign from './formularioSign'
import FormularioLogin from './formularioLogin';

export default function Formulario() {

  const login = useRef();
  const sign = useRef();

  const callLogin = () => {
    
    if (login.current) {
      login.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const callSign = () => {
    
    if (sign.current) {
      sign.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  
  
  return (
    <div className='container-fondo'>
        
        <div className='cont-sign' ref={sign}>
          <div className='container-form'>
              <FormularioSign  callLogin={callLogin}/>
          </div>
        
          <div className='fondo-imagen'>
              <div className='fondo fondo-sign'></div>
          </div>
        </div>

        <div className='cont-login'  ref={login}>
          <div className='fondo-imagen'>
              <div className='fondo fondo-login'></div>
          </div>

          <div className='container-form'>
              <FormularioLogin callSign={callSign}/>
          </div>
        </div>
    </div>
  )
}





