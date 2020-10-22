import React from 'react'
//antd Component
import Button from "antd/lib/button";

const ButtonFormStudent = (props) => {  
    return (
        <> 
            <Button key="submit" htmlType="submit" type="primary" form="formStudent" >
                {props.texto}
            </Button>,
        </>     
    )                                    
               
  };    
  export default ButtonFormStudent;