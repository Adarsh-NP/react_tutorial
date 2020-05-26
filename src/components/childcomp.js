import React from 'react'

function Childcomp(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet </button> down below is passing the parameters too*/}
            <button onClick={() => props.greetHandler('child')}>Greet </button>
        </div>
    )
}

export default Childcomp
