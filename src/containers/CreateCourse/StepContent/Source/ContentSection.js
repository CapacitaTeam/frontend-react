import React from 'react';
import classNames from 'classnames';
// antd
import List from 'antd/lib/list'
import Input from 'antd/lib/input'
// style
import style from '../../style.module.scss'
// components
import ContentSectionItem from './ContentSectionItem';
import InputUpload from '../../../../components/InputUpload';

const ContentSection = (props) => {

    const className = classNames(style.sec_list_item)

    const dataList = [
        {
            title: 'Descripcion',
            defaultChecked: true,
            children: <Input.TextArea rows={4}/>
        },
        {
            title: 'Imagen',
            children: <InputUpload type="image"/>
        },
        {
            title: 'Video',
            children: "test"
        },
        {
            title: 'PDF',
            children: "test"
        },
        {
            title: 'Prueba',
            children: "test"
        }
    ]
    const  listProps = {
        itemLayout: "horizontal",
        dataSource: dataList,
        renderItem: (item) => <List.Item className={className}> <ContentSectionItem {...item}/></List.Item>
    }

    return <List {...listProps}/>
}

export default ContentSection