import React from 'react'

class Welcome extends React.Component {
    render(){
    const {name, hero} = this.props
    // const {state1, state2} = this.state  this is the similar syntax for state
    return <h1>{this.props.name} {this.props.heroname}</h1>
    }
}

export default Welcome

//render is must in class components