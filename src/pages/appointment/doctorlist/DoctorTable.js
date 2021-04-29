import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'


export default function DoctorTable ({ search, setNext }) {
    const [tabledata, setTabledata] = useState()
    useEffect(() => {
        const filter = data.filter((obj) => obj.name.includes(search))
        setTabledata(filter)
    }, [search])
    const onSubmit = (doctorinfo) => {

        setNext(prev => {
            return {
                ...prev,
                state: prev.state + 1,
                doctorinfo: doctorinfo
            }
        })
    }
    const cols = [
        {
            title: "Name",
            key: "name",
            dataIndex: "name",

        },
        {
            title: "Specialization",
            key: "specialization",
            dataIndex: "specialization"
        },
        {

            key: "action",
            render: (text, event) => <Button onClick={() => onSubmit(event)}>select doctor</Button>

        }

    ]

    const data = [
        {
            key: 1,
            name: "deep sangani ",
            specialization: "MD (madicine) "

        },
        {
            key: 2,
            name: "yash nathwani ",
            specialization: "MD (madicine) "

        },
        {
            key: 3,
            name: "priyank vachani ",
            specialization: "MD (madicine) "

        },
        {
            key: 4,
            name: "hiren sariya",
            specialization: "MD (madicine) "

        },


    ]
    return (
        <Table dataSource={tabledata} columns={cols} />


    )
}
