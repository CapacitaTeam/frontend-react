import React from 'react';

const StepContent = (props) => {
    return <div>
        {(props.current == 0)?<h1>Datos generales</h1>:(props.current == 1)?<h1>Recursos</h1>:<h1>Resumen</h1>}
    </div>
}

export default StepContent;