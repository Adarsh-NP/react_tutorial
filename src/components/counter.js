import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props){
         super(props)
         this.state = {
             count: 0
         }
     }
     incrementCount() {
         this.setState ({
             count: this.state.count + 1
         })
     }
     incrementFive(){
         this.setState((prevState => ({
             count: prevState.count + 5
         })))
     }

    render() {
        return (
            <div>
              <div>Count - {this.state.count}</div>
              <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

//whenever you have to execute some code after the state has been changed, do not keep that out of the setState method
//even this.state.count + 5 would work fine

export default Counter
