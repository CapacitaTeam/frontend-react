import React, { Fragment } from 'react'
//antd
import {CaretDownOutlined} from '@ant-design/icons';

const UploadAddonBefore = (props) => {
    const {files, title, onClickFiles} = props
    return <Fragment>
        {title}
        {(files && files.length > 0)&&
            <CaretDownOutlined className="ml-1" onClick={onClickFiles}/>
        }
    </Fragment>
}

export default UploadAddonBefore