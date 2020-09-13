import React, { useState } from 'react'
import { Input, Radio, List, Typography, Divider, Button } from 'antd';
import FormPregunta from './Form';

const { TextArea } = Input;

const initialState = {
    id: 0,
    question: '',
    answers: [
        {
            answer_one: '',
            status: false
        },
        {
            answer_two: '',
            status: false
        },
        {
            answer_three: '',
            status: false
        },
        {
            answer_four: '',
            status: false
        }
    ],
    correct_answer: 0
};

const CreateQuiz = () => {

    const [state, setState] = useState(initialState);

    const onChange = e => {
        //console.log('radio checked', e.target.value);
        setState(e.target.value);
    };

    const guardarPregunta = e => {
        console.log(state);
    }

    const onFinish = (e) => console.log(state);

    return (
        <>
            <FormPregunta onChange={onChange} state={state} onFinish={onFinish} />          
        </>
    )
}

export default CreateQuiz;