import React, {Fragment} from 'react'
// helpers
import map from 'lodash/map'

const RequirementItem = (props) => {
    const {itemOptions } = props
    const children = map(itemOptions, ({ key, children, extra }) => (
        <div key={key}> {(extra)?extra:null} {children} </div>
    ))
    return <Fragment>
        {children}
    </Fragment>
}

export default RequirementItem