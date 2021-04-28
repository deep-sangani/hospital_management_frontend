import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import LoginComponent from './pages/login';
import DeshBoardLayout from './pages/deshboardLayout';
export default function App () {
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (window.localStorage.getItem("login")) {
            setLogin(true)
        }
        return () => {

        }
    }, [login])
    if (login) {
        return (<DeshBoardLayout />)
    } else {
        return (<LoginComponent login={login} setLogin={setLogin} />)
    }
}
