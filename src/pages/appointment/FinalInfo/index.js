import React from 'react'
import { Button } from 'antd'

export default function Finalinfo ({ setNext }) {
    const prevScreen = () => {
        setNext(prev => { return prev - 1 })
    }
    return (
        <div>
            <h1>jay mataji</h1>
            <Button onClick={prevScreen}>Go back</Button>
        </div>
    )
}
