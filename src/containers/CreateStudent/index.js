import React, { useState } from 'react'
import { 
    Typography, 
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    AutoComplete,
    message
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


const { Title } = Typography;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 6,
      },
    },
  };

const CreateStudent = (props) => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('Received values of form: ', values);

        message
        .loading('Cargando..', 2.5)
        .then(() => message.success('Estudiante agregado con éxito', 2.5))

    };  

    return (
        <>           
           
            <Row>
                <Col span={24}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        layout="vertical"
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            status: '1'
                        }}
                        scrollToFirstError>

                        <Form.Item
                            name="name"
                            label="Nombres"
                            rules={[                           
                            {
                                required: true,
                                message: 'Nombres son requerido',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item> 


                        <Form.Item
                            name="lastname"
                            label="Apellidos"
                            rules={[                           
                            {
                                required: true,
                                message: 'Apellidos son requerido',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item> 



                        <Form.Item
                            name="email"
                            label="Correo electrónico"
                            rules={[
                            {
                                type: 'email',
                                message: 'Favor ingresar correo valido',
                            },
                            {
                                required: true,
                                message: 'El correo es requerido',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item> 

                     

                        <Form.Item 
                            name="status"
                            label="Estado"                             
                        >
                            <Select>
                            <Option value="1">Activo</Option>
                            <Option value="2">Inactivo</Option>
                            </Select>
                        </Form.Item>


                       

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                            Agregar
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </>
    )
}
export default CreateStudent;