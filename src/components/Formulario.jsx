import React from 'react';
import useClima from '../hooks/useClima';
import Alerta from './Alerta';

const Formulario = () => {

    const {busqueda,datosBusqueda,setAlerta,alerta,consultarAPI} = useClima();
    const {ciudad,pais} = busqueda;

    const handleSubmit =(e)=>{
        e.preventDefault();
   
     if(Object.values(busqueda).includes('')){
        setAlerta('Todos los campos son obligatorios');
        return;
    }

    setAlerta('');
    consultarAPI(busqueda);
}

  return (
    <div className="contenedor">
        <form onSubmit={handleSubmit}>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" name="ciudad" id="ciudad" onChange={datosBusqueda} value={ciudad} />
            </div>

            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
                    <option value="">Selecciona el país</option>
                    <option value="MX">México</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CO">Colombia</option>
                    <option value="AR">Argentina</option>
                    <option value="ES">España</option>
                </select>
            </div>

            <input type="submit" value="Consultar Clima" />
        </form>
        {alerta && <Alerta/>}
    </div>
  )
}

export default Formulario