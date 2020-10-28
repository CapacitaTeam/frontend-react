import React from 'react'
// antd
import Select from 'antd/lib/select'
// helpers
import set from 'lodash/set'
import map from 'lodash/map'

const Selector = props => {

    const {readOnly,inputRef: ref, options} = props

    const children = map(options, ({ key, value }) => (
        <Select.Option value={key} children={value} />
    ))

    const propsSelect = {
        ref,
        children,
    }

    if (readOnly) set(propsSelect, 'open', false)

    return <Select {...propsSelect} />
}

export default Selection;