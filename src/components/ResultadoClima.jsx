import React from "react";
import { convertirGrados } from "../helpers";
import useClima from "../hooks/useClima";
import Alerta from "./Alerta";
import Spinner from "./Spinner";

const ResultadoClima = () => {
  const { datosAPI, spinner, alerta } = useClima();
  const { temp_min, temp_max } = datosAPI.temperaturas;
  const { nombre, temperadura } = datosAPI;

  return (
    <div className="contenedor contenido">
      {spinner ? (
        <Spinner />
      ) : alerta !== "" ? (
        <h2>No se encontro la Ciudad</h2>
      ) : datosAPI?.nombre !== "" ? (
        <>
          <h2>{nombre}</h2>
          <p className="temp"><span>{temperadura}</span> &#x2103;</p>
          <p>
            Máx: {parseInt(convertirGrados(temp_max))}&#x2103; Mín: {parseInt(convertirGrados(temp_min))}&#x2103;
          </p>
        </>
      ) : (
        <h2>Comienza buscando</h2>
      )
      }
    </div>
  );
};

export default ResultadoClima;
