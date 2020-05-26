import React from 'react'

const Hello = () => {
    // JSX syntax
    //return (
    //     <div className='hello'>
    //         <h1>Hello Adarsh</h1>
    //     </div>
    // )
    // tag, properties, children for the elt
    return React.createElement('div', {id:'1', className: 'hello'}, React.createElement('h1', null, 'Adarsh') )
} 
//css class is className in react
//the second param is the object of key value pairs that will be applied to the elements


export default Hello