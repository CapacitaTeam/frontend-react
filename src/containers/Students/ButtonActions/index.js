import React, {useContext} from 'react'
import { Space, Switch, Spin      } from 'antd';
import { EditOutlined, CloseOutlined, CheckOutlined  } from '@ant-design/icons';
import FormStudent from '../FormStudent';
import ButtonFormStudent from '../FormStudent/ButtonForm';
import { ModalContext } from '../../../components/Modal/modalContext';


const ButtonActions = (props) => {
    let { handleModal } = useContext(ModalContext);
    //console.log(props.row.record.key);   

    const editUser= async (id_user) => {       
       
        const propsDialog = {       
            Title:    "Actualizar Estudiante",
            Content:  <FormStudent id_user={{id_user}}/>,   
            Footer:   <ButtonFormStudent texto="Actualizar"/>,
        };
        handleModal(propsDialog);
    }

    return  (
      <>
          <Space size="middle">
              <a href="#" onClick={() => editUser(props.row.record.key)}><EditOutlined style={{ fontSize: '16px', color: '#616161' }}/></a>              
          </Space>          
      </>
    )
  
          
  };
    
  export default ButtonActions;