import React, { Component } from 'react'

export class Jsrender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn: false
        }
    }
    
    render() {
        let message
        if(this.state.IsLoggedIn){
            message = <div>Welcome guest</div>
        }else{
            message = <div>Hello Addy</div>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default Jsrender
