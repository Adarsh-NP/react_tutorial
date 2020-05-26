import React, { Component } from 'react'
import Childcomp from './childcomp'
//whenever we create class components we need to import react and component as well

class Parentcomp extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
        console.log(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return ( 
            <div>
                <Childcomp  greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Parentcomp

