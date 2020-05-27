import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
    render() {
        console.log('*******Purecomp render*********');
        
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
//shallow compares the prevstate with currentstate and prevprops with current props
//if difference then only re renders else doesn't
// here the prev value of props.name is same as the current value hence it doesn't re render
export default Purecomp
