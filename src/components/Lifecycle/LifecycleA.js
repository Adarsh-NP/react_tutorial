import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
import Parentcomp from '../parentcomp'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Adarsh'
        }
        console.log('LifecycleA constructor')
    }
    
static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromProps')
    return null //returns new state or null
}

componentDidMount(){
    console.log('LifecycleA componentDidMount')
}

shouldComponentUpdate(){
    console.log('shouldcomponentUpdate A')
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate')
    return null    
}

componentDidUpdate(){
    console.log('component did update A')
}

changeState = () => {
    this.setState({
        name: 'Changed state'
    })
}

//check the console to get the order of execution of these methods

    render() {
        console.log('lifecycleA render')
        return (
            <div>                
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
