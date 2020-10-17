/* eslint import/no-webpack-loader-syntax: off */
import React, { useState } from 'react';
// components
import StepsControl from './StepsControls';
import ButtonControls from './ButtonControls';
import StepContent from './StepContent';
import stepsOptions from "./StepsControls/steps";

const CreateCourse = () => {

  const [current,setCurrent] = useState(0);

  const onChangeStep = (value) => {
    setCurrent((value)?current+1:current-1);
  }

  const onChangeChildren = (value) => {
    setCurrent(value);
  }
  
  return <div>
    <StepsControl current={current}/>
    <ButtonControls current={current} handleChange={onChangeStep} handleChangeChildren={onChangeChildren} totalOptions={stepsOptions.length}/>
    <hr/>
    <StepContent current={current}/>
  </div>
};
  
export default CreateCourse;