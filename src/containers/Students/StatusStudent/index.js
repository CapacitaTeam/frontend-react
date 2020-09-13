import React, { useState } from 'react'
import { Row, Col, Typography, Table, Space, Avatar, Badge     } from 'antd';

const StatusStudent = (props) => {
    //console.log(props.status.text);
    return      <div>
                    {
                        props.status.text == "Inactivo"
                        ? <Badge className="site-badge-count-109" count={props.status.text} style={{ backgroundColor: '#e91e63' }} />
                        : <Badge className="site-badge-count-109" count={props.status.text} style={{ backgroundColor: '#52c41a' }} />
                    }
                </div>
  };
    
  export default StatusStudent;