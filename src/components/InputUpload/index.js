import React, { Fragment, useState } from 'react'
// antd
import Input from 'antd/lib/input'
import Form from 'antd/lib/form'
// components 
import UploadAddonAfter from './UploadAddonAfter'
import UploadAddonBefore from './UploadAddonBefore'
import FileView from './FileView'
import ModalPreview from "./ModalPreview";
//helpers
import isEmpty from 'lodash/isEmpty';

const InputUpload = (props) => {
    const {type,preview,files} = props
    const [isOpenImageView,setIsOpenImageView] = useState(false)
    const [isOpenModal,setIsOpenModal] = useState(false)
    const [value,setValue] = useState(null)
    const [form] = Form.useForm();

    const addonBeforeProps = {
        title: 'Archivo',
        files,
        onClickFiles: () => setIsOpenImageView(!isOpenImageView)
    }

    const addonAfterProps = {
        type,
        value,
        preview,
        onOpenModal: () => setIsOpenModal(!isOpenModal),
        onRemoveValue: () => { setValue(''); form.setFieldsValue({url:''})}
    }

    const formProps = {
        name:"inputUpload",
        form,
        onFieldsChange: () => setValue(form.getFieldValue("url"))
    }

    const inputProps = {
        addonBefore: <UploadAddonBefore {...addonBeforeProps} />,
        addonAfter: <UploadAddonAfter {...addonAfterProps}/>
    }

    return <Form {...formProps}>
        <Form.Item name="url">
            <Input {...inputProps}/>
        </Form.Item>
        {
            (files && files.length > 0 && isOpenImageView) && <FileView files={files} type={type}/>
        }
        {
            (value && !isEmpty(value) && preview) && <ModalPreview visible={isOpenModal} value={value} onCancel={() => setIsOpenModal(!isOpenModal)}/>
        }
    </Form>
}

export default InputUpload