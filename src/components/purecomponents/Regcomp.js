import React, { Component } from 'react'

class Regcomp extends Component {
     
    render() {
        console.log('Reg comp render')

        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default Regcomp
