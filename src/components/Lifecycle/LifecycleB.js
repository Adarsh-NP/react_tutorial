import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Adarsh'
        }
        console.log('LifecycleB constructor')
    }
    
static getDerivedStateFromProps(props, state){
    console.log('LifecycleB getDerivedStateFromProps')
    return null //returns new state or null
}

shouldComponentUpdate(){
    console.log('shouldcomponentUpdate B')
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('component did update B')

}


//check the console to get the order of execution of these methods

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
