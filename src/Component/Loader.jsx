import React from 'react'
import loader from './loader.gif'
export default function Loader() {
    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "900", fontSize: "100px" }}>Loading!!</h1>
            <img style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "20%"
            }} src={loader} alt="" />
        </div>
    )
}
