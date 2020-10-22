import React from 'react'
// antd
import Input from 'antd/lib/input'
// components 
import UploadAddonAfter from './UploadAddonAfter'
import UploadAddonBefore from './UploadAddonBefore'

const InputUpload = (props) => {

    const {type,preview,files} = props

    const addonBeforeProps = {
        title: 'Archivo'
    }

    const addonAfterProps = {
        type
    }

    const inputProps = {
        addonBefore: <UploadAddonBefore {...addonBeforeProps} />,
        addonAfter: <UploadAddonAfter {...addonAfterProps}/>
    }

    return <div>
        <Input {...inputProps}/>
    </div>
}

export default InputUpload