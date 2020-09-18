import React, { useState } from 'react'
import { Input, Row, Col, Divider } from 'antd';
import FormPregunta from './Form';
import Questions from './Questions';

const initialState = {
    id: 0,
    question: 'Pregunta Uno',
    answers: [
        {
            id: 1,
            number: 1,
            name: 'OptionOne',
            answer: 'Respuesta #1',
            status: false
        },
        {
            id: 2,
            number: 2,
            name: 'OptionTwo',
            answer: 'Respuesta #2',
            status: false
        },
        {
            id: 3,
            number: 3,
            name: 'OptionThree',
            answer: 'Respuesta #3',
            status: true
        },
        {
            id: 4,
            number: 4,
            name: 'OptionFour',
            answer: 'Respuesta #4',
            status: false
        }
    ],
    correct_answer: 2
};

const CreateQuiz = () => {

    const [state, setState] = useState(initialState);

    const onChangeSwitch = e => {
        console.log('Switch selected: ', e);
        //setState({...state, e.target.value});
    };

    const onChangeInputAnswer = e => {
        console.log('Input typed: ', e.target.value);//.target.value);
        console.log(e);
        //setState({...state, e.target.value});
    }

    const onChangeNameQuestion = e => {
        console.log('Textarea typed: ', e.target.value);
        //setState({...state, e.target.value});
    }

    const guardarPregunta = e => {
        console.log(state);
    }

    const onFinish = (props) => {
        console.log(props);        
        alert(JSON.stringify(props))
    }

    const valuesChanged = e => console.log(e);

    //Aplicar Context 

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
                    <FormPregunta onChange={valuesChanged} onChangeNameQuestion={onChangeNameQuestion} onChangeInputAnswer={onChangeInputAnswer} onChangeSwitch={onChangeSwitch} state={state} onFinish={onFinish} />
                </Col>
            </Row>
        </>
    )
}

export default CreateQuiz;