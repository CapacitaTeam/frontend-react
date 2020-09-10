import React from 'react'
import { Input, List, Typography, Divider, Button } from 'antd';

const { TextArea } = Input;

const data = [
   ""
];

const CreateQuiz = () => {
    return (
        <>
            <TextArea rows={2} placeholder='Escriba la Pregunta' />

            <br></br>

            <List
                header={<div>Lista de Respuestas</div>}
                footer={<Button type='primary'>Guardar Pregunta</Button>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Input placeholder='Respuesta a'></Input>
                        <Input placeholder='Respuesta b'></Input>
                        <Input placeholder='Respuesta c'></Input>
                        <Input placeholder='Respuesta d'></Input>
                    </List.Item>
                )}
            />
        </>
    )
}

export default CreateQuiz;