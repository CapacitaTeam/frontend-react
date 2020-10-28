import React from 'react'
//antd Component
import Row from "antd/lib/row";
import Col from "antd/lib/col";
//Components
import ButtonAdd from './ButtonAdd';
import ButtonImport from './ButtonImport';

const ButtonControl = (_) => {  
    return  <Row gutter={[5, 8]}>  
                <Col span={12}>   
                    <ButtonAdd></ButtonAdd>                    
                </Col>
                <Col span={12}>
                   <ButtonImport></ButtonImport>
                </Col>
            </Row>  
  };
    
  export default ButtonControl;