import React from "react";
import Formulario from "./Formulario";
import ResultadoClima from "./ResultadoClima";


const AppClima = () => {
  return (
    <>

      <main className="dos-columnas">
    
          <Formulario />
          
          <ResultadoClima />
      
      </main>
    </>
  );
};

export default AppClima;
