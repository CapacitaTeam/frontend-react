import React, { useEffect, useState } from 'react'
import { NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import message from 'antd/lib/message';
import Divider from 'antd/lib/divider';

import FormPregunta from './Form';
import Questions from './Questions';
import QuestionContext from './QuestionContext';
import { SkeletonCreateQuiz } from './SkeletonCreateQuiz';

import QUESTION_QUIZ_REQUEST from './Queries/QUESTION_QUIZ_REQUEST'
import CREATE_QUESTION_QUIZ from './Queries/CREATE_QUESTION_QUIZ'
import UPDATE_QUESTION_QUIZ from './Queries/UPDATE_QUESTION_QUIZ'

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

    const { loading, error, refetch, data, networkStatus } = useQuery(QUESTION_QUIZ_REQUEST, { notifyOnNetworkStatusChange: true });
    const [create_question_quiz] = useMutation(CREATE_QUESTION_QUIZ);
    const [update_question_quiz] = useMutation(UPDATE_QUESTION_QUIZ);

    useEffect(() => {
        refetch();
    }, [])

    if (loading || networkStatus === NetworkStatus.refetch)
        return <SkeletonCreateQuiz />;

    if (error) return <p>Error :(</p>;

    const onFinish = async ({ id, question, a, b, c, d, correct_answer }) => {

        if (id === 0) {
            const new_question = await create_question_quiz({ variables: { question, a, b, c, d, correct_answer, clue: ' - ', img: ' -', video: ' - ', status: true } })
                .then(res => {
                    message.success('Pregunta creada exitosamente.');
                    setQuestion(initialState);
                    refetch();
                    return res;
                })
                .catch(err => {
                    message.error(setTimeout(() => {
                        'Inténtelo luego.'
                    }, 300));

                    return null;
                });
        }
        else {
            const current_question = await update_question_quiz({ variables: { id, question, a, b, c, d, correct_answer, clue: ' - ', img: ' -', video: ' - ', status: true } })
                .then(res => {
                    message.success('Pregunta actualizada exitosamente.');
                    setQuestion(initialState);
                    refetch();
                    return res;
                })
                .catch(err => {
                    message.error(setTimeout(() => {
                        'Inténtelo luego.'
                    }, 300));

                    return null;
                });
        }
    }

    //Aplicar Context 
    return (
        <QuestionContext.Provider value={{ question, setQuestion, questions: data.questionsQuiz }}>
            <Row>
                <Col span={7} style={{ maxHeight: '80vh', overflow: 'auto', paddingBottom: '5px' }}>
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