import React from 'react'
import Collapse from 'antd/lib/collapse'
import classNames from 'classnames';
// helpers
import map from 'lodash/map'
// Style
import style from '../../style.module.scss'

const CollapseItem = props => {
    const {itemOptions,initalItem} = props
    const className = classNames(style.collapse_panel_item)

    const collapseProps = {
        defaultActiveKey: [initalItem],
        ghost: true,
        expandIconPosition: 'right'
    }

    const children = map(itemOptions, ({ key, title, children, extra }) => (
        <Collapse.Panel className={className} key={key} header={title} extra={(extra)?extra:null}> {children} </Collapse.Panel>
    ))

    return <Collapse {...collapseProps}>
        {children}
    </Collapse>
}

export default CollapseItem