import React from 'react'
import { Skeleton, Row, Col, Divider } from 'antd';

export const SkeletonCreateQuiz = () => {
    return (
        <Row>
            <Col span={7} style={{ maxHeight: '80vh', overflow: 'auto', paddingBottom: '5px' }}>
                <Skeleton active avatar paragraph={{ rows: 2 }} />
                <Skeleton active avatar paragraph={{ rows: 2 }} />
                <Skeleton active avatar paragraph={{ rows: 2 }} />
            </Col>

            <Col className="text-center" span={1}>
                <Divider type="vertical" style={{ height: '100%' }} />
            </Col>

            <Col span={16}>
                <Skeleton active paragraph={{ rows: 12 }} />
            </Col>
        </Row>
    )
}
