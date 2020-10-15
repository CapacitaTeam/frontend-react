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
// helpers
import flatten from 'lodash/flatten'
import cloneDeep from 'lodash/cloneDeep'
import remove from 'lodash/remove'

const Source = () => {

    const [optionKey,setOptionKey] = useState(1)
    const initialOption = [
        {
            key: optionKey,
            title: <InputTitle.Collapse placeholder="Titulo de la seccion" />,
            children: "test"
        }
    ]
    const [itemOptions,setItemOptions] = useState(initialOption)

    const collapseItemProps = {
        itemOptions
    }

    const onClick = () => {
        setOptionKey( optionKey + 1)
        const newItem = {
            key: optionKey,
            title: <InputTitle.Collapse placeholder="Titulo de la seccion" />,
            extra: <MinusCircleOutlined style={{color:'#ff4d4f'}} onClick={()=> removeItem(optionKey)}/>,
            children: "test"
        }
        let items = cloneDeep(itemOptions)
        items.push(newItem)
        setItemOptions(items)
    }

    const removeItem = (key) => {
        const items = remove(cloneDeep(itemOptions), (item) => item.key = key)
        setOptionKey(optionKey - 1)
        setItemOptions(items)     
    };

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