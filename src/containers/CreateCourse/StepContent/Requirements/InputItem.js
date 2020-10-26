import React from 'react'
// antd
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const InputItem = (props) => {
    return <Form>
        <Form.Item name="req">
            <Input placeholder="Escriba su requerimiento aqui ..." />
        </Form.Item>
    </Form>
}

export default InputItem