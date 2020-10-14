import React, { useContext, useEffect } from 'react'
// antd
import Form from 'antd/lib/form'
// components
import FormGeneral from './Form'
// helper
import get from 'lodash/get'
import isObject from 'lodash/isObject'
// context Course
import ContextCourse from '../../Context'

export default () => {
    const [form] = Form.useForm();
    const props = useContext(ContextCourse)
    const { createFormField: FormField } = form
    const field = field => (isObject(field) ? field : { value: field })
    console.log(props)
    useEffect(()=>{
        form.setFieldsValue({
            title: get(props.initialValue, 'title', '')
        })
    },[])
    
    return <FormGeneral {...props} form={form}/>
}
