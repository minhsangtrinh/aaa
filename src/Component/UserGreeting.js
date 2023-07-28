import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Wellcome to HN city</div>

        // let msg 
        // if (this.state.isLoggedIn) {
        //     msg = <div>Wellcome to HCM City</div>
        // } else {
        //     msg = <div>Wellcome to ĐN city</div>
        // }
        // return <div>{msg}</div>


        // return this.state.isLoggedIn ?
        // (<div>Wellcome to HCM City</div>) :
        // (<div>Wellcome to ĐN city</div>)


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Wellcome to HCM City</div>
        //     )
        // } else {
        //     return (
        //         <div>Wellcome to ĐN city</div>
        //     )
        // }
    }
}

export default UserGreeting
