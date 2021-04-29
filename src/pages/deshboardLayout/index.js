import React, { useEffect, useState } from "react"
import { Layout, Menu } from "antd"
import './deshboard.css'
import DeshBoardComponent from "../deshboard"
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import AppointmentComponent from "../appointment"
import HospitalLogo from '../../assets/hospitalLogo.svg'
const { Footer, Sider } = Layout

export default function DeshBoardLayout () {



    return (
        <div className="deshboard">
            <Layout className="deshboard">
                <Router>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => {
                            console.log(broken)
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type)
                        }}
                    >
                        <div className="logo" style={{ marginTop: "10px" }}><img src={HospitalLogo} alt="" width="200px" /></div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                            <Menu.Item key="1"  ><Link to="/">DeshBoard</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/appointment">Appointment</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>

                        <Switch>
                            <Route path="/" exact >
                                <DeshBoardComponent />
                            </Route>
                            <Route path="/appointment">
                                <AppointmentComponent />
                            </Route>
                        </Switch>


                        <Footer style={{ textAlign: "center" }}>
                            Deep Sangani ©2021 Created in india
                    </Footer>
                    </Layout>
                </Router>
            </Layout>


        </div>
    )
}
