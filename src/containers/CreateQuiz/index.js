import React, { useState } from 'react'
import { Row, Col, Divider } from 'antd';
import FormPregunta from './Form';
import Questions from './Questions';

import QuestionContext from './QuestionContext';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const QUESTION_QUIZ_REQUEST = gql`  
    query QuestionsQuiz {
        questionsQuiz{
            id
            question
            correct_answer
            a
            b
            c
            d
        }
    }`;

const initialState = {
    id: 0,
    question: '',
    correct_answer: '',
    a: '',
    b: '',
    c: '',
    d: ''
};

const CreateQuiz = () => {

    const [question, setQuestion] = useState(initialState);

    const { loading, error, data } = useQuery(QUESTION_QUIZ_REQUEST);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onFinish = (props) => {
        //setQuestion({...question, })
        console.log(props);
    }

    const valuesChanged = e => console.log(e);

    //Aplicar Context 
    return (
        <QuestionContext.Provider value={{ question, setQuestion, questions: data.questionsQuiz }}>
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