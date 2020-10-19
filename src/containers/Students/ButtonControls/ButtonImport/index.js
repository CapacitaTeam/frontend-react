import React from 'react'
import { Button  } from 'antd';
import { UsergroupAddOutlined  } from '@ant-design/icons';
import ImportStudent from '../../ImportStudent';
import ButtonImportCreateStudents from '../../ImportStudent/ButtonImport';
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