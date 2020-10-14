import React, { useContext } from 'react'
import { 
    Typography, 
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    AutoComplete,
    message,
    Spin
} from 'antd';
import { ModalContext } from '../../components/Modal/modalContext';
import { StudentContext } from '../Students/studentContext';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';


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

  
  const CREATE_USER = gql`  
    mutation CreateUser ($firstname: String!, $lastname: String!, $username: String!, $password: String!, $status: Boolean!) {
      createUser(firstname: $firstname, lastname: $lastname, username: $username, password: $password, status: $status){
        key: id, username, status, createdat
  }
}`;

const CreateStudent = (props) => {
  
  const { handleOk } = useContext(ModalContext);
  const { usersDataSources, setusersDataSources } = useContext(StudentContext);
  const [form] = Form.useForm();

  const [create_user] = useMutation(CREATE_USER);   


  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    values.password = '123456';
    values.status = true;

    var firstname = values.firstname;
    var lastname  = values.lastname;
    var password  = values.password;
    var status    = values.status;
    var username  = values.username;

    const new_user = await create_user({ variables: { firstname, lastname, username , password, status} })
    .then(res => {    
        setusersDataSources(usersDataSources.concat(res.data.createUser));
        message
        .loading('Cargando..', 2.5)
        .then(() => message.success('Estudiante agregado con éxito', 2.5))
        
        handleOk();
    })
    .catch(err => {
        message.error(setTimeout(() => {
            'Inténtelo luego.'
        }, 300));

        return null;
    });
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
                        status: 'true'
                    }}
                    scrollToFirstError
                    id="formCreateStudent">

                    <Form.Item
                        name="firstname"
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
                        name="username"
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
                        <Option value="true">Activo</Option>
                        <Option value="false">Inactivo</Option>
                        </Select>
                    </Form.Item>                       

                </Form>
            </Col>
        </Row>
      </>
  )
}
export default CreateStudent;