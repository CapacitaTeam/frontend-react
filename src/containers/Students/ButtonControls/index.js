import React, { useState } from 'react'
import { Row, Col, Button  } from 'antd';
import { UserAddOutlined, UsergroupAddOutlined  } from '@ant-design/icons';
import { UISref } from '@uirouter/react';

const ButtonControl = (props) => {
  
    return  <Row gutter={[5, 8]}>
                <Col span={12}>
                    <UISref to="App.CreateQuiz" >
                        <Button icon={<UserAddOutlined />} type="primary">Agregar</Button>
                    </UISref>                            
                </Col>
                <Col span={12}>
                    <UISref to="App.CreateQuiz" >
                        <Button icon={<UsergroupAddOutlined />}type="primary" >Importar</Button>
                    </UISref>
                </Col>
            </Row>  
  };
    
  export default ButtonControl;