import React from 'react'
import { Row, Col, Typography  } from 'antd';
import ButtonControls from './ButtonControls';
import TableStudents from './TableStudents';
import { ModalProvider } from "../../components/Modal/modalContext";
import { StudentProvider } from "./studentContext";


const { Title } = Typography;
const Students = (props) => {
   
    return (
        <>       
            <StudentProvider>
                <ModalProvider>
                    <Row>
                        <Col span={8}>
                            <Title level={3}>Estudiantes</Title>
                        </Col>
                        <Col offset={11}>
                                <ButtonControls />                 
                        </Col>
                    </Row>
                    <TableStudents />
                </ModalProvider>                   
            </StudentProvider >
          
        </>
    )
}
export default Students;