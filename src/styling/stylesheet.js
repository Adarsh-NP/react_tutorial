import React from 'react'
import './mystylesheet.css'
function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} fontsi` }>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
