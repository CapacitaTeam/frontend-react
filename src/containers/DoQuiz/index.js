import React, { useEffect, useState } from 'react'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import message from 'antd/lib/message';
import FormPregunta from './Form';

import QuestionContext from './QuiestionContext';
import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { SkeletonDoQuiz } from './SkeletonDoQuiz';

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
        //refetch();
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

    //<div className="contains-spin"><Skeleton active avatar paragraph={{ rows: 4 }} /></div>;

    if (error) return <p>Error :(</p>;

    const onFinish = async ({ id, selected_answer }) => {

        console.log(question)
        console.log(selected_answer)

        if (question.correct_answer == selected_answer) {
            message.success('Correcto.');
        } else {
            message.error(`Respuesta Incorrecta. La respuesta correcta es: ${question.correct_answer} `);
        }
        //console.log(id, question, a, b, c, d, correct_answer);

        //Codigo para contestar la pregunta

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