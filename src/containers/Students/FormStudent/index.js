import React, { useContext } from 'react'
//antd Component
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import message from "antd/lib/message";
import Spin from "antd/lib/spin";
//Context
import { ModalContext } from '../../../components/Modal/modalContext';
import { StudentContext } from '../studentContext';
//Graphql
import { UserQueries, UserMutations } from '../../../graphql';
import { NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const { STUDENT_REQUEST } = UserQueries;
const { STUDENT_CREATE, STUDENT_UPDATE } = UserMutations;

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

const FormStudent = (props) => {
  const { handleOk } = useContext(ModalContext);
  const { users, setusers, user } = useContext(StudentContext);
  const [form] = Form.useForm();    

  const [student_create] = useMutation(STUDENT_CREATE);  
  const [student_update] = useMutation(STUDENT_UPDATE);

  var id_user = props.id_user.id_user;
  const { loading, error, refetch, data, networkStatus } = useQuery(STUDENT_REQUEST, {  variables: { id: id_user }, notifyOnNetworkStatusChange: true });    
  if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
  if (error) return <p>Error :(</p>;
    
  var id = 0;
  var firstname = "";
  var lastname  = "";
  var status    = false;
  var username  = "";
  var id_role = 3;

  if (!data[0] && !data.user[0]) 
  {   
    id        = user.key; 
    firstname = user.firstname;
    lastname  = user.lastname;
    status    = user.status;
    username  = user.username;    
    id_role  = user.id_role;   
  }
  else
  {
    id        = data.user[0].key; 
    firstname = data.user[0].firstname;
    lastname  = data.user[0].lastname;
    status    = data.user[0].status;
    username  = data.user[0].username;
    id_role  = data.user[0].id_role;
  }
     

  const onFinish = async (values) => {
    id        = values.id;
    firstname = values.firstname;
    lastname  = values.lastname;
    status    = (values.status.toLowerCase() === 'true');
    username  = values.username;
    id_role   = parseInt(values.id_role); 

    if (id === 0) 
    {
      const new_user = await student_create({ variables: { firstname, lastname, username, status, id_role} })
      .then(res => {    
          setusers(users.concat(res.data.createUser));
          message
          .loading('Cargando..', 2.5)
          .then(() => message.success('Estudiante agregado con éxito', 2.5))
          handleOk();
      })
      .catch(err => {
          message.error(err.message);
          return null;
      });
    }
    else
    {
      const update_user= await student_update({ variables: { id, firstname, lastname, status} })
      .then(res => {
          message.success('Estudiante actualizado exitosamente.');   
          handleOk();
      })
      .catch(err => {
          message.error(err.message);
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
                        status: `${status}`,
                        id_role: `${id_role}`,                 
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

                    <Form.Item 
                        name="id_role"
                        label="Rol"       
                        style={{ display: 'none' }}                      
                    >
                        <Select disabled>
                          <Option value="1">Administrador</Option>
                          <Option value="2">Profesor</Option>
                          <Option value="3">Estudiante</Option>
                        </Select>
                    </Form.Item>               

                </Form>
            </Col>
        </Row>
      </>
  )
}
export default FormStudent;