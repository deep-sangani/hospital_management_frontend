import React, { useEffect, useState } from 'react'
import { Table } from 'antd'

export default function PatientTable ({ form }) {
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
        }, {
            title: "Age",
            key: "age",
            dataIndex: "age"
        },
        {
            title: "Mobile no",
            key: "mobileno",
            dataIndex: "mobileno"
        }
    ]

    const data = [
        {
            key: 1,
            name: "deep",
            age: 20,
            mobileno: "9727164672"
        },
        {
            key: 2,
            name: "yash",
            age: 18,
            mobileno: "9123456789"
        },
        {
            key: 3,
            name: "jenish",
            age: 18,
            mobileno: "97899999"
        },
        // {
        //     key: 4,
        //     name: "raj",
        //     age: 20
        // },
        // {
        //     key: 5,
        //     name: "deep sangani",
        //     age: 20
        // },
        // {
        //     key: 6,
        //     name: "deep",
        //     age: 20
        // },
        // {
        //     key: 7,
        //     name: "yash",
        //     age: 18
        // },
        // {
        //     key: 8,
        //     name: "jenish",
        //     age: 18
        // },
        // {
        //     key: 9,
        //     name: "raj",
        //     age: 20
        // },
        // {
        //     key: 10,
        //     name: "deep sangani",
        //     age: 20
        // },
        // {
        //     key: 11,
        //     name: "deep sangani",
        //     age: 20
        // }
    ]



    return (
        <Table columns={col} dataSource={dataDisplay} />
    )
}
