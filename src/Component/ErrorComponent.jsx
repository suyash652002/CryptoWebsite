import React from 'react'
import loader from './loader.gif'
import './Loading.css'
export default function ErrorComponent({ message }) {
    return (
        <div className='error-div'>
            <h1>{message}</h1>
            <img style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "20%"
            }} src={loader} alt='error' />
        </div>
    )
}
