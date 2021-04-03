
import React from 'react'
import { Cronometro } from './cronometro'

function App() {

  return (
    <div className='App'>
      <div className="header">
       <h2>Cronometro</h2> 
      </div>
      <div className='body'>
          <Cronometro/>
      </div>
      <div className='footer'>
        <span>Produzido por <a href={'/'}>@katiacih</a></span>
      </div>
    </div>
  );
}

export default App;
