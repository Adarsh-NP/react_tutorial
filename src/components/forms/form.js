import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'react'
        }
        
    }
    Handleusername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    HandleTextarea = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    Handleselect = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    HandleSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.HandleSubmit}>
                <label>Name</label>
                <input type="text" value={this.state.username} onChange={this.Handleusername} placeholder='Enter your username'/>
                <div>
                    <label>Comments  </label>
                    <textarea value={this.state.comment} onChange={this.HandleTextarea} placeholder='Your comments here'></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.Handleselect}>
                        <option value="react">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
