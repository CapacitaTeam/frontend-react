import React, { Fragment, useState } from 'react'
// antd
import Input from 'antd/lib/input'
// components 
import UploadAddonAfter from './UploadAddonAfter'
import UploadAddonBefore from './UploadAddonBefore'
import FileView from './FileView'

const InputUpload = (props) => {
    const {type,preview,files} = props
    const [isOpenImageView,setIsOpenImageView] = useState(false)

    const addonBeforeProps = {
        title: 'Archivo',
        files,
        onClickFiles: () => setIsOpenImageView(!isOpenImageView)
    }

    const addonAfterProps = {
        type,
        value:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
    }

    const inputProps = {
        addonBefore: <UploadAddonBefore {...addonBeforeProps} />,
        addonAfter: <UploadAddonAfter {...addonAfterProps}/>
    }

    return <Fragment>
        <Input {...inputProps}/>
        {
            (files && files.length > 0 && isOpenImageView) && <FileView files={files} type={type}/>
        }
    </Fragment>
}

export default InputUpload