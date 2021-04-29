import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'

export default function PatientTable ({ form, setNext }) {
    const ProccedNext = (val) => {
        setNext(prev => { return { state: prev.state + 1, payload: val } })
        console.log(val);
    }
    const [dataDisplay, setDataDisplay] = useState([])
    useEffect(() => {

        if (form.name) {
            let filter = data.filter((dataobj) => dataobj.name.startsWith(form.name))
            console.log(filter);
            setDataDisplay(filter)

        } else {
            let filter = data.filter((dataobj) => dataobj.mobileno.startsWith(form.mobileno))
            console.log(filter);
            setDataDisplay(filter)
        }
    }, [form])


    const col = [
        {
            title: "Name",
            key: "name",
            dataIndex: "name"
        },
        {
            title: "Mobile no",
            key: "mobileno",
            dataIndex: "mobileno"
        },
        {
            key: "select",
            render: (text, event) => <Button onClick={() => ProccedNext(event)}>Continue</Button>
        }
    ]

    const data = [
        {
            key: 1,
            title: "",
            name: "deep",
            age: {
                year: 20,
                month: 0,
                day: 0
            },
            mobileno: "9727164672",
            address: "main street",
            state: "gujrat",
            email: "drsangani120@gmail.com",
            remark: ""
        },
        {
            key: 2,
            title: "",
            name: "deep",
            age: {
                year: 20,
                month: 10,
                day: 12
            },
            mobileno: "9727164672",
            address: "main street",
            state: "gujrat",
            email: "drsangani120@gmail.com",
            remark: ""
        },
        {
            key: 3,
            title: "",
            name: "deep",
            age: {
                year: 20,
                month: 10,
                day: 12
            },
            mobileno: "9727164672",
            address: "main street",
            state: "gujrat",
            email: "drsangani120@gmail.com",
            remark: ""
        },

    ]



    return (
        <Table columns={col} dataSource={dataDisplay} />
    )
}
