import React, { useState } from 'react'
import { Button, Layout, Row, Col, Card, Input } from 'antd'
import DoctorTable from './DoctorTable'
const { Search } = Input
const { Content } = Layout

export default function DoctorlistComponent ({ setNext }) {
    const [search, setSearch] = useState("")
    const prevScreen = () => {
        setNext(prev => { return prev - 1 })
    }
    return (

        <Content style={{ margin: "24px 16px 0" }}>
            <Row style={{ marginBottom: "30px" }}><Button onClick={prevScreen}>Go back</Button></Row>
            <Row justify="space-around" >
                <Col span={10}>
                    <Search
                        placeholder="search available doctor"
                        enterButton
                        size="large"
                        style={{ marginTop: "20px" }}
                        onSearch={(value) => { setSearch(value) }}
                    />
                </Col>
                <Col span={10}>
                    <Card title="Doctor list">
                        <DoctorTable search={search} setNext={setNext} />
                    </Card>
                </Col>
            </Row>
        </Content>

    )
}
