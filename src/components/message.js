import React, { Component } from 'react'

class Message extends React.Component {
        constructor() {
            super()
            this.state = {
                message: "Welcome visitor"
            }
        }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render(){
        return(
    <div>
    <h1>{this.state.message}</h1>

    <button onClick={() => this.changeMessage()}>Click Me</button>
    </div>
        )
    }
}

//the only place where you can assign this.state is the constructor method and after that we should use this.setState 
export default Message