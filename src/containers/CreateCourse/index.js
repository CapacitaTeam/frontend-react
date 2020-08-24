/* eslint import/no-webpack-loader-syntax: off */
import React, { useState } from 'react';
import StepsControl from './StepsControls';
import ButtonControls from './ButtonControls';
import StepContent from './StepContent';

const CreateCourse = () => {

  const [current,setCurrent] = useState(0);
  const [children,setChildren] = useState(<h1>Datos Generales</h1>);

  const onChangeStep = (value) => {
    setCurrent((value)?current+1:current-1);
  }

  const onChangeChildren = (value) => {
    setCurrent(value);
  }
  
  return <div>
    <StepsControl current={current}/>
    <hr/>
    <ButtonControls current={current} handleChange={onChangeStep} handleChangeChildren={onChangeChildren}/>
    <hr/>
    <StepContent current={current}/>
  </div>
};
  
export default CreateCourse;