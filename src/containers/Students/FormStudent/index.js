import React, { useContext, useEffect, useState } from 'react'
import { 
    Form,
    Input,
    Select,
    Row,
    Col,
    message,
    Spin
} from 'antd';
import { ModalContext } from '../../../components/Modal/modalContext';
import { StudentContext } from '../studentContext';

import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';


const { Option } = Select;

  
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

  const STUDENT_REQUEST = gql`  
    query User($id: Int!) {
      user(id: $id){
          key: id
          firstname
          lastname
          username
          status
          createdat
      }
  }`;
  
  const STUDENT_CREATE = gql`  
    mutation CreateUser ($firstname: String!, $lastname: String!, $username: String!, $password: String!, $status: Boolean!) {
      createUser(firstname: $firstname, lastname: $lastname, username: $username, password: $password, status: $status){
        key: id, username, status, createdat
    }
  }`;

  const STUDENT_UPDATE= gql`  
  mutation UpdateUser ($id: Int!, $firstname: String!, $lastname: String!, $status: Boolean!) {
    updateUser(id: $id, firstname: $firstname, lastname: $lastname, status: $status){
      key: id, username, status, createdat
  }
}`;



const FormStudent = (props) => {
  const { handleOk } = useContext(ModalContext);
  const { users, setusers, user, setuser } = useContext(StudentContext);
  const [form] = Form.useForm();    
  var infouser = null

  const [student_create] = useMutation(STUDENT_CREATE);  
  const [student_update] = useMutation(STUDENT_UPDATE);

  //console.log(props.user.id_user); 
  var id_user = props.id_user.id_user;
  const { loading, error, refetch, data, networkStatus } = useQuery(STUDENT_REQUEST, {  variables: { id: id_user }, notifyOnNetworkStatusChange: true });    

 /* useEffect(() => {
      refetch();
  }, [])*/

  if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
  if (error) return <p>Error :(</p>;
    
  var id = 0;
  var firstname = "";
  var lastname  = "";
  var password = "";
  var status    = false;
  var username  = "";

  if (!data[0] && !data.user[0]) 
  {   
    id        = user.key; 
    firstname = user.firstname;
    lastname  = user.lastname;
    status    = user.status;
    username  = user.username;    
  }
  else
  {
    id        = data.user[0].key; 
    firstname = data.user[0].firstname;
    lastname  = data.user[0].lastname;
    status    = data.user[0].status;
    username  = data.user[0].username;
  }
     


  const onFinish = async (values) => {
    //console.log('Received values of form: ', values);    
    values.password = '123456';

    id        = values.id;
    firstname = values.firstname;
    lastname  = values.lastname;
    password  = values.password;
    status    = (values.status.toLowerCase() === 'true');
    username  = values.username;

    //console.log(status);
    //console.log(status);
    //return;

    if (id === 0) 
    {
      const new_user = await student_create({ variables: { firstname, lastname, username , password, status} })
      .then(res => {    
          setusers(users.concat(res.data.createUser));
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
    }
    else
    {
      const update_user= await student_update({ variables: { id, firstname, lastname, status} })
      .then(res => {
          message.success('Estudiante actualizado exitosamente.');      
          //refetch();          
          handleOk();
          console.log(res);
          return res;
      })
      .catch(err => {
          message.error(setTimeout(() => {
              'Inténtelo luego.'
          }, 300));

          return null;
      });
    }

    
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
                        id: id,               
                        firstname: `${firstname}`,
                        lastname: `${lastname}` ,
                        username: `${username}` ,
                        status: `${status}`                 
                    }}
                    scrollToFirstError
                    id="formStudent">

                    <Form.Item
                        name="id"
                        label="id"
                        style={{ display: 'none' }}
                    >
                        <Input />
                    </Form.Item> 

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
                        <Input  />
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
export default FormStudent;