import React from 'react'
//antd Component
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Typography from "antd/lib/typography";
//Components
import ButtonControls from './ButtonControls';
import TableStudents from './TableStudents';
//Context
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