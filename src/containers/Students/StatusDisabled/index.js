import React, { useState } from 'react'
import { Space, Popconfirm, message     } from 'antd';
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined  } from '@ant-design/icons';

function confirm(e) {
    console.log(e);
    message.success('Estudiante desactivado con éxito');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Proceso cancelado');
  }


  const StatusDisabled = (props) => {
  
    return  <Space size="middle">
                <a><EditOutlined style={{ fontSize: '16px', color: '#616161' }}/></a>
                <Popconfirm 
                    title="¿Desea desactivar este estudiante？" 
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a><DeleteOutlined style={{ fontSize: '16px', color: '#e91e63' }}/></a>
                </Popconfirm>               
            </Space>
  };
    
  export default StatusDisabled;