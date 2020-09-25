import React from 'react'
import { Button  } from 'antd';
import { UserAddOutlined  } from '@ant-design/icons';
import CreateStudent from '../../../CreateStudent';
import { ModalContext } from '../../../../components/Modal/modalContext';

const ButtonAdd = (_) => {
    
    let { handleModal } = React.useContext(ModalContext);
    const handleParentData = (formModel) => {} 
    const propsDialog = {       
          title:"Crear Estudiante",
          Content:<CreateStudent handleData={handleParentData}/>        
      };

    return (
        <> 
            <Button icon={<UserAddOutlined />} type="primary" onClick={() => handleModal({...propsDialog})}>
                Agregar
            </Button>   
        </>     
    )                                    
               
  };    
  export default ButtonAdd;