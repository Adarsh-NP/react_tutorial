import React, { Component } from 'react'

class Usergreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {

        if(this.state.isLoggedIn){
            return (
                <div>
                    <div>Hello Guest</div>
                </div>
            )
        }else {
        return (
            <div>
                <div>Hello Addy</div>
            </div>
        )
        }
    }
}

//if else dont work inside JSX

export default Usergreet
