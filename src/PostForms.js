import React, { Component } from 'react'
import axios from 'axios'

class PostForms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: '',
             title: '',
             message: ''
        }
    }
    
    change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios
            .post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response);
                
            })
            .catch(error=>{
                console.log(error);
                
            })

    }

    render() {
        const {id, title, message} = this.state
        return (
            <div>
                <form>
                    <div>
                    <input type='text' name='id' value={id} onChange={this.change}></input>
                    </div>
                    <div>
                    <input type='text' name='title' value={title} onChange={this.change}></input>
                    </div>
                    <div>
                    <input type='text' name='message' value={message} onChange={this.change}></input>
                    </div>
                    <button type='submit' onSubmit={this.submitHandler}>submit</button>
                </form>
            </div>
        )
    }
}

export default PostForms
