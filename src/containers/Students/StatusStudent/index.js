import React, { useState } from 'react'
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined  } from '@ant-design/icons';


const StatusStudent = (props) => {
    //console.log(props.status.value);
    var status = props.status.value;
    const [checked, setChecked] = useState(status);

    const handleClick = (checked) => {
        //console.log(`switch - ${checked}`);
        setChecked(checked)    
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