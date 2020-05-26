import React from 'react'

// const Greetde =  ({name, heroname}) => {
//     return(
//     <div>
//             <h1>Hello {name} has his fav hero {heroname}</h1>
            
//     </div>
//     )
// }
const Greetde =  (props) => {
    const {name, hero} = props 
    return(
    <div>
            <h1>Hello {name} has his fav hero {hero}</h1>
            
    </div>
    )
}

//props are immutable ie their values cannot be changed


export default Greetde