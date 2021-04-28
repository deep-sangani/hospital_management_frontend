import React from 'react'
import { Layout, Row, Col, Card } from 'antd'
import CountUp from 'react-countup'
const { Content } = Layout

export default function DeshBoardComponent () {
    return (
        <Content style={{ margin: "24px 16px 0" }}>
            <Row justify="space-around" align="middle">
                <Col span={6}>
                    <Card title="total covid patients" style={{ backgroundColor: "#8dcff8" }} >
                        <h2 style={{ textAlign: "center", fontSize: "40px", color: "#177ddc" }}><CountUp end={100} delay={1} /></h2>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="recover covid patients" style={{ backgroundColor: "#b2e58b" }} >
                        <h2 style={{ textAlign: "center", fontSize: "40px", color: "#3c8618" }}><CountUp end={100} delay={1} /></h2>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="positive covid patients" style={{ backgroundColor: "#f37370" }} >
                        <h2 style={{ textAlign: "center", fontSize: "40px", color: "#d32029" }}><CountUp end={100} delay={1} /></h2>
                    </Card>
                </Col>
            </Row>
        </Content>

    )
}
