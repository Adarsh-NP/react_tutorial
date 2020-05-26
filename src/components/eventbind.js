import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        // third approach this.clickHandler = this.clickHandler.bind(this)
    }
    // 2nd approach of binding in the constructor
    //clickHandler(){
    //     this.setState ({
    //         message: 'Goodbye'
    //     })
    //     console.log('working')
    // } //4 below
    clickHandler = () => {
        this.setState ({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*  2nd approach <button onClick={() => this.clickHandler()}>Click Me</button> */}
                {/* 1st approach with same function of the second one<button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                {/* 3rd approach with same constructor binding<button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventBind
