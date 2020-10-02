import React, { useState, useEffect } from 'react'
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
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ModalContext } from '../../components/Modal/modalContext';

import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';


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

  const STUDENTS_LIST_REQUEST = gql`  
    query User {
        users{
            key: id
            username
            status
            createdat
        }
    }`;

  const CREATE_USER = gql`  
    mutation CreateUser ($firstname: String!, $lastname: String!, $username: String!, $password: String!, $status: Boolean!) {
      createUser(firstname: $firstname, lastname: $lastname, username: $username, password: $password, status: $status){
        username
  }
}`;

const CreateStudent = (props) => {

    const { handleOk } = React.useContext(ModalContext);
    const [form] = Form.useForm();

    const { loading, error, refetch, data, networkStatus } = useQuery(STUDENTS_LIST_REQUEST, { notifyOnNetworkStatusChange: true });
    const [create_user] = useMutation(CREATE_USER);

    useEffect(() => {
        refetch();
    }, [])

    if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
    if (error) return <p>Error :(</p>;
   

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