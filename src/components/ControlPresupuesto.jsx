import React from 'react';
import { revisarPresupusto } from '../components/Helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({ totalPresupuesto, restante }) => {
    return (
        <>
        <div className="alert alert-primary">
            Presupuesto: ${totalPresupuesto}
        </div>
        <div className={revisarPresupusto(totalPresupuesto, restante)}>
            Restante: ${restante}
        </div>
        </>
    )
}

ControlPresupuesto.propTypes = {
    totalPresupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto
