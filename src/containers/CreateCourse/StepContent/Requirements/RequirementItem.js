import React, {Fragment} from 'react'
// antd
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
// helpers
import map from 'lodash/map'

const RequirementItem = (props) => {
    const {itemOptions } = props
    const children = map(itemOptions, ({ key, children, extra }) => (
        <Row key={key}> 
            {(extra)
                ? <Fragment><Col span={1} className="text-center">{extra}</Col><Col span={23}>{children}</Col></Fragment>
                : <Col span={24}>{children}</Col>}
        </Row>
    ))

    return children
}

export default RequirementItem