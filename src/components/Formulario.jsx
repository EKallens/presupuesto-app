import React, { useState } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Formulario = ({guardarGastos, setCrearGasto, restante}) => {

    const [gasto, setGasto] = useState('');
    const [valorGasto, setValorGasto] = useState(0);
    const [restanteCero, setRestanteCero] = useState(false);

    const guardarGasto = (e) => {
        e.preventDefault();

        if(restante === 0){
            setRestanteCero(true);
            setGasto('');
            setValorGasto(0);
            toast.error('No alcanza para tu presupuesto!');
            return;
        }

        if(valorGasto < 1 || isNaN(valorGasto) || gasto.trim() === ''){
            toast.error('Debes ingresar un valor correcto!');
            return;
        }

        if(valorGasto > restante){
            toast.error('El valor del gasto debe ser menor!');
            return;
        }
        
        const objGasto = {
            gasto,
            valorGasto,
            id: shortid.generate()
        }

        guardarGastos(objGasto);
        setCrearGasto(true);
        setGasto('');
        setValorGasto(0);
    }

    return (
        <form onSubmit={ guardarGasto }>
            <h2 className="pregunta-titulo">Agrega tus gastos aquí</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. Transporte"
                    value={gasto}
                    onChange={ e => setGasto(e.target.value)}
                    disabled={restanteCero}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="form-control"
                    value={valorGasto}
                    onChange={ e => setValorGasto(e.target.value)}
                    disabled={restanteCero}
                />
            </div>

            <input
                type="submit"
                className="btn btn-primary d-block"
                value="Agregar Gasto"
                disabled={restanteCero}
            />
        </form>
    )
}

Formulario.propTypes = {
    guardarGastos: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired
}

export default Formulario
