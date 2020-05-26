import React from 'react'

const Greet =  (props) => {
    return(
    <div>
            <h1>Hello {props.name} has his fav hero {props.heroname}</h1>
            {props.children}
    </div>
    )
}

export default Greet