import React from 'react';
import { Form, Input, Button, Row, Radio, Col } from 'antd';

const { TextArea } = Input;

const required = value => value ? undefined : 'required';

const ElementoRespuesta = e => {
    //console.log(e);
    return <Form.Item name={`radio_${e.name}`} initialValue={e.number}>

        <Radio value={e.number} className="mb-0 pt-0 float-right" style={{ width: '100%' }}>

            <Form.Item name={e.name} className="mb-0 float-right" style={{ width: '95%', marginTop: '-5px' }} label="Respuesta" initialValue={e.answer}>
                <TextArea rows={2} placeholder='Respuesta a'></TextArea>
            </Form.Item>

        </Radio>

    </Form.Item>
}

const FormPregunta = props => {

    return (
        <>

            <Form name="normal_login" className="mt-2" onFinish={props.onFinish}>

                <Form.Item name="question" initialValue={props.state.question}>
                    <TextArea rows={3} placeholder='Escriba la Pregunta' />
                </Form.Item>

                <Form.Item name="radio-group" initialValue={props.state.correct_answer}>
                    <Radio.Group value={props.state.correct_answer} style={{ width: '100%' }}>
                        {
                            props.state.answers.map((respuesta, index) => {
                                return <ElementoRespuesta number={respuesta.number} name={respuesta.name} key={respuesta.id} answer={respuesta.answer} />
                            })
                        }
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