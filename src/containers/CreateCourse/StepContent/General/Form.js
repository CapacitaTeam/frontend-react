import React from 'react'
// antd
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
// components
import Selector from '../../Common/Selector'
// constants
import {validateMessages} from '../../../../constants/validateMessages'

export default props => {
    const { form, onChange, appendCheckFn } = props

    const propsForm = {
        form,
        validateMessages,
        layout: 'horizontal',
        hideRequiredMark: true,
        labelCol: {
            span:2
        }
    }

    const fieldRules = [
        {
            whitespace: false,
            required: true,
            min: 4
        }
    ]

    const fieldSelectRules = [
        {
            required: true
        }
    ]

    console.log(props);

    return <Form {...propsForm}>
        <Form.Item label="Titulo" name="title" rules={fieldRules}>
            <Input placeholder="Titulo del curso ..."/>            
        </Form.Item>
        <Form.Item label="Descripcion" name="description" rules={fieldRules}>
            <Input.TextArea placeholder="Descripcion del curso ..." rows={4}/>
        </Form.Item>
        <Form.Item label="Categoria" name="category" rules={fieldSelectRules}>
            <Selector.Category placeholder="Seleccione categoria ..." allowClear={true}/>
        </Form.Item>
        <Form.Item label="Nivel" name="level" rules={fieldSelectRules}>
            <Selector.Level placeholder="Seleccione nivel ..." allowClear={true}/>
        </Form.Item>
    </Form>
}