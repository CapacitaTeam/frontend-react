import React from 'react';
import stepOptions from '../StepsControls/steps';
import classNames from 'classnames';
// Style
import style from '../style.module.scss'

const StepContent = (props) => {
    const {current} = props;
    const className = classNames(style.steps_content)
    const contentProps = { className }
    return <div {...contentProps}>{stepOptions[current].content}</div>
}

export default StepContent;