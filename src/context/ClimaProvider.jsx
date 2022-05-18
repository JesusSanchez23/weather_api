import { createContext,useState } from "react";
import axios from "axios";
import { convertirGrados } from "../helpers";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    })

    const [datosAPI, setDatosAPI] = useState({
        nombre: "",
        temperaturas:{},
        temperadura:''
    })


    const [alerta, setAlerta] = useState('');

    const [spinner, setSpinner] = useState(false);

    const datosBusqueda = async(e)=>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarAPI = async(datos)=>{
        setSpinner(true);
        const key = import.meta.env.VITE_API_KEY;
        const {ciudad,pais} = datos;
        try {
            const urlCoordenadas = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            const {data} = await axios(urlCoordenadas);
            const {lat,lon} = data[0];

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
            const {data:datosClima} = await axios(urlClima);
            console.log(datosClima);
            setDatosAPI({
                temperaturas:datosClima.main,
                nombre:datosClima.name,
                temperadura:convertirGrados(datosClima.main.temp).toFixed(2)
            })
            
        } catch (error) {
            setAlerta('No se encontró la ciudad');
        }
        finally{
            setSpinner(false);
        }
    }

return(
    <ClimaContext.Provider value={{
        busqueda,
        setBusqueda,
        datosBusqueda,
        alerta,
        setAlerta,
        consultarAPI,
        datosAPI,
        spinner
    }}>
        {children}
    </ClimaContext.Provider>
)


}


export {
    ClimaProvider
}

export default ClimaContext;