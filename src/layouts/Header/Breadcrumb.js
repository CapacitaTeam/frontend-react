import React from 'react'
import {UISref,UIRouterConsumer} from "@uirouter/react";
// antd
import Breadcrumb from "antd/lib/breadcrumb";
// hooks
import useCurrentState from '../../hooks/useCurrentState'
// helpers
import drop from 'lodash/drop'
import pick from 'lodash/pick'

const BreadCrumb = ({UIRouter}) => {
    const { stateService } = useCurrentState(UIRouter)

    const states = () => {
        const objects = drop(stateService.getCurrentPath(), 2)
        return objects.map(states => pick(states.state.self, ['name', 'title']))
    }

    const currentState = stateService.current

    return <Breadcrumb className="p-0 mx-2">
        {states().map((item, key) =>
            item.name === currentState.name ? (
                <Breadcrumb.Item key={key} active="true">
                    <span className="text-dark">{item.title}</span>
                </Breadcrumb.Item>
            ) : (
                <Breadcrumb.Item key={key}>
                    <UISref to={item.name}>
                        <a className="text-muted">{item.title}</a>
                    </UISref>
                </Breadcrumb.Item>
            )
        )}
    </Breadcrumb>
}


export default () => (
    <UIRouterConsumer>
        {UIRouter => <BreadCrumb UIRouter={UIRouter} />}
    </UIRouterConsumer>
)