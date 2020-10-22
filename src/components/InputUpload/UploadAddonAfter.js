import React from 'react'
import Upload from 'antd/lib/upload'
// components
import UploadButton from './UploadButton'

const UploadAddonAfter = (props) => {
    const {type} = props
    let accept = ''
    switch (type) {
        case 'image':
            accept = '.jpeg, .jpg, .png'
            break;

        case 'video':
            accept = '.mp4, .avi, .mkv'
            break;
                
        case 'pdf':
            accept = '.pdf'
            break;

        default:
            accept = ''
            break;
    }

    return <Upload accept={accept} showUploadList={false}> <UploadButton /></Upload>
}

export default UploadAddonAfter