import React from 'react';
//antd components
import { UploadOutlined } from '@ant-design/icons';

const UploadButton = (props) => <UploadOutlined style={{cursor: props.disabled ? 'not-allowed' : 'pointer'}} />

export default UploadButton;