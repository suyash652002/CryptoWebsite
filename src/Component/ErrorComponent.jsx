import React from 'react'
import loader from './loader.gif'
export default function ErrorComponent({ message }) {
    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "500", fontSize: "100px" }}>{message}</h1>
            <img style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "20%"
            }} src={loader} alt='error' />
        </div>
    )
}
