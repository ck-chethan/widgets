import axios from 'axios'
import React, { useEffect } from 'react'

const Convert = ({ language, text }) => {
    useEffect(() => {

        console.log("New Language/ Text");

    }, [language, text])
    return (
        <div>

        </div>
    )
}

export default Convert
