import React from 'react';
import { Form, Input, Button, Row, Radio, Col } from 'antd';

const { TextArea } = Input;

const required = value => value ? undefined : 'required';

const ElementoRespuesta = e => {
    //console.log(e);
    return <Radio className="mb-2" value={e.value} style={{ width: '97%' }}><Input value={e.respuesta} placeholder='Respuesta a'></Input></Radio>
}

const FormPregunta = props => {

    return (
        <>
            <TextArea rows={3} placeholder='Escriba la Pregunta' />

            <Form name="normal_login" className="mt-2" onFinish={props.onFinish}>

                <Form.Item name="radio-group" value={props.state.correct_answer}>
                    <Radio.Group style={{ width: '100%' }}>

                        {
                            props.state.answers.map((respuesta, key) => {
                                return <ElementoRespuesta key={key} value={key} respuesta={respuesta.value} />
                            })
                        }
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>Iniciar</Button>
                </Form.Item>                
            </Form>
        </>
    );
}

export default FormPregunta;