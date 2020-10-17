import React, {useState,useEffect} from 'react';
// antd
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import Popconfirm from 'antd/lib/popconfirm'
import message from 'antd/lib/message'
// components
import InputTitle from '../../Common/InputTitle'
import CollapseItem from './CollapseItem'
// icon
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
// util
import {getUniqueIdRandom} from '../../../../utils/getUniqueId'

const Source = () => {
    const initialItem = getUniqueIdRandom()
    const initialOption = [
        {
            key: initialItem,
            title: <InputTitle.Collapse placeholder="Titulo de la seccion" />,
            children: "test"
        }
    ]
    const [itemOptions,setItemOptions] = useState([])

    useEffect(()=> {
        if (itemOptions && itemOptions.length == 0) setItemOptions(initialOption)
    })

    const collapseItemProps = {
        itemOptions,
        initialItem
    }

    const onClick = () => {
        const newKey = getUniqueIdRandom()
        const newItem = {
            key: newKey,
            title: <InputTitle.Collapse placeholder="Titulo de la seccion" />,
            extra: <Popconfirm title="Porfavor, confirme si quiere eliminar esta seccion" okText="Borrar" cancelText="Cancelar" onConfirm={()=> removeItem(newKey)}><MinusCircleOutlined style={{color:'#ff4d4f'}}/></Popconfirm>,
            children: "test"
        }
        setItemOptions(oldItem => [...oldItem,newItem])
    }

    const removeItem = (key) => {
        setItemOptions(itemOptions => itemOptions.filter(item => item.key !== key))
        message.success('Seccion eliminada');
    }

    const buttonProps = {
        type: 'primary',
        shape: 'round',
        icon: <PlusOutlined />,
        children: 'Agregar seccion',
        className: 'mt-3',
        onClick,
        disabled: (itemOptions.length > 4)
    }

    return <Row> 
        <Col span={24}>
            <CollapseItem {...collapseItemProps}/>
            <Button {...buttonProps} />
        </Col>
    </Row>
}

export default Source