import React, { useContext, useEffect, useState } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Typography from 'antd/lib/typography';

import QuestionContext from './QuiestionContext';

const { Title } = Typography;

const FormPregunta = props => {

    const { question, setQuestion, current_question } = useContext(QuestionContext);

    console.log(current_question);

    const [formKey, setFormKey] = useState(1);

    useEffect(() => {
        //console.log(question);

        setFormKey(formKey + 1);
    }, [question]);

    return (
        <>

            <Title level={3}>Pregunta numero uno</Title>

            <Form key={formKey} name="normal_login" className="mt-2" onFinish={props.onFinish}>

                <Form.Item name="id" style={{ display: 'none' }} initialValue={current_question.id}>
                    <Input></Input>
                </Form.Item>

                <Form.Item rules={[{ required: true, message: "Seleccione una respuesta como Correcta" }]} name="selected_answer" initialValue={current_question.selected_answer}>
                    <Radio.Group value={current_question.selected_answer} className="radio-quiz">

                        <Form.Item name="radio_a" initialValue="a">
                            <Radio value="a" className="mb-0 pt-0 float-right radio-quiz">
                                <span>{current_question.a}</span>
                            </Radio>
                        </Form.Item>

                        <Form.Item name="radio_b" initialValue="b">
                            <Radio value="b" className="mb-0 pt-0 float-right radio-quiz">
                                <span>{current_question.b}</span>
                            </Radio>
                        </Form.Item>

                        <Form.Item name="radio_c" initialValue="c">
                            <Radio value="c" className="mb-0 pt-0 float-right radio-quiz">
                                <span>{current_question.c}</span>
                            </Radio>
                        </Form.Item>

                        <Form.Item name="radio_d" initialValue="d">
                            <Radio value="d" className="mb-0 pt-0 float-right radio-quiz">
                                <span>{current_question.d}</span>
                            </Radio>
                        </Form.Item>

                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>Contestar</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default FormPregunta;