import React, { Component } from 'react'
import Purecomp from './Purecomp'
import Regcomp from './Regcomp'
import MemoComp from './MemoComp'

class Parentcompo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Adarsh'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Adarsh'
            })
        }, 2000)
        return false
    }
    
    render() {
        console.log('**********Parentcomp render*************')
        return (
            <div>
                Parent Comp
                <MemoComp name={this.state.name}/>
                {/* <Regcomp name={this.state.name}></Regcomp>
                <Purecomp name={this.state.name}></Purecomp> */}
            </div>
        )
    }
}

export default Parentcompo
