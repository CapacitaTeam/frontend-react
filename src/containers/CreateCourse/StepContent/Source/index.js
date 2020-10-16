import React, {useState,useEffect} from 'react';
// antd
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
// components
import InputTitle from '../../Common/InputTitle'
import CollapseItem from './CollapseItem'
// icon
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
// util
import {getUniqueIdRandom} from '../../../../utils/getUniqueId'

const Source = () => {
    const initalItem = getUniqueIdRandom()
    const initialOption = [
        {
            key: initalItem,
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
        initalItem
    }

    const onClick = () => {
        const newKey = getUniqueIdRandom()
        const newItem = {
            key: newKey,
            title: <InputTitle.Collapse placeholder="Titulo de la seccion" />,
            extra: <MinusCircleOutlined style={{color:'#ff4d4f'}} onClick={()=> removeItem(newKey)}/>,
            children: "test"
        }
        setItemOptions(oldItem => [...oldItem,newItem])
    }

    const removeItem = (key) => setItemOptions(itemOptions => itemOptions.filter(item => item.key !== key));

    const buttonProps = {
        type: 'primary',
        shape: 'round',
        icon: <PlusOutlined />,
        children: 'Agregar seccion',
        className: 'mt-3',
        onClick
    }

    return <Row> 
        <Col span={24}>
            <CollapseItem {...collapseItemProps}/>
            <Button {...buttonProps} />
        </Col>
    </Row>
}

export default Source