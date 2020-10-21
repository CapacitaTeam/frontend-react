import React from 'react'
//antd
import Switch from 'antd/lib/switch'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const ContentSectionItem = (props) => {
    const {title,defaultChecked,children} = props

    const switchProps = {
        checkedChildren: <CheckOutlined />,
        unCheckedChildren: <CloseOutlined />,
        defaultChecked
    }

    return <div>
        <Row gutter={[16, 8]} className="m-1">
            <Col span={1}><Switch {...switchProps} /></Col>
            <Col span={23}>{title}</Col>
        </Row>
        <Row gutter={[16, 8]} className="m-2">
            <Col span={24}>{children}</Col>
        </Row>
    </div>
}

export default ContentSectionItem