import React from 'react';
import useClima from '../hooks/useClima';

const Alerta = () => {

    const {alerta} = useClima();
  return (
    <div className='alerta'>{alerta}</div>
  )
}

export default Alerta