import React, { useEffect, useState } from 'react'
import { Row, Col, Divider, Spin, message } from 'antd';
import FormPregunta from './Form';
import Questions from './Questions';

import QuestionContext from './QuestionContext';
import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

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

const CREATE_QUESTION_QUIZ = gql`  
mutation CreateQuestionQuiz ($id: Int, $question: String!, $a: String!, $b: String!, $c: String!, $d: String!, $correct_answer: String!, $clue: String, $img: String, $video: String, $status: Boolean) {
    createQuestionQuiz(id: $id, question: $question, a: $a, b: $b, c: $c, d: $d, correct_answer: $correct_answer, clue: $clue, img: $img, video: $video, status: $status){
    id
    question
  }
}`;

const UPDATE_QUESTION_QUIZ = gql`  
mutation UpdateQuestionQuiz ($id: ID!, $question: String!, $a: String!, $b: String!, $c: String!, $d: String!, $correct_answer: String!, $clue: String, $img: String, $video: String, $status: Boolean) {
    updateQuestionQuiz(id: $id, question: $question, a: $a, b: $b, c: $c, d: $d, correct_answer: $correct_answer, clue: $clue, img: $img, video: $video, status: $status){
    id
    question
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

    const { loading, error, refetch, data, networkStatus } = useQuery(QUESTION_QUIZ_REQUEST, { notifyOnNetworkStatusChange: true });
    const [create_question_quiz] = useMutation(CREATE_QUESTION_QUIZ);
    const [update_question_quiz] = useMutation(UPDATE_QUESTION_QUIZ);

    useEffect(() => {
        refetch();
    }, [])

    if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
    if (error) return <p>Error :(</p>;

    const onFinish = async ({ id, question, a, b, c, d, correct_answer }) => {

        //console.log(id, question, a, b, c, d, correct_answer);

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

            // if (new_question)
            //     console.log('Resultado: Question-> ' + new_question.data.createQuestionQuiz.question);
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

            // if (current_question)
            //     console.log('Resultado: Question-> ' + current_question.data.updateQuestionQuiz.question);
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