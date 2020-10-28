import React, { forwardRef } from 'react'
// antd
import Input from 'antd/lib/input'
import Space from 'antd/lib/space'
// helpers
import set from 'lodash/set'
import map from 'lodash/map'
// icon
import { FolderOutlined } from '@ant-design/icons';

const InputTitle = props => {
    const {
        icon,
        readOnly,
        inputRef: ref,
        ...attr
      } = props

    const propsSpace = {
        direction:'horizontal',
        start:'start'
    }

    const propsInput = {
        ref,
        ...attr
    }

    return <Space {...propsSpace}>
        {icon}
        <Input {...propsInput}/>
    </Space>
}

const Collapse = forwardRef((props, inputRef) => {
    const propsCollapse = {
        inputRef,
        ...props,
        icon: <FolderOutlined/>,
    }

    return <InputTitle {...propsCollapse} />
})

export default { Collapse }