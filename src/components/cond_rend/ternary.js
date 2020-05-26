import React, { Component } from 'react'

export class Tern extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn: false
        }
    }
    
    render() {
        return (
            this.state.IsLoggedIn ?
            <div>Welcome Guest</div> :
            <div>Welcome Addy</div>
        )
    }
}

export default Tern
