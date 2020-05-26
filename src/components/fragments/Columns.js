import React from 'react'

function Columns() {
    const items = ['adarsh', 'Narayan']
    return (
        <React.Fragment>
            {/* <td>Name</td>
            <td>Adarsh</td> */}
            {
            items.map( item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        </React.Fragment>
    )
}
//fragments accept key when rendering list of items
//key is the only attribute that can be passed to react fragment
//react fragment can also be represented by <> and </> 
//without writing anything inside it but we can't pass in the key attribute in this case
export default Columns
