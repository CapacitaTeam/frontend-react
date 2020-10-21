import React from 'react'
// antd
import Input from 'antd/lib/input'
import Upload from 'antd/lib/upload'
// components
import UploadButton from './UploadButton'

const InputUpload = (props) => {

    const {type,preview} = props

    const getAddonAfter = () => {
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

    const inputProps = {
        addonBefore: "Archivo",
        addonAfter: getAddonAfter()
    }

    return <div>
        <Input {...inputProps}/>
    </div>
}

export default InputUpload