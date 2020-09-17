import React, { useState } from 'react'
import { Row, Col, Typography    } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import ButtonControls from './ButtonControls';
import TableStudents from './TableStudents';



const { Title } = Typography;

const Students = (props) => {
    return (
        <>            
            <Row>
                <Col span={8}>
                    <Title level={3}>Estudiantes</Title>
                </Col>
                <Col offset={11}>
                    <ButtonControls />
                </Col>
            </Row>
           <TableStudents />
        </>
    )
}
export default Students;