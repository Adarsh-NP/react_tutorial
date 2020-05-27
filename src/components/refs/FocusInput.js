import React, { Component } from 'react'
import Input from './input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.compRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.compRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input  ref={this.compRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
