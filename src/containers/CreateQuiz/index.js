import React, { useState } from 'react'
import { Input, Row, Col, Divider } from 'antd';
import FormPregunta from './Form';
import Questions from './Questions';

const initialState = {
    id: 0,
    question: '',
    answers: [
        {
            id: 1,
            number: 1,
            answer: 'Respuesta #1',
            status: false
        },
        {
            id: 2,
            number:2,
            answer: 'Respuesta #2',
            status: false
        },
        {
            id: 3,
            number:3,
            answer: 'Respuesta #3',
            status: false
        },
        {
            id: 4,
            number:4,
            answer: 'Respuesta #4',
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
            <Row>
                <Col span={7}>
                    <Questions />
                </Col>

                <Col className="text-center" span={1}>
                    <Divider type="vertical" style={{ height: '100%' }} />
                </Col>

                <Col span={16}>
                    <FormPregunta onChange={onChange} state={state} onFinish={onFinish} />
                </Col>
            </Row>
        </>
    )
}

export default CreateQuiz;