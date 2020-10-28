import React, { useState } from 'react'
//antd Component
import Switch from "antd/lib/switch";
import message from "antd/lib/message";
//antd Icons
import { CloseOutlined, CheckOutlined  } from '@ant-design/icons';
//Graphql
import { UserMutations } from '../../../graphql';
import { useMutation } from '@apollo/react-hooks';

const { STATUS_STUDENT_UPDATE } = UserMutations;

const StatusStudent = (props) => {
    var status = props.status.value;
    const [checked, setChecked] = useState(status);
    const [student_update] = useMutation(STATUS_STUDENT_UPDATE);
    var id_user = props.row.record.key;

    const handleClick = async (checked) => {            
        var id = id_user;
        var status = checked;
        const update_user= await student_update({ variables: { id, status} })
        .then(res => {
            message.success('Estudiante actualizado exitosamente.');    
            setChecked(checked)
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