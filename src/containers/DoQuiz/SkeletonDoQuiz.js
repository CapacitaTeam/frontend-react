import React from 'react'
import { Skeleton, Row, Col, Divider } from 'antd';

export const SkeletonDoQuiz = () => {
    return (
        <Row>           
            <Col span={24}>
                <Skeleton active paragraph={{ rows: 12 }} />
            </Col>
        </Row>
    )
}
