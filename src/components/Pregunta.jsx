import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

toast.configure();

const Pregunta = ({ setTotalPresupuesto, setRestante, setPregunta }) => {

    const [ presupuesto, setPresupuesto ] = useState(0);

    const definirPresupuesto = e => {
        setPresupuesto(parseInt(e.target.value))
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        if(presupuesto < 1 || isNaN(presupuesto)){
            toast.error('Debes ingresar un presupuesto válido!');
            return;
        }

        setTotalPresupuesto(presupuesto);
        setRestante(presupuesto);
        setPregunta(false);
    }

    return (
        <>
          <h2>Ingresa tu presupuesto</h2>

          <form onSubmit={agregarPresupuesto}>
            <input
                type="number"
                className="form-control"
                placeholder="Ingresa tu presupuesto"
                onChange={definirPresupuesto}
            />
            <input
                type="submit"
                className="mt-3 form-control btn btn-success"
                value="Ingresa tu presupuesto"
            />
          </form>
        </>
    )
}

Pregunta.propTypes = {
    setTotalPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired
}

export default Pregunta
