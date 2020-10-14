import React, {useContext} from 'react'
import { Space, Switch      } from 'antd';
import { EditOutlined, CloseOutlined, CheckOutlined  } from '@ant-design/icons';
import { StudentContext } from '../studentContext';


  const ButtonActions = (props) => {
    let { editUser } = useContext(StudentContext);
    //console.log(props.row.record.key);
    return  <Space size="middle">
                <a href="#" onClick={() => editUser(props.row.record.key)}><EditOutlined style={{ fontSize: '16px', color: '#616161' }}/></a>              
            </Space>
  };
    
  export default ButtonActions;