import React, { useState } from 'react'
import { Switch, message } from 'antd';
import { CloseOutlined, CheckOutlined  } from '@ant-design/icons';

import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';


const STUDENT_UPDATE= gql`  
mutation UpdateStatusUser ($id: Int!, $status: Boolean!) {
    updateStatusUser(id: $id, status: $status){
    key: id
}
}`;


const StatusStudent = (props) => {
    //console.log(props.status.value);
    var status = props.status.value;
    const [checked, setChecked] = useState(status);
    const [student_update] = useMutation(STUDENT_UPDATE);
    var id_user = props.row.record.key;

    const handleClick = async (checked) => {
        //console.log(`switch - ${checked}`);            
        //console.log(id_user);
        //return;
        var id = id_user;
        var status = checked;
        const update_user= await student_update({ variables: { id, status} })
        .then(res => {
            message.success('Estudiante actualizado exitosamente.');    
            setChecked(checked)
            console.log(res);
            return res;
        })
        .catch(err => {
            message.error(setTimeout(() => {
                'Inténtelo luego.'
            }, 300));
  
            return null;
        });
    }
    return      <div>
                    {
                        <Switch
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            onClick={handleClick}
                            checked={checked}
                        />     
                        
                    }
                </div>
  };
    
  export default StatusStudent;