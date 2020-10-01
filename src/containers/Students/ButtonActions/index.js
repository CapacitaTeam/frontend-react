import React from 'react'
import { Space, Switch      } from 'antd';
import { EditOutlined, CloseOutlined, CheckOutlined  } from '@ant-design/icons';

  const ButtonActions = (props) => {
  
    return  <Space size="middle">
                <a><EditOutlined style={{ fontSize: '16px', color: '#616161' }}/></a>
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked
                  />            
            </Space>
  };
    
  export default ButtonActions;