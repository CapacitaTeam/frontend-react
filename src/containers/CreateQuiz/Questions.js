import React, { useContext } from 'react'
import { List, Avatar, Button, Space } from 'antd'
import { EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import QuestionContext from './QuestionContext';

const Questions = () => {

    const { question, setQuestion, questions } = useContext(QuestionContext);
    //console.log('Preguntas sape: ' + JSON.stringify(questions))

    const editQuestion = async (id_question) => {
        const current_question = await questions.filter(question => question.id === id_question);
        //console.log('state actual: ' + JSON.stringify(question));
        setQuestion(current_question[0]);
    }


    const resetQuestion = () => {
        setQuestion({
            id: 0,
            question: '',
            correct_answer: '',
            a: '',
            b: '',
            c: '',
            d: ''
        });
    }

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={questions}
                renderItem={(item, index) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<QuestionCircleOutlined />}
                            // title={<a href="https://ant.design">{item.title}</a>}
                            title={`Pregunta #${index + 1}`}
                            description={<Space>{item.question}<Button
                                type="primary"
                                size="small"
                                onClick={() => editQuestion(item.id)}>
                                Editar
                              </Button></Space>}
                        />
                    </List.Item>
                )}
            />
            <Button onClick={resetQuestion}>Agregar</Button>
        </>
    )
}

export default Questions
