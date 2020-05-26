import React, { Component } from 'react'

export class ShortC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn: true
        }
    }
    
    render() {
        return (
            this.state.IsLoggedIn && <div>Welcome Addy</div>
        )
    }
}

export default ShortC
