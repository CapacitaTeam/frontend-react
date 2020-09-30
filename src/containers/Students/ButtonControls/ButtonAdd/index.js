import React from 'react'
import { Button  } from 'antd';
import { UserAddOutlined  } from '@ant-design/icons';
import CreateStudent from '../../../CreateStudent';
import ButtonFormCreateStudent from '../../../CreateStudent/ButtonForm';
import { ModalContext } from '../../../../components/Modal/modalContext';

const ButtonAdd = (_) => {
    
    let { handleModal } = React.useContext(ModalContext);
    const propsDialog = {       
          Title:    "Crear Estudiante",
          Content:  <CreateStudent />,   
          Footer:   <ButtonFormCreateStudent />,
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