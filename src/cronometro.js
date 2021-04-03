import './App.scss'
import React, { useState, useRef } from 'react'
import { FaPlay, FaStop, FaPause } from 'react-icons/fa'

export function Cronometro () {
  const [state, setState] = useState({
    minutos: 0,
    segundos: 0
  })
  const [intervalId, setIntervalId] = useState(0)
  const operacao = useRef('initial')
  const [op, setOp] = useState('initial')

  function formatTimer( min, seg) {
    let m = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(min)
    let s = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(seg)
    return `${m}:${s}`
  }

  function setStateParar() {
    operacao.current = 'stop'
    setState( currVal => ({ 
      ...currVal, segundos: 0 , minutos: 0 }));
    setOp('stop')
    clearInterval(intervalId)
  }

  function setStatePause() {
    if(operacao.current !== 'pause'){
      operacao.current = 'pause'
      setOp('pause')
      clearInterval(intervalId)
    }
  }

  function setStatePlay() {
    if(operacao.current !== 'play') {
      operacao.current = 'play'
      setOp('play')
      timer()
    }
  }

  function incrementar () {
    setState( currVal => ({ 
      ...currVal, 
      minutos: currVal.segundos === 59 ? currVal.minutos + 1 : currVal.minutos,
      segundos: currVal.segundos === 59 ? 0 : currVal.segundos + 1
    }));
  }

  function timer(){
    setIntervalId(
      setInterval(() => {
        if(operacao.current === 'play' || op === 'play') {      
        incrementar()
      } 
      }, 1000)
    )
  }

  return (
    <div>
      <div className='time'>{formatTimer(state.minutos, state.segundos)}</div>
      <div className='actions'>
        <button className={['btnDefault btn', op === 'play' ? 'isActive' : ''].join(' ')} 
          onClick={setStatePlay}><FaPlay/>Iniciar</button>
        <button className={['btnOutlined btn', op === 'pause' ? 'isActivePause' : '' ].join(' ')} 
          disabled={ op === 'initial' || op === 'stop' }
          onClick={setStatePause}><FaPause/>Pausar</button>
        <button 
          disabled={ op !== 'play' }
          className={['btnOutlined btn', op === 'stop' ? 'isActivePause' : '' ].join(' ')}
          onClick={setStateParar}><FaStop />Parar</button>
      </div>
    </div>
  );
}