import React from 'react'
import { Button } from 'antd'

export default function DoctorlistComponent ({ setNext }) {
    const prevScreen = () => {
        setNext(prev => { return prev - 1 })
    }
    return (
        <div>
            <h1>jay mataji</h1>
            <Button onClick={prevScreen}>go back</Button>
        </div>
    )
}
