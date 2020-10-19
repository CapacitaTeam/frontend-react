import React from 'react'
import { Button  } from 'antd';

const ButtonFormStudent = (props) => {  
    //console.log(props);
    return (
        <> 
            <Button key="submit" htmlType="submit" type="primary" form="formStudent" >
                {props.texto}
            </Button>,
        </>     
    )                                    
               
  };    
  export default ButtonFormStudent;