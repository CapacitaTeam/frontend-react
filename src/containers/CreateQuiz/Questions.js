import React from 'react'
import { List, Avatar } from 'antd'

const data = [
    {
        title: 'Pregunta #1',
        id: 1,
        question: 'Esta es la pregunta #1'
    },
    {
        title: 'Pregunta #2',
        id: 2,
        question: 'Esta es la pregunta #2'
    },
    {
        title: 'Pregunta #3',
        id: 3,
        question: 'Esta es la pregunta #3'
    },
    {
        title: 'Pregunta #4',
        id: 4,
        question: 'Esta es la pregunta #4'
    },
];

const Questions = () => {
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.question}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

export default Questions
