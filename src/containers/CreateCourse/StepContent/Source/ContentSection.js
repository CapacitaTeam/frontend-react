import React from 'react';
import classNames from 'classnames';
// antd
import List from 'antd/lib/list'
// style
import style from '../../style.module.scss'

const ContentSection = (props) => {

    const className = classNames(style.steps_content)

    const dataList = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        }
    ]
    const  listProps = {
        itemLayout: "horizontal",
        dataSource: dataList,
        renderItem: (item) => <List.Item className={className}>{item.title}</List.Item>
    }

    return <List {...listProps}/>
}

export default ContentSection