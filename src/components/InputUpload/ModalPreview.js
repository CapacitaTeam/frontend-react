import React from 'react'
// antd
import Modal from 'antd/lib/modal'
import Image from "antd/lib/image"
import Skeleton from "antd/lib/skeleton";

const ModalPreview = (props) => {
    const {visible, value, onCancel} = props

    const modalProps = {
        title: "Vista previa",
        visible,
        onCancel,
        footer: null,
        children: <Image src = {value} placeholder={<Skeleton.Image/>} width="100%" preview={false}/>
    }

    return  <Modal {...modalProps}/>
}

export default ModalPreview