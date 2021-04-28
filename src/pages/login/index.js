import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import loginbg from '../../assets/loginback.svg'
import './login.css'

export default function LoginComponent ({ setLogin }) {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const userNameHandler = (e) => {
        setUserName(e.target.value);
        console.log(e.target.value);
    }
    const passwordHandler = (e) => setPassword(e.target.value)

    const submitHandler = () => {
        window.localStorage.setItem("login", "true")
        setLogin("login")
    }

    return (
        <div >
            <Row className="login" justify="space-around" align="middle" style={{ height: "100vh" }}>
                <Col span={9}>
                    <img src={loginbg} alt="" width="120%" />
                </Col>
                <Col span={8} className="loginForm" >
                    <Form

                        name="basic"
                        initialValues={{
                            remember: true,
                        }}


                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}

                        >
                            <Input onChange={userNameHandler} value={userName} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password onChange={passwordHandler} value={password} />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item  >
                            <Button block type="primary" htmlType="submit" size="large" onClick={submitHandler}>
                                Submit </Button>
                        </Form.Item>
                    </Form>
                </Col>

            </Row>
        </div>
    )
}

