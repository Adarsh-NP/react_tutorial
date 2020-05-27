import React, { Component } from 'react'

class Refsdomo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbref = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef);

        
    }
    clicked(){
        // alert(this.inputRef.current.value)
        alert(this.setCbref)        
    }
    render() {
        return (
            <div>
                <button onClick={() => this.clicked()}>Click</button>
                <input type="text" ref={this.inputRef}></input>
                <input type="text" ref={this.setCbref}></input>
            </div>
        )
    }
}

export default Refsdomo
