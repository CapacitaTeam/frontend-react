import React, { useContext, useEffect, useState } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Typography from 'antd/lib/typography';
import QuestionContext from './QuestionContext';
import './quiz.css';

const { TextArea } = Input;
const { Title } = Typography;

const FormPregunta = props => {

    const { question, setQuestion } = useContext(QuestionContext);

    const [formKey, setFormKey] = useState(1);

    useEffect(() => {
        //console.log(question);
        setFormKey(formKey + 1);
    }, [question]);

    return (
        <>

            <Title level={3}>{question.id === 0 ? 'Nueva Pregunta' : 'Editar Pregunta'}</Title>

            <Form key={formKey} name="normal_login" className="mt-2" onFinish={props.onFinish}>

                <Form.Item name="id" style={{ display: 'none' }} initialValue={question.id}>
                    <Input></Input>
                </Form.Item>

                <Form.Item rules={[{ required: true, message: "Escriba la pregunta solicitada" }]} name="question" initialValue={question.question}>
                    <TextArea rows={3} placeholder='Escriba la Pregunta' />
                </Form.Item>

                <Form.Item rules={[{ required: true, message: "Seleccione una respuesta como Correcta" }]} name="correct_answer" initialValue={question.correct_answer}>
                    <Radio.Group value={question.correct_answer} className="radio-quiz">

                        <Form.Item name="radio_a" initialValue="a">
                            <Radio value="a" className="mb-0 pt-0 float-right radio-quiz">
                                <Form.Item rules={[{ required: true, message: "Escriba la respuesta solicitada" }]} name="a" className="mb-0 float-right item-answer-quiz" label="Respuesta" initialValue={question.a}>
                                    <TextArea rows={2} placeholder='Respuesta a'></TextArea>
                                </Form.Item>
                            </Radio>
                        </Form.Item>

                        <Form.Item name="radio_b" initialValue="b">
                            <Radio value="b" className="mb-0 pt-0 float-right radio-quiz">
                                <Form.Item rules={[{ required: true, message: "Escriba la respuesta solicitada" }]} name="b" className="mb-0 float-right item-answer-quiz" label="Respuesta" initialValue={question.b}>
                                    <TextArea rows={2} placeholder='Respuesta b'></TextArea>
                                </Form.Item>
                            </Radio>
                        </Form.Item>

                        <Form.Item name="radio_c" initialValue="c">
                            <Radio value="c" className="mb-0 pt-0 float-right radio-quiz">
                                <Form.Item rules={[{ required: true, message: "Escriba la respuesta solicitada" }]} name="c" className="mb-0 float-right item-answer-quiz" label="Respuesta" initialValue={question.c}>
                                    <TextArea rows={2} placeholder='Respuesta c'></TextArea>
                                </Form.Item>
                            </Radio>
                        </Form.Item>

                        <Form.Item name="radio_d" initialValue="d">
                            <Radio value="d" className="mb-0 pt-0 float-right radio-quiz">
                                <Form.Item rules={[{ required: true, message: "Escriba la respuesta solicitada" }]} name="d" className="mb-0 float-right item-answer-quiz" label="Respuesta" initialValue={question.d}>
                                    <TextArea rows={2} placeholder='Respuesta d'></TextArea>
                                </Form.Item>
                            </Radio>
                        </Form.Item>

                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>Guardar</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default FormPregunta;