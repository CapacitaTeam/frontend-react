import React, { useState } from 'react'
import { Input, Row, Col, Divider } from 'antd';
import FormPregunta from './Form';
import Questions from './Questions';

import QuestionContext from './QuestionContext';

const CreateQuiz = () => {

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

    const [question, setQuestion] = useState(initialState)

    const guardarPregunta = e => {        
    }

    const onFinish = (props) => {

        //setQuestion({...question, })

        console.log(props);
    }

    const valuesChanged = e => console.log(e);

    //Aplicar Context 

    return (
        <QuestionContext.Provider value={{question, setQuestion}}>
            <Row>
                <Col span={7}>
                    <Questions />
                </Col>

                <Col className="text-center" span={1}>
                    <Divider type="vertical" style={{ height: '100%' }} />
                </Col>

                <Col span={16}>
                    <FormPregunta onFinish={onFinish} />
                </Col>
            </Row>
        </QuestionContext.Provider >
    )
}

export default CreateQuiz;