import React, { useState, useEffect } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';

function App() {

  const [ totalPresupuesto, setTotalPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ pregunta, setPregunta ] = useState(true);
  const [ gastos, setGastos] = useState([]);
  const [ gasto, guardarGastos] = useState({});
  const [ crearGasto, setCrearGasto ] = useState(false);

  useEffect(() => {

    if(crearGasto){
      setGastos([
        ...gastos,
        gasto
      ]);

      const presupuestoRestante = (restante - gasto.valorGasto);
      setRestante(presupuestoRestante);

      setCrearGasto(false);
    }

  }, [gasto, setGastos, gastos, crearGasto, restante])

  return (
    <>
      <div className="container mt-5">
        <h1 className="titulo-gasto">Gasto Semanal</h1>
        <div className="contenido-principal mt-5">
          { pregunta ? 
          (
            <Pregunta
            setTotalPresupuesto={setTotalPresupuesto}
            setRestante={setRestante}
            setPregunta={setPregunta}
          />
          ) 
          :(
            <div className="row mt-3">
              <div className="col-md-6">
              <Formulario
                guardarGastos={guardarGastos}
                setCrearGasto={setCrearGasto}
                restante={restante}
              />
              </div>
              <div className="col-md-6">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  totalPresupuesto={totalPresupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )
          }

        </div>
      </div>
    </>
  );
}

export default App;
