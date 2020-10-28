import React from 'react'
//antd Component
import Button from "antd/lib/button";
//antd Icons
import { UsergroupAddOutlined  } from '@ant-design/icons';
//Components
import ImportStudent from '../../ImportStudent';
import ButtonImportCreateStudents from '../../ImportStudent/ButtonImport';
//Context
import { ModalContext } from '../../../../components/Modal/modalContext';

const ButtonImport = (_) => {
    
    let { handleModal } = React.useContext(ModalContext);
    const propsDialog = {       
          Title:"Importar Estudiantes",
          Content:<ImportStudent />,    
          Footer:<ButtonImportCreateStudents/>    
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