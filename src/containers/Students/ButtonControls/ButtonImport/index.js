import React from 'react'
import { Button  } from 'antd';
import { UsergroupAddOutlined  } from '@ant-design/icons';
import ImportStudent from '../../../ImportStudent';
import { ModalContext } from '../../../../components/Modal/modalContext';

const ButtonImport = (_) => {
    
    let { handleModal } = React.useContext(ModalContext);
    const handleParentData = (formModel) => {} 
    const propsDialog = {       
          title:"Importar Estudiantes",
          Content:<ImportStudent handleData={handleParentData}/>        
      };

    return (
        <> 
            <Button icon={<UsergroupAddOutlined />} type="primary" onClick={() => handleModal({...propsDialog})}>
                Importar
            </Button>   
        </>     
    )                                    
               
  };    
  export default ButtonImport;