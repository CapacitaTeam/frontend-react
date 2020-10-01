import React, { useState } from 'react'
import { Row, Col, Typography, Table, Space, Avatar, Badge     } from 'antd';

const StatusStudent = (props) => {
    //console.log(props.status.value);
    return      <div>
                    {
                        props.status.value == 0
                        ? <Badge className="site-badge-count-109" count='Inactivo' style={{ backgroundColor: '#e91e63' }} />
                        : <Badge className="site-badge-count-109" count='Activo' style={{ backgroundColor: '#52c41a' }} />
                    }
                </div>
  };
    
  export default StatusStudent;