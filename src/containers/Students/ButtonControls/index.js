import React, { useState } from 'react'
import { Row, Col, Button  } from 'antd';
import { UserAddOutlined, UsergroupAddOutlined  } from '@ant-design/icons';
import { UISref } from '@uirouter/react';
import Modal from '../../../components/Modal';
import CreateStudent from '../../CreateStudent';

const ButtonControl = (_) => {
    
    const handleParentData = (formModel) => {}   

    const props = {
        dialog: {
          title:"Crear Estudiantes",
          FormContent:<CreateStudent handleData={handleParentData}/>
        },
        button:{
            icon:<UserAddOutlined />,
            text:"Agregar"
        }
      }
    return  <Row gutter={[5, 8]}>  
                <Col span={12}>
                    <Modal {...props}></Modal>                                            
                </Col>
                <Col span={12}>
                    <UISref to="App.ImportStudent" >
                        <Button icon={<UsergroupAddOutlined />}type="primary" >Importar</Button>
                    </UISref>
                </Col>
            </Row>  
  };
    
  export default ButtonControl;