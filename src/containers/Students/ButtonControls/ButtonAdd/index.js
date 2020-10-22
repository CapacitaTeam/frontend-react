import React, {useContext} from 'react'
//antd Component
import Button from "antd/lib/button";
//antd Icons
import { UserAddOutlined  } from '@ant-design/icons';
//Components
import FormStudent from '../../FormStudent';
import ButtonFormStudent from '../../FormStudent/ButtonForm';
//Context
import { ModalContext } from '../../../../components/Modal/modalContext';
import { StudentContext } from '../../studentContext';

const ButtonAdd = (_) => {    
    let { handleModal } = useContext(ModalContext);
    let { user } = useContext(StudentContext);
    var id_user = user.key;
    
    const propsDialog = {       
          Title:    "Crear Estudiante",
          Content:  <FormStudent id_user={{id_user}}/>,   
          Footer:   <ButtonFormStudent texto="Agregar"/>,
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