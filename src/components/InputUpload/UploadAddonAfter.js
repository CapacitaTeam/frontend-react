import React, { Fragment } from 'react'
// antd
import Upload from 'antd/lib/upload'
import { EyeOutlined, CloseOutlined } from '@ant-design/icons';
// components
import UploadButton from './UploadButton'
//helpers
import isEmpty from 'lodash/isEmpty';

const UploadAddonAfter = (props) => {
    const {type,preview,value} = props

    const accept = (type_value) => {
        switch (type_value) {
            case 'image':
                return'.jpeg, .jpg, .png'
    
            case 'video':
                return '.mp4, .avi, .mkv'
                    
            case 'pdf':
                return '.pdf'
    
            default:
                return ''
        }
    }

    const eyeIconProps = {
        style: {cursor: 'pointer'}
    }

    const closeIconProps = {
        style: {cursor: 'pointer'}
    }

    return <Fragment>
        {
            (value && !isEmpty(value))
            ? (preview)
                ? <Fragment> <EyeOutlined {...eyeIconProps} /> <CloseOutlined {...closeIconProps} /> </Fragment>
                : <CloseOutlined {...closeIconProps} />
            : <Upload accept={accept(type)} showUploadList={false}> <UploadButton /></Upload>
        }
    </Fragment>
}

export default UploadAddonAfter