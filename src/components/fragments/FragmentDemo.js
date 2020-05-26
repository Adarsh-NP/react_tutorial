import React from 'react'

function FragmentDemo() {
    return (
        <React.Fragment>
            <h1>
            FragmentDemo
            </h1>
            <p>
                This is the description of the fragements
            </p>

        </React.Fragment>
        
    )
}
//we see that the fragments have extra div tag 
//between the app div and the content when it was enclose in div tag instead of react.fragment
export default FragmentDemo
