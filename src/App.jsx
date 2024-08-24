import './App.css';
import Formulario from './componentes/formulario';

import github from './imagenes/github.png'

function App() {
  return (
    
    <div className='cont'>
      <Formulario />

      <div className='cont-author'>
        <a className='author' href='https://github.com/eric31t30' target="_blank" rel="noreferrer">eric31t30</a>
        <img src={ github } alt="" className='github-icon'/>
      </div>
    </div>
    
  );
}

export default App;
