import React, {useState,useEffect} from 'react'
// antd
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import PopConfirm from "antd/lib/popconfirm";
import message from "antd/lib/message";
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
// components
import RequirementItem from "./RequirementItem";
import {getUniqueIdRandom} from "../../../../utils/getUniqueId";
import InputItem from "./InputItem";

const Requirements = (props) => {
    const initialItem = getUniqueIdRandom()
    const initialOption = [
        {
            key: initialItem,
            children: <InputItem/>
        }
    ]
    const [itemOptions,setItemOptions] = useState([])

    useEffect(()=> {
        if (itemOptions && itemOptions.length == 0) setItemOptions(initialOption)
    })

    const onClick = () => {
        const newKey = getUniqueIdRandom()
        const newItem = {
            key: newKey,
            extra: <PopConfirm placement="right" title="Porfavor, confirme si quiere eliminar este requerimiento"  onClick={event => event.stopPropagation()} okText="Eliminar" cancelText="Cancelar" onConfirm={()=> removeItem(newKey)}><MinusCircleOutlined style={{color:'#ff4d4f'}}/></PopConfirm>,
            children: <InputItem/>
        }
        setItemOptions(oldItem => [...oldItem,newItem])
    }

    const removeItem = (key) => {
        setItemOptions(itemOptions => itemOptions.filter(item => item.key !== key))
        message.success('Requerimiento eliminado');
    }

    const requirementItemProps = {
        itemOptions,
        initialItem
    }

    const buttonProps = {
        type: 'primary',
        shape: 'round',
        icon: <PlusOutlined />,
        children: 'Agregar Requerimiento',
        className: 'mt-3',
        onClick,
        disabled: (itemOptions.length > 4)
    }

    return <Row>
        <Col span={24}>
            <RequirementItem {...requirementItemProps} />
            <Button {...buttonProps} />
        </Col>
    </Row>
}

export default Requirements