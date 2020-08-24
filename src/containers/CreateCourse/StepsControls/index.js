/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Steps from 'antd/lib/steps';

const StepsControl = (props) => {
  
  return <Steps current={props.current} className="site-navigation-steps">
            <Steps.Step title="Datos Generales" description="Descripcion del curso"/>
            <Steps.Step title="Recursos" description="Crear y subir videos" />
            <Steps.Step title="Resumen "  />
        </Steps> 
};
  
export default StepsControl;