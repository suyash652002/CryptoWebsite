import React from 'react'
import loader from './loader.gif'
import './Loading.css'
export default function Loader() {
    return (
        <div className='loader-div'>
            <h1 >Loading!!</h1>
            <img style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "20%"
            }} src={loader} alt="" />
        </div>
    )
}
