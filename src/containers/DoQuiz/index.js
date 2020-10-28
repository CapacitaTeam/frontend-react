import React, { useEffect, useState } from 'react'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import message from 'antd/lib/message';
import FormPregunta from './Form';

import QuestionContext from './QuiestionContext';
import { NetworkStatus } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { SkeletonDoQuiz } from './SkeletonDoQuiz';

import QUESTION_QUIZ_REQUEST from './Queries/QUESTION_QUIZ_REQUEST';

const initialState = {
    id: 0,
    question: '',
    correct_answer: '',
    selected_answer: '',
    a: '',
    b: '',
    c: '',
    d: ''
};

const DoQuiz = () => {

    const [question, setQuestion] = useState(initialState);
    const { loading, error, refetch, data, networkStatus } = useQuery(QUESTION_QUIZ_REQUEST, { notifyOnNetworkStatusChange: true });

    useEffect(() => {
        if (data)
            setQuestion({
                id: data.questionsQuiz[0].id,
                question: data.questionsQuiz[0].question,
                correct_answer: data.questionsQuiz[0].correct_answer,
                selected_answer: '',
                a: data.questionsQuiz[0].a,
                b: data.questionsQuiz[0].b,
                c: data.questionsQuiz[0].c,
                d: data.questionsQuiz[0].d
            });
    }, [data])

    if (loading || networkStatus === NetworkStatus.refetch)
        return <SkeletonDoQuiz />;

    if (error) return <p>Error :(</p>;

    const onFinish = async ({ id, selected_answer }) => {

        console.log(question)
        console.log(selected_answer)

        if (question.correct_answer == selected_answer) {
            message.success('Correcto.');
        } else {
            message.error(`Respuesta Incorrecta. La respuesta correcta es: ${question.correct_answer} `);
        }
    }

    //Aplicar Context 
    return (
        <QuestionContext.Provider value={{ question, setQuestion, current_question: data.questionsQuiz[0] }}>
            <Row>
                <Col span={24}>
                    <FormPregunta onFinish={onFinish} />
                </Col>
            </Row>
        </QuestionContext.Provider >
    )
}

export default DoQuiz;