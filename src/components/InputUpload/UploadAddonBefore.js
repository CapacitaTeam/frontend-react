import React, { Fragment } from 'react'
//antd
import {CaretDownOutlined} from '@ant-design/icons';

const UploadAddonBefore = (props) => {
    const {files, title} = props
    return <Fragment>
        {title}
        {(files && files.length > 0)&&
            <CaretDownOutlined />
        }
    </Fragment>
}

export default UploadAddonBefore