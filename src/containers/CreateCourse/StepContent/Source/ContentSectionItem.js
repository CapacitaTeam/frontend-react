import React, {useState,useEffect} from 'react'
//antd
import Switch from 'antd/lib/switch'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Empty from 'antd/lib/empty'
import { CloseOutlined, CheckOutlined, StopOutlined } from '@ant-design/icons';

const ContentSectionItem = (props) => {
    const {title,defaultChecked,children} = props
    const [isChecked, setIsChecked] = useState(false)
    const onChangeSwitch = (checked,e) => setIsChecked(checked)

    useEffect(()=>{
        if(defaultChecked) setIsChecked(true)
    })

    const switchProps = {
        checkedChildren: <CheckOutlined />,
        unCheckedChildren: <CloseOutlined />,
        onChange: onChangeSwitch,
        disabled:defaultChecked,
        checked:isChecked
    }

    const emptyProps={
        description: <StopOutlined />,
        image: Empty.PRESENTED_IMAGE_SIMPLE
    }

    return <div>
        <Row gutter={[16, 8]} className="m-1">
            <Col span={1}><Switch {...switchProps} /></Col>
            <Col span={23}>{title}</Col>
        </Row>
        <Row gutter={[16, 8]} className="m-2">
        <Col span={24}>
            {(isChecked)
            ? children
            : <Empty {...emptyProps}/>
            }
        </Col>
        </Row>
    </div>
}

export default ContentSectionItem