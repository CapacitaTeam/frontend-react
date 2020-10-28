/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Steps from 'antd/lib/steps';
import stepsOptions from './steps';

const StepsControl = (props) => {  
  return <Steps current={props.current} >
          {
            stepsOptions.map(item => <Steps.Step key={item.title} title={item.title} description={(item.description)?item.description:null} /> )
          }
        </Steps> 
};
  
export default StepsControl;