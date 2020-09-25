import React from 'react'
import { Row, Col  } from 'antd';
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